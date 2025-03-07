import { NavBar } from '@/Layouts/Menu/NavBar';
import { usePage } from '@inertiajs/react';
export default function GuestLayout({ children }) {
    const props = usePage().props;

    return (
        <>
        <NavBar />
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">

            <div className="mt-6 overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

                        <main className="mt-6">
                            {children}
                    </main>

            </div>
            {props.designed &&(
            <div className="mx-auto block text-center text-sm text-gray-500 dark:text-gray-400">
                        <div className=" text-yellow-300 px-1">Coded with 💖 in <a
              href="https://laravel.com"
              target="_blank"
              className="hover:underline"
            >Laravel</a></div><div class=" text-green-300">Powered ⚡ by <a
              href="https://inertiajs.com"
              target="_blank"
              className="hover:underline"
            >Inertia</a></div><div class=" text-purple-300 px-1">Designed 🎨 with <a
              href="https://tailwindcss.com"
              target="_blank"
              className="hover:underline"
            >Tailwind</a></div>
            </div>
            )}
            </div>
        </div>
        </>
    );
}
