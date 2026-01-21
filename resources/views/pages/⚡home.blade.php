<?php

use Livewire\Component;
use Livewire\Attributes\Title;
use Livewire\Attributes\Mounted;

new #[Title('Home')] class extends Component
{
    public $likes = [];
    public $socials = [];

    #[Mounted]
    public function mount()
    {
        $this->likes = [
            ['name' => 'Laravel', 'href' => 'https://laravel.com', 'Icon' => 'fab-laravel', 'color' => '#F9322C'],
            ['name' => 'Statamic', 'href' => 'https://statamic.com', 'imgSrc' => 'icons/statamic-mark-lime.svg'],
            ['name' => 'Livewire', 'href' => 'https://livewire.laravel.com', 'Icon' => 'si-livewire', 'color' => '#EE5D99p'],
            ['name' => 'Tailwind', 'href' => 'https://tailwindcss.com', 'Icon' => 'fileicon-tailwind', 'color' => '#38BDF8'],
            ['name' => 'APIs', 'Icon' => 'fileicon-api-blueprint', 'color' => '#6366F1'], // No link
            ['name' => 'Chess', 'Icon' => 'fas-chess',  'color' => '#FBBF24'],   // No link
        ];
        $this->socials = [
            ['name' => 'LinkedIn', 'href' => 'https://www.linkedin.com/in/frank-lambregts-a72017149/', 'Icon' => 'fab-linkedin', 'color' => '#0A66C2'],
            ['name' => 'GitHub', 'href' => 'https://github.com/Frank-L93/', 'Icon' => 'fab-github', 'color' => '#181717'],
            ['name' => 'Facebook', 'href' => 'https://www.facebook.com/franklambregts', 'Icon' => 'fab-facebook', 'color' => '#1877F2'],
            ['name' => 'Email', 'href' => 'mailto:web@franklambregts.com', 'Icon' => 'fas-envelope', 'color' => '#6B7280'],
        ];
    }
};
?>

<div>
    <div class="text-2xl font-semibold mx-auto text-purple-300 text-center">
                Hi!
            </div>
            <div class="px-2 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:gap-10">
                <x-info-card title="Who am I?" subtitle="Frank, duh!">
                    <div class="flex flex-col sm:flex-row items-center text-left gap-4">
                        <img
                            src="/frank.jpg"
                            alt="A picture of Frank Lambregts"
                            class="w-32 h-32 rounded-full object-cover shrink-0"
                        />
                        <p>
                            That's me! As you might have guessed, my name is Frank Lambregts. I am an enthusiast about anything that has to do with tech. I like to play chess and I am a huge fan of Harry Potter.
                        </p>
                    </div>
                </x-info-card>
               

                <x-info-card title="My Likes?" subtitle="Many things!">
                    <div class="grid grid-cols-3 gap-2">
                        @foreach($likes as $like)
                            <x-not :name="$like['name']" :href="isset($like['href']) ? $like['href'] : null" :icon="isset($like['Icon']) ? $like['Icon'] : null" :imgSrc="isset($like['imgSrc']) ? $like['imgSrc'] : null" :color="isset($like['color']) ? $like['color'] : null" />
                        @endforeach
                    </div>
                </x-info-card>
                      
                <x-info-card title="My Socials?" subtitle="Uh, oh">
                    <div class="grid grid-cols-3 gap-2">
                       @foreach($socials as $social)
                            <x-not :name="$social['name']" :href="isset($social['href']) ? $social['href'] : null" :Icon="isset($social['Icon']) ? $social['Icon'] : null" :imgSrc="isset($social['imgSrc']) ? $social['imgSrc'] : null" :color="isset($social['color']) ? $social['color'] : null" />
                        @endforeach 
                    </div>
                </x-info-card>
            </div>
</div>