
import { Link, usePage } from '@inertiajs/react';
export function MainMenu(){
    const { url } = usePage();
    return(

        <ul className="relative hidden space-x-10 md:inline-flex rtl:space-x-reverse">

            <li>
                <Link href='/projects' className= {url === '/projects' ? 'hidden' : 'text-gray-800 hover:text-gray-900 bg-red-600 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-80'}>
                    Projects <img className="inline-flex" src="icons/code.svg"/>
                </Link>
            </li>
            <li>
                <Link href='/resume' className= {url === '/resume' ? 'hidden' : 'text-gray-800 hover:text-gray-900 bg-yellow-600 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-80'}>
                    Resume <img className="inline-flex" src="icons/share-2.svg"/>
                </Link>
            </li>
            <li>
                <Link href='/chess' className= {url === '/chess' ? 'hidden' : 'text-gray-800 hover:text-gray-900 bg-green-600 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-80'}>
                    Chess <img className="inline-flex" src="icons/heart.svg"/>
                </Link>
            </li>
            <li>
                <Link href='/deepdives' className= {url === '/deepdives' ? 'hidden' : 'text-gray-800 hover:text-gray-900 bg-blue-600 bg-opacity-50 rounded-xl p-3 hover:bg-opacity-80'}>
                    DeepDives <img className="inline-flex" src="icons/book.svg"/>
                </Link>
            </li>

        </ul>
    );
}
