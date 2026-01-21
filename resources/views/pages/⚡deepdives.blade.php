<?php

use Livewire\Component;
use Livewire\Attributes\Title;
use Livewire\Attributes\Mounted;

new #[Title('DeepDives')] class extends Component
{
    public $deepdives = [];
    
    #[Mounted]
    public function mount()
    {
        $this->deepdives = [
            [
                'title' => 'KiNG',
                'links' => [
                    ['href' => '/SG KiNG WordPress.pdf', 'text' => 'WordPress Deep Dive', 'download' => true],
                ],
            ],
            [
                'title' => 'Monteban',
                'links' => [
                    ['href' => '/leesmij.docx', 'text' => 'Leesmij', 'download' => true],
                    ['href' => '/DeepDiveMonteban.pdf', 'text' => 'DeepDive Monteban 3 - deel 1', 'download' => true],
                    ['href' => '/api.rar', 'text' => 'Benodigd bestand 1', 'download' => true],
                    ['href' => '/intern-admin.rar', 'text' => 'Benodigd bestand 2', 'download' => true],
                ],
            ],
            [
                'title' => "Want me to deepdive into something?",
                'content' => '<div class="space-y-2"><p>Send me a request!</p><p>Use <a href="mailto:web@franklambregts.com" class="underline hover:text-blue-400">web@franklambregts.com</a> and I will contact you.</p></div>',
               
            ],
        ];
    }
};
?>

<div>
    <div class="text-2xl font-semibold mx-auto text-blue-300 text-center">
                Deepdives
    </div>
    <div class="px-2 py-2 grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
    @foreach($deepdives as $deepdive)
        <x-card :cardTitle="$deepdive['title']" :links="isset($deepdive['links']) ? $deepdive['links'] : []" :content="isset($deepdive['content']) ? $deepdive['content'] : null" :href="null" :isExternal="false" :imageSrc="null"/>
    @endforeach
    </div>
</div>