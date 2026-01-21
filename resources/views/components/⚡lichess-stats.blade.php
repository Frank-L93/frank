<?php

use Livewire\Component;
use Livewire\Attributes\Mounted;
use App\Http\Controllers\ChessController;

new class extends Component
{
    public $stats;
    #[Mounted]
    public function mount()
    {
        $this->stats = json_decode(ChessController::GetLiChessStats());
     
    }
};
?>
 <div wire:poll.60s class="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">

    @placeholder 
    <div class="text-lg col-span-full text-center">
        Statistieken van LiChess aan het laden...
    </div>
    @endplaceholder
   
        @if($stats)
                 <x-stats
                    :origin="'LiChess'"
                    :category="'Total'"
                    :value="$stats->count->all"
                    :total="$stats->count->win"
                />
                <x-stats
                    :origin="'LiChess'"
                    :category="'Blitz'"
                    :value="$stats->perfs->blitz->rating"
                    :total="$stats->perfs->blitz->games"
                />
                <x-stats
                    :origin="'LiChess'"
                    :category="'Bullet'"
                    :value="$stats->perfs->bullet->rating"
                    :total="$stats->perfs->bullet->games"
                />
                <x-stats
                    :origin="'LiChess'"
                    :category="'Puzzle'"
                    :value="$stats->perfs->puzzle->rating"
                    :total="$stats->perfs->puzzle->games"
                />
          
        @endif
</div>
    
