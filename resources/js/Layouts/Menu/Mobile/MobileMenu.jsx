import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const mobileMenuItems = [
    { href: '/projects', label: 'Projects', className: 'block dark:text-white text-left text-lg text-gray-800 hover:text-gray-900 bg-red-600/50 rounded-xl p-3 my-2 hover:bg-red-600/80', activeClassName: 'block text-left text-lg text-gray-900 bg-red-600/80 rounded-xl p-3 my-2 cursor-default' },
    { href: '/resume', label: 'Resume', className: 'block dark:text-white text-left text-lg text-gray-800 hover:text-gray-900 bg-yellow-600/50 rounded-xl p-3 my-2 hover:bg-yellow-600/80', activeClassName: 'block text-left text-lg text-gray-900 bg-yellow-600/80 rounded-xl p-3 my-2 cursor-default' },
    { href: '/chess', label: 'Chess', className: 'block dark:text-white text-left text-lg text-gray-800 hover:text-gray-900 bg-green-600/50 rounded-xl p-3 my-2 hover:bg-green-600/80', activeClassName: 'block text-left text-lg text-gray-900 bg-green-600/80 rounded-xl p-3 my-2 cursor-default' },
    { href: '/deepdives', label: 'DeepDives', className: 'block dark:text-white text-left text-lg text-gray-800 hover:text-gray-900 bg-blue-600/50 rounded-xl p-3 my-2 hover:bg-blue-600/80', activeClassName: 'block text-left text-lg text-gray-900 bg-blue-600/80 rounded-xl p-3 my-2 cursor-default' },
];

export function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const { url } = usePage();

    function toggleMenu() {
        setShowMenu(prev => !prev);
    }

    return (
        <div className="flex z-30 items-center md:hidden">
            <button
                onClick={toggleMenu}
                aria-controls="mobile-menu-nav"
                aria-expanded={showMenu}
                className="flex-none px-2 text-amber-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
                >
                    {showMenu ? (
                        <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clipRule="evenodd"></path>
                    ) : (
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    )}
                </svg>
                <span className="sr-only">{showMenu ? 'Close Menu' : 'Open Menu'}</span>
            </button>

            {showMenu && (
                <nav
                    id="mobile-menu-nav"
                    className="absolute top-12 right-0 w-64 mr-4 mt-3"
                    aria-label="Mobile Navigation"
                >
                    <ul className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        {mobileMenuItems.map(item => {
                            const isActive = url.startsWith(item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={isActive ? item.activeClassName : item.className}
                                        aria-current={isActive ? 'page' : undefined}
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </div>
    );
}
