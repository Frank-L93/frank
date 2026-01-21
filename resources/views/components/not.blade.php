<div class=" items-center justify-center text-center p-2 rounded-lg transition-colors m-2">
    @if($href)
        <a href="{{$href}}" target="_blank" rel="noopener noreferrer">
    @endif
    @if($imgSrc)
        <img src="{{$imgSrc}}" alt="{{$name}} logo" class="h-11 w-11" />
        <span class="text-sm ">{{$name}}</span>
    @else
        <x-icon name="{{ $icon }}" class="h-11 w-11" style="color: {{ $color }}" />
       
        <span class="text-sm ">{{$name}}</span>
        
    @endif
    @if($href)
        </a>
    @endif
    
</div>