<?php

use Livewire\Component;

new class extends Component
{
    public $items;
    #[Mounted]
    public function mount($items)
    {
        $this->items = $items;
    }
};
?>

<div>
    <nav aria-label="Main Navigation">
            <ul class="relative hidden space-x-10 md:inline-flex rtl:space-x-reverse">
                @foreach($items as $item)
                    <?php
                        $isActive = str_starts_with(request()->path(), ltrim($item['href'], '/'));
                    ?>
                    <li>
                        <a
                            href="{{ $item['href'] }}"
                            wire:navigate
                            class="{{ $isActive ? $item['activeClassName'] : $item['className'] }}"
                            aria-current="{{ $isActive ? 'page' : '' }}"
                        >
                            {{ $item['label'] }}
                            <img
                                alt=""
                                aria-hidden="true"
                                class="inline-flex"
                                src="{{ $item['icon'] }}"
                            />
                        </a>
                    </li>
                @endforeach
             
            </ul>
        </nav>
</div>