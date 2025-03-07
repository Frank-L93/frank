export default function Stats({origin = '', category, value, total, icon = ''}){

return (
    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div className="space-y-2">
                <div
                    className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>{category} </span>
                </div>

                <div className="text-3xl dark:text-gray-100">
                    {value} {category === 'Total' ? 'games' : ''}
                </div>

                <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                    <span>{total} {origin === 'KNSB' && total !== 1 ? 'partijen nieuw verwerkt' : origin === 'KNSB' ? 'partij nieuw verwerkt' : category === 'Total' ? 'wins' : 'games'}</span>
                </div>
            </div>
    </div>
);
}
