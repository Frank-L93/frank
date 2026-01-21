<div class="relative p-6 rounded-2xl bg-white shadow-sm dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>{{$category}} </span>
                </div>

                <div class="text-3xl dark:text-gray-100">
                    {{$value}} @if($category === 'Total') games @endif
                </div>

                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                    <span>{{$total}} {{($origin === 'KNSB' && $total !== 1) ? (($total > 1) ? 'partijen nieuw verwerkt' : '0 partijen nieuw verwerkt') : ($origin === 'KNSB' ? 'partij nieuw verwerkt' : ($category === 'Total' ? 'wins' : 'games'))}}</span>
                </div>
            </div>
    </div>