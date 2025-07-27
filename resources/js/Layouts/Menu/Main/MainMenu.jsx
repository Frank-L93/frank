import { Link, usePage } from '@inertiajs/react';

const menuItems = [
    {
        href: '/projects',
        label: 'Projects',
        icon: 'icons/code.svg',
        className: 'text-gray-800 dark:text-white hover:text-gray-900 bg-red-600/50 rounded-xl p-3 hover:bg-red-600/80',
        activeClassName: 'text-gray-900 dark:text-white bg-red-600/80 rounded-xl p-3 cursor-default'
    },
    {
        href: '/resume',
        label: 'Resume',
        icon: 'icons/share-2.svg',
        className: 'text-gray-800 dark:text-white hover:text-gray-900 bg-yellow-600/50 rounded-xl p-3 hover:bg-yellow-600/80',
        activeClassName: 'text-gray-900 dark:text-white bg-yellow-600/80 rounded-xl p-3 cursor-default'
    },
    {
        href: '/chess',
        label: 'Chess',
        icon: 'icons/heart.svg',
        className: 'text-gray-800 dark:text-white hover:text-gray-900 bg-green-600/50 rounded-xl p-3 hover:bg-green-600/80',
        activeClassName: 'text-gray-900 dark:text-white bg-green-600/80 rounded-xl p-3 cursor-default'
    },
    {
        href: '/deepdives',
        label: 'DeepDives',
        icon: 'icons/book.svg',
        className: 'text-gray-800 dark:text-white hover:text-gray-900 bg-blue-600/50 rounded-xl p-3 hover:bg-blue-600/80',
        activeClassName: 'text-gray-900 dark:text-white bg-blue-600/80 rounded-xl p-3 cursor-default'
    },
];

export function MainMenu() {
    const { url } = usePage();

    return (
        <nav aria-label="Main Navigation">
            <ul className="relative hidden space-x-10 md:inline-flex rtl:space-x-reverse">
                {menuItems.map((item) => {
                    const isActive = url.startsWith(item.href);
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={isActive ? item.activeClassName : item.className}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.label}{' '}
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    className="inline-flex"
                                    src={item.icon}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
