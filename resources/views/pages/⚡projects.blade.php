<?php

use Livewire\Component;
use Livewire\Attributes\Mounted;
use Livewire\Attributes\Title;

new #[Title('Projects')] class extends Component
{
    public $projects = [];

    #[Mounted]
    public function mount()
    {
        $this->projects = [
            [
                'title' => 'KiNG',
                'imageSrc' => 'king.png',
                'href' => 'https://sgking.nl',
                'isExternal' => true,
                'content' => 'Redesigned the website of chess club SG KiNG. Migrated it from WordPress to Statamic and included some new features.',
            ],
            [
                'title' => 'Interne Competitie De Pion',
                'imageSrc' => 'InternDePion.png',
                'href' => 'https://github.com/Frank-L93/depion',
                'isExternal' => true,
                'content' => 'An open source PHP (Laravel) project that makes it possible to organise a Systeem Keizer Competition for chess clubs. Used for S.V. De Pion. A previous version, KeizerPHP, is also available on my GitHub.',
            ],
            [
                'title' => 'Schaakladder',
            
                'href' => 'https://github.com/Frank-L93/hoorbt',
                'isExternal' => true,
                'content' => 'An open source PHP (Laravel) project to manage a ladder or knock-out competition. Used to organise an online tournament during the Covid-19 pandemic.',
            ],
            [
                'title' => 'Harry Potter Spreuken & Schaken',
                'href' => '/harry-potter',
                'isExternal' => false,
                'content' => 'A fun project where I combined my love for chess and Harry Potter. Created a list of spells from the Harry Potter universe and associated chess moves with them.',
            ],
            [
                'title' => 'DeepDives',
               
                'href' => '/deepdives',
                'isExternal' => false,
                'content' => "When I have time, I try to write usable deepdives to help others. Feel free to contact me if you have a subject you would like to know more about!",
            ],
         
        ];
    }
};
?>

<div>
     <div class="text-2xl font-semibold mx-auto text-red-300 text-center">
                Projects
    </div>
    <div class="px-2 py-2 grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
        @foreach($projects as $project)
            <x-card :cardTitle="$project['title']" :links="isset($project['links']) ? $project['links'] : []" :content="isset($project['content']) ? $project['content'] : null" :href="isset($project['href']) ? $project['href'] : null" :isExternal="isset($project['isExternal']) ? $project['isExternal'] : false" :imageSrc="isset($project['imageSrc']) ? $project['imageSrc'] : null" />
        @endforeach
    </div>
</div>