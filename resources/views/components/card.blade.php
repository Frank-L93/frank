 <div class="flex flex-col rounded-3xl shadow-lg bg-white dark:bg-gray-700 mb-10 sm:mb-0">
        <div class="text-center px-4 py-6">
            @if($href)
                @if($isExternal)
                    <a href="{{$href}}" target="_blank" rel="noopener noreferrer" class="text-2xl  hover:underline">
                    <span class="sr-only"> (opens in a new tab)</span>  
                @else
                    <a href="{{$href}}" wire:navigate class="text-2xl hover:underline">
                @endif
            @endif
            @if($imageSrc)
                <img src="{{$imageSrc}}" alt="Screenshot of the {{$cardTitle}} project" class="rounded-t-3xl border-none object-cover h-48 w-full"/>
            @else
                <div className="flex h-48 w-full items-center justify-center rounded-t-3xl bg-gray-200 dark:bg-gray-600">
                    <p class="text-2xl text-red-500 font-semibold mb-4">{{$cardTitle}}</p>
                </div>
            @endif
            <div class="text-lg">
                @if($content)
                    {!! $content !!}
                @else
                    <ol class="list-decimal list-inside space-y-2">
                        @foreach($links as $link)
                            <li>
                                <a
                                    href="{{ $link['href'] }}"
                                    @if(isset($link['download']) && $link['download']) download @endif
                                    class="underline hover:text-blue-400"
                                >
                                    {{ $link['text'] }}
                                </a>
                            </li>
                        @endforeach
                    </ol>
                @endif
            </div>
            @if($href)
                </a>
            @endif
        </div>
    </div>