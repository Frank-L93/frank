import { Link } from '@inertiajs/react';
import { useState } from 'react';
export function MobileMenu(){
    const [showMenu, setShowMenu] = useState(false)

    function toggle(){
        setShowMenu(showMenu => !showMenu);
    }
    return(

        <div className="flex z-30 items-center space-x-5 rtl:space-x-reverse" >
            <div className="inline-flex md:hidden">
            <button className="flex-none px-2 btn btn-white btn-sm" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
            >
            {showMenu && (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
            )}
              {!showMenu && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
              )}
            </svg>
            <span className="sr-only">Open Menu</span>
          </button>

        </div>
        {showMenu && (
        <div
          className="absolute top-10 right-0 mr-3 mt-3 justify-center items-center md:hidden"
        >
          <Link
            href="/projects"
            className="block text-gray-800 hover:text-gray-900 bg-red-600 rounded-xl p-3 hover:bg-opacity-80"
          >Projects</Link>

          <Link
            href="/resume"
            className="block text-gray-800 hover:text-gray-900 bg-yellow-500 rounded-xl p-3 hover:bg-opacity-80"
          >Resume</Link>

          <Link
            href="/chess"
            className="block text-gray-800 hover:text-gray-900 bg-green-300 rounded-xl p-3 hover:bg-opacity-80"
          >Chess</Link>

          <Link
            href="/deepdives"
            class="block text-gray-800 hover:text-gray-900 bg-blue-500 rounded-xl p-3 hover:bg-opacity-80"
          > DeepDives </Link>

        </div>
        )}
        </div>
    );
}
