<?php

use Livewire\Component;
use Livewire\Attributes\Computed;
use Livewire\Attributes\Mounted;
use App\Http\Controllers\ChessController;
use Illuminate\Support\Facades\Log;
use Livewire\Attributes\Title;

new #[Title('Chess')] class extends Component
{
    public $knsb;
    public $online;

    #[Mounted]
    public function mount()
    {
        $this->knsb = ChessController::getKNSBRating();
       
       
    }
    public function onlineStatus()
    {
        
        $status= json_decode(ChessController::GetOnlineStatus())[0];
      
       if(isset($status->online))
       {
        $this->online = $status->online;
       }
       else
       {
        $this->online = false;
       }
    }
};
?>
<div>
    <div class="text-2xl font-semibold mx-auto text-green-300 text-center">Chess</div>
    <div class="p-2 grid grid-cols-1">
        <div class="mx-auto flex items-center gap-4">
            <a href='https://lichess.org/@/Helikopter' class="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2">LiChess: Helikopter</a>
              
                    <small wire:poll.5s="onlineStatus" class="inline-flex {{ $online ? 'text-green-500' : 'text-red-500' }}">
                        <img aria-hidden="true" alt="" class="inline-flex" src="/icons/clock.svg"/>
                        {{ $online ? ' ONLINE' : ' OFFLINE' }}
                    </small>
                
        </div>
    </div>
    
 
        <livewire:lichess-stats defer />
   


    <div class="text-lg font-semibold mx-auto text-red-300 text-center mt-4">Last Game</div>
    
    @island
    <div wire:poll.5s>
        <livewire:pgn />
    </div>
    @endisland
    <div class="grid grid-cols-1 mt-4">
        <div class="mx-auto">
            <a href="https://ratingviewer.nl/lists/latest/players/8090687" class="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2 mx-2">KNSB: Frank Lambregts</a>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">
                @foreach($knsb as $rating)
                        <x-stats
                            :origin="'KNSB'"
                            :category="$rating->qualifier"
                            :value="$rating->rating"
                            :total="$rating->num_played"
                        />
                @endforeach
            
        </div>
</div>