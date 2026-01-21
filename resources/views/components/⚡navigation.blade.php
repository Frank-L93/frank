<?php

use Livewire\Component;
use Livewire\Attributes\Mounted;

new class extends Component
{
    public $menuItems = [];

    #[Mounted]
    public function mount()
    {
        $this->menuItems = [
            [
                'label' => 'Projects',
                'href' => '/projects',
                'className' => 'text-gray-800 dark:text-white hover:text-gray-900 bg-red-600/50 rounded-xl p-3 hover:bg-red-600/80',
                'activeClassName' => 'text-gray-900 dark:text-white bg-red-600/80 rounded-xl p-3 cursor-default',
                'icon' => '/icons/code.svg',
            ],
            [
                'label' => 'Resume',
                'href' => '/resume',
                'className' => 'text-gray-800 dark:text-white hover:text-gray-900 bg-yellow-600/50 rounded-xl p-3 hover:bg-yellow-600/80',
                'activeClassName' => 'text-gray-900 dark:text-white bg-yellow-600/80 rounded-xl p-3 cursor-default',
                'icon' => '/icons/share-2.svg',
            ],
            [
                'label' => 'Chess',
                'href' => '/chess',
                'className' => 'text-gray-800 dark:text-white hover:text-gray-900 bg-green-600/50 rounded-xl p-3 hover:bg-green-600/80',
                'activeClassName' => 'text-gray-900 dark:text-white bg-green-600/80 rounded-xl p-3 cursor-default',
                'icon' => '/icons/heart.svg',
            ],
            [
                'label' => 'DeepDives',
                'href' => '/deepdives',
                'className' => 'text-gray-800 dark:text-white hover:text-gray-900 bg-blue-600/50 rounded-xl p-3 hover:bg-blue-600/80',
                'activeClassName' => 'text-gray-900 dark:text-white bg-blue-600/80 rounded-xl p-3 cursor-default',
                'icon' => '/icons/book.svg',
            ],
        ];
    }
};
?>

<div>
     <header class="z-30 w-full px-2 py-4 bg-white shadow-sm dark:bg-gray-900 sm:px-4">
            <div class="container flex items-center justify-between mx-auto">
                <a href="/" wire:navigate aria-label="Frank Lambregts Homepage">
                    <img
                        src="/frank1.png"
                        alt="Frank Lambregts Logo"
                        class="w-12 h-12"
                    />
                </a>
                <div class="hidden md:block">
                    <livewire:menu.main :items="$this->menuItems" />
                </div>
                <div class="md:hidden">
                    <livewire:menu.mobile :items="$this->menuItems" />
                </div>
            </div>
        </header>
</div>