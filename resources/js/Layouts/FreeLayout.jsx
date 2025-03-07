
export default function FreeLayout({ children }) {
    return (
        <>

        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">

            <div className="mt-6 overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

                        <main className="mt-6">
                            {children}
                    </main>

            </div>
            </div>
        </div>
        </>
    );
}
