<?php

use Livewire\Component;
use App\Http\Controllers\ChessController;

new class extends Component
{
    public $pgn;

    public function mount()
    {
        $this->pgn = ChessController::GetLastGameLiChess();
    }

    public function refreshPgn()
    {
        $this->pgn = ChessController::GetLastGameLiChess();
    }
};