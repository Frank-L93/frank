<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class card extends Component
{
    public $cardTitle;
    public $links;
    public $content;
    public $href;
    public $isExternal;
    public $imageSrc;
    
    /**
     * Create a new component instance.
     */
    public function __construct($cardTitle, $links = [], $content = null, $href = null, $isExternal = false, $imageSrc = null)
    {
        $this->cardTitle = $cardTitle;
        $this->links = $links;
        $this->content = $content;
        $this->href = $href;
        $this->isExternal = $isExternal;
        $this->imageSrc = $imageSrc;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.card');
    }
}
