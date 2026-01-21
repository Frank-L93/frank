<?php

use Livewire\Component;

new class extends Component
{
    public $items;
    
    public $showMenu = false;
    
    #[Mounted]
    public function mount($items)
    {
        $this->items = $items;
    }

    public function toggleMenu()
    {
        $this->showMenu = ! $this->showMenu;
    }

};
?>

<div>
    <div class="flex z-30 items-center md:hidden">
            <button
                wire:click="toggleMenu"
                type="button"
                aria-label="Show Menu"
                aria-controls="mobile-menu-nav"
                aria-expanded="showMenu"
                class="flex-none px-2 text-amber-200"
            >
            <div wire:show="showMenu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
                >
                    
                        <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd"></path>
            </svg>
                    </div>
                    <div wire:show="!showMenu">
                         <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
                >
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </div>
                
                <span class="sr-only">{showMenu ? 'Close Menu' : 'Open Menu'}</span>
            </button>

            <div wire:show="showMenu">
                <nav
                    id="mobile-menu-nav"
                    class="absolute top-12 right-0 w-64 mr-4 mt-3"
                    aria-label="Mobile Navigation"
                >
                    <ul class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        @foreach($items as $item)
                            <?php
                                $isActive = str_starts_with(request()->path(), ltrim($item['href'], '/'));
                            ?>
                            <li>
                                <a
                                    href="{{ $item['href'] }}"
                                    wire:navigate
                                    class="{{ $isActive ? $item['activeClassName'] : $item['className'] }} block my-2"
                                    aria-current="{{ $isActive ? 'page' : '' }}"
                                    wire:click="toggleMenu"
                                >
                                    {{ $item['label'] }} 
                                </a>
                            </li>
                        @endforeach
                        
                    </ul>
                </nav>
         
        </div>
</div>