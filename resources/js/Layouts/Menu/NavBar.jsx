import { MainMenu } from './Main/MainMenu';
import { MobileMenu } from './Mobile/MobileMenu';
import { Link } from '@inertiajs/react';

export function NavBar() {
    return (
        <header className="z-30 w-full px-2 py-4 bg-white shadow-sm dark:bg-gray-900 sm:px-4">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/" aria-label="Frank Lambregts Homepage">
                    <img
                        src="/frank1.png"
                        alt="Frank Lambregts Logo"
                        className="w-12 h-12"
                    />
                </Link>
                <MainMenu />
                <MobileMenu />
            </div>
        </header>
    );
}
