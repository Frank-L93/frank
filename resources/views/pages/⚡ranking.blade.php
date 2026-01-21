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
        

        // Check if there are enough segments to form a valid path
        if (count($pathSegments) < 2) {
            return response()->json(['error' => 'Invalid path'], 400);
        }

        // Construct the base directory
        $baseDirectory = '/';

        // Build the subpath from the URL segments
        $subPath = implode('/', array_slice($pathSegments, 1));

        // Construct the full directory path
        $directoryPath = $baseDirectory . $subPath . "/";

        // Check if the directory exists
        if (!Storage::disk($pathSegments[0])->exists($directoryPath)) {

            return response()->json(['error' => 'Directory not found'], 404);
        }

        // Find the data.json file in the directory
        $files = Storage::disk($pathSegments[0])->files($directoryPath);

        $dataFile = null;
        foreach ($files as $file) {

            if (basename($file) === "data.json") {
                $dataFile = $file;

                break;
            }

        }

        // Check if data.json was found
        if ($dataFile === null) {
            return response()->json(['error' => 'data.json not found'], 404);
        }

        // Get the content of the data.json file
        $jsonData = Storage::disk('teams')->get($dataFile);

        // Decode the JSON data
        $data = json_decode($jsonData, true);

        // Check if the JSON data is valid
        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON data'], 500);
        }
        $this->data = $data;
        $this->loadPlayerRankings();
    }


    

    public function loadPlayerRankings()
    {
        if (isset($this->data['rounds']) && isset($this->data['players'])) {
            $rounds = $this->data['rounds'];
            $lastRound = end($rounds);

            if (isset($lastRound['ranking'])) {
                $rankings = [];
                foreach ($lastRound['ranking'] as $ranking) {
                    $player = collect($this->data['players'])
                        ->firstWhere('pairing_number', $ranking['player']);

                    $rankings[] = array_merge($ranking, [
                        'playerName' => $player['name'] ?? 'Unknown Player',
                        'playerRating' => $player['rating'] ?? 'Unknown Rating',
                        'pairingNumber' => $player['pairing_number'] ?? null,
                    ]);
                }

                usort($rankings, fn($a, $b) => $a['rank'] <=> $b['rank']);
                $this->playerRankings = $rankings;
            }
        }
    }

    public function selectPlayer($pairingNumber)
    {
        $player = collect($this->playerRankings)->firstWhere('pairingNumber', $pairingNumber);
        $this->selectedPlayer = $player;
        $this->loadPlayerMatches();
    }

    public function loadPlayerMatches()
    {
        $this->playerMatches = [];

        if ($this->selectedPlayer && isset($this->data['rounds']) && isset($this->data['players'])) {
            foreach ($this->data['rounds'] as $round) {
                if (isset($round['pairings'])) {
                    foreach ($round['pairings'] as $pairing) {
                        if ($pairing['black'] == $this->selectedPlayer['pairingNumber'] ||
                            $pairing['white'] == $this->selectedPlayer['pairingNumber']) {

                            $blackPlayer = collect($this->data['players'])
                                ->firstWhere('pairing_number', $pairing['black']);
                            $whitePlayer = collect($this->data['players'])
                                ->firstWhere('pairing_number', $pairing['white']);

                            $this->playerMatches[] = [
                                'round' => $round['number'],
                                'table' => $pairing['table'],
                                'black' => $blackPlayer['name'] ?? 'Unknown',
                                'white' => $whitePlayer['name'] ?? 'Unknown',
                                'black_points' => $pairing['black_points'],
                                'white_points' => $pairing['white_points'],
                            ];
                        }
                    }
                }
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
