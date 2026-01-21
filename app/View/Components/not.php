<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class not extends Component
{
    public $name;
    public $href;
    public $icon;
    public $imgSrc;
    public $color;
    /**
     * Create a new component instance.
     */
    public function __construct($name, $href = null, $icon = null, $imgSrc = null, $color = null)
    {
        $this->name = $name;
        $this->href = $href;
        $this->icon = $icon;
        $this->imgSrc = $imgSrc;
        $this->color = $color;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.not');
    }
}
