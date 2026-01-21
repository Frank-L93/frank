 <div class="flex flex-col rounded-3xl shadow-lg bg-white dark:bg-gray-700 mb-10 sm:mb-0">
    <div class="text-center px-4 py-6">
        <p class="text-2xl text-red-500 font-semibold mb-2">{{$title}}</p>
        <span class="text-lg text-gray-600 dark:text-gray-300">{{$subtitle}}</span>
        <div class="mt-4">
            {{$slot}}
        </div>
    </div>
</div>