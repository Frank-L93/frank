import { useState } from 'react';
import { MainMenu } from './Main/MainMenu';
import { MobileMenu } from './Mobile/MobileMenu';
import { Link } from '@inertiajs/react';

export function NavBar() {

    return (
        <div>
            <header className="z-30 w-full px-2 py-4 bg-white dark:bg-gray-900 sm:px-4">
                <div className="container flex items-center justify-between mx-auto">
                     <Link href="/" className="flex text-xl items-center">
                        <img src='frank1.png' width='50px' height='50px'/>
                    </Link>
                        <MainMenu />
                        <MobileMenu />
                </div>
    </header>
    </div>
      );
}
