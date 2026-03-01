<?php

use Livewire\Component;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Mounted;
use Livewire\Attributes\Title;

new #[Title('Rankings')] class extends Component
{
    public $data;
    public $playerRankings = [];
    public $selectedPlayer = null;
    public $playerMatches = [];

    #[Mounted]
    public function mount(Request $request)
    {
        $pathSegments = $request->segments();

        if (count($pathSegments) < 2 || count($pathSegments) > 3) {
            return response()->json(['error' => 'Invalid path'], 400);
        }

        // Determine disk and path: supports /teams/C/individueel (2025 default)
        // and /teams/C/2026/individueel (year-specific)
        [$disk, $directoryPath] = $this->resolveDiskAndPath($pathSegments);

        if (!Storage::disk($disk)->exists($directoryPath)) {
            return response()->json(['error' => 'Directory not found'], 404);
        }

        $dataFile = $this->findDataFile($disk, $directoryPath);
        if (!$dataFile) {
            return response()->json(['error' => 'data.json not found'], 404);
        }

        $this->data = $this->loadJsonFile($disk, $dataFile);
        if ($this->data === null) {
            return response()->json(['error' => 'Invalid JSON data'], 500);
        }

        $this->loadPlayerRankings();
    }

    private function resolveDiskAndPath(array $pathSegments): array
    {
        // Look for a year (4-digit number) in the path segments
        $yearKey = null;
        foreach ($pathSegments as $key => $segment) {
            if (is_numeric($segment) && strlen($segment) === 4) {
                $yearKey = $key;
                break;
            }
        }

        if ($yearKey !== null) {
            // Year found: use local disk with full path
            $year = $pathSegments[$yearKey];
            $disk = 'local';
            $pathWithoutYear = array_diff_key($pathSegments, [$yearKey => null]);
            $directoryPath = 'uploads/' . $year . '/teams/' . implode('/', $pathWithoutYear) . '/';
        } else {
            // No year: use default 'teams' disk (points to uploads/2025/teams)
            $disk = 'teams';
            $directoryPath = '/' . implode('/', $pathSegments) . '/';
        }

        return [$disk, $directoryPath];
    }

    private function findDataFile(string $disk, string $directoryPath): ?string
    {
        $files = Storage::disk($disk)->files($directoryPath);
        return collect($files)->first(fn($file) => basename($file) === 'data.json');
    }

    private function loadJsonFile(string $disk, string $filePath): ?array
    {
        $jsonData = Storage::disk($disk)->get($filePath);
        $data = json_decode($jsonData, true);
        return json_last_error() === JSON_ERROR_NONE ? $data : null;
    }


    public function loadPlayerRankings()
    {
        if (!isset($this->data['rounds']) || !isset($this->data['players'])) {
            return;
        }

        $lastRound = end($this->data['rounds']);
        if (!isset($lastRound['ranking'])) {
            return;
        }

        $playersMap = collect($this->data['players'])->keyBy('pairing_number');

        $rankings = collect($lastRound['ranking'])
            ->map(function ($ranking) use ($playersMap) {
                $player = $playersMap->get($ranking['player'], []);
                return array_merge($ranking, [
                    'playerName' => $player['name'] ?? 'Unknown Player',
                    'playerRating' => $player['rating'] ?? 'Unknown Rating',
                    'pairingNumber' => $player['pairing_number'] ?? null,
                ]);
            })
            ->sortBy('rank')
            ->values()
            ->toArray();

        $this->playerRankings = $rankings;
    }

    public function loadPlayerMatches()
    {
        $this->playerMatches = [];

        if (!$this->selectedPlayer || !isset($this->data['rounds']) || !isset($this->data['players'])) {
            return;
        }

        $playersMap = collect($this->data['players'])->keyBy('pairing_number');
        $pairingNumber = $this->selectedPlayer['pairingNumber'];

        foreach ($this->data['rounds'] as $round) {
            if (!isset($round['pairings'])) {
                continue;
            }

            foreach ($round['pairings'] as $pairing) {
                if ($pairing['black'] !== $pairingNumber && $pairing['white'] !== $pairingNumber) {
                    continue;
                }

                $this->playerMatches[] = [
                    'round' => $round['number'],
                    'table' => $pairing['table'],
                    'white' => $playersMap->get($pairing['white'], [])['name'] ?? 'Unknown',
                    'black' => $playersMap->get($pairing['black'], [])['name'] ?? 'Unknown',
                    'white_points' => $pairing['white_points'],
                    'black_points' => $pairing['black_points'],
                ];
            }
        }
    }

    public function closeMatches()
    {
        $this->selectedPlayer = null;
        $this->playerMatches = [];
    }
};
?>

<div>
    <div class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
        <div class="mt-6 overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
            <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <main class="mt-6">
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">Rank</th>
                                <th class="px-4 py-2">Name</th>
                                <th class="px-4 py-2">Rating</th>
                                <th class="px-4 py-2">Score</th>
                                @if(isset($data['rounds'][0]['ranking'][0]['subscore']))
                                    <th class="px-4 py-2">Bordpunten</th>
                                @endif
                                <th class="px-4 py-2">Buchholz</th>
                                <th class="px-4 py-2">Sonneborn-Berger</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($playerRankings as $ranking)
                                <tr>
                                    <td class="border px-4 py-2">{{ $ranking['rank'] }}</td>
                                    <td class="border px-4 py-2">
                                        <button
                                            wire:click="selectPlayer({{ $ranking['pairingNumber'] }})"
                                            class="text-blue-500 hover:underline"
                                        >
                                            {{ $ranking['playerName'] }}
                                        </button>
                                    </td>
                                    <td class="border px-4 py-2">{{ $ranking['playerRating'] }}</td>
                                    <td class="border px-4 py-2">{{ $ranking['score'] }}</td>
                                    @if(isset($ranking['subscore']))
                                        <td class="border px-4 py-2">{{ $ranking['subscore'] }}</td>
                                    @endif
                                    <td class="border px-4 py-2">{{ $ranking['buchholz'] }}</td>
                                    <td class="border px-4 py-2">{{ $ranking['sonneborn_berger'] }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>

                    @if($selectedPlayer)
                        <div class="mt-8">
                            <h2 class="text-xl font-semibold mb-4">
                                Matches for {{ $selectedPlayer['playerName'] }}
                                <button
                                    wire:click="closeMatches"
                                    class="ml-4 text-gray-500 hover:text-gray-700"
                                >
                                    (Close)
                                </button>
                            </h2>
                            @if(count($playerMatches) > 0)
                                <table class="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-2">Round</th>
                                            <th class="px-4 py-2">Table</th>
                                            <th class="px-4 py-2">White</th>
                                            <th class="px-4 py-2">Black</th>
                                            <th class="px-4 py-2">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($playerMatches as $match)
                                            <tr>
                                                <td class="border px-4 py-2">{{ $match['round'] }}</td>
                                                <td class="border px-4 py-2">{{ $match['table'] }}</td>
                                                <td class="border px-4 py-2">{{ $match['white'] }}</td>
                                                <td class="border px-4 py-2">{{ $match['black'] }}</td>
                                                <td class="border px-4 py-2">{{ $match['white_points'] }} - {{ $match['black_points'] }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            @else
                                <p>No matches found for this player.</p>
                            @endif
                        </div>
                    @endif
                </main>
            </div>
        </div>
    </div>
</div>
