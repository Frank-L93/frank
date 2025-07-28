import { NavBar } from '@/Layouts/Menu/NavBar';
import { usePage } from '@inertiajs/react';

const FooterLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
    >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
    </a>
);

export default function GuestLayout({ children }) {
    // Destructure props for cleaner access
    const { designed } = usePage().props;

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
            <NavBar />

            {/* Main content area */}
            <main className="flex w-full flex-grow flex-col items-center p-4 sm:p-6">
                <div className="w-full rounded-md max-w-4xl overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
                    {children}
                </div>
            </main>

            {/* Site-wide footer */}
            {designed && (
                <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <span className="text-yellow-300">
                            Coded with <span aria-hidden="true">💖</span> in <FooterLink href="https://laravel.com">Laravel</FooterLink>
                        </span>
                        <span className="text-green-300">
                            Powered <span aria-hidden="true">⚡</span> by <FooterLink href="https://inertiajs.com">Inertia</FooterLink>
                        </span>
                        <span className="text-purple-300">
                            Designed <span aria-hidden="true">🎨</span> with <FooterLink href="https://tailwindcss.com">Tailwind</FooterLink>
                        </span>
                    </div>
                </footer>
            )}
        </div>
    );
}
