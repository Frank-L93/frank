import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// --- Data for the Deep Dive cards ---
const deepdivesData = [
    {
        title: 'KiNG',
        links: [
            { href: '/SG KiNG WordPress.pdf', text: 'WordPress Deep Dive', download: true },
        ],
    },
    {
        title: 'Monteban',
        links: [
            { href: '/leesmij.docx', text: 'Leesmij', download: true },
            { href: '/DeepDiveMonteban.pdf', text: 'DeepDive Monteban 3 - deel 1', download: true },
            { href: '/api.rar', text: 'Benodigd bestand 1', download: true },
            { href: '/intern-admin.rar', text: 'Benodigd bestand 2', download: true },
        ],
    },
    {
        title: 'Want me to deepdive into something?',
        // Custom content for this card instead of links
        content: (
            <div className="space-y-2">
                <p>Send me a request!</p>
                <p>
                    Use{' '}
                    <a
                        href="mailto:web@franklambregts.com"
                        className="underline hover:text-blue-400"
                    >
                        web@franklambregts.com
                    </a>{' '}
                    and I will contact you.
                </p>
            </div>
        ),
    },
];

// --- A Reusable Card Component ---
const DeepDiveCard = ({ title, links, content }) => (
    <div className="flex flex-col rounded-3xl shadow-lg bg-white dark:bg-gray-700 mb-10 sm:mb-0">
        <div className="text-center px-4 py-6">
            <p className="text-2xl text-red-500 font-semibold mb-4">
                {title}
            </p>
            <div className="text-lg">
                {content ? content : (
                    <ol className="list-decimal list-inside space-y-2">
                        {links?.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    download={link.download} // Suggests the browser should download the file
                                    className="underline hover:text-blue-400"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    </div>
);

// --- The Main Page Component ---
export default function Deepdives() {
    return (
        <GuestLayout>
            <Head title="Deepdives" />
            <div className="text-2xl font-semibold mx-auto text-blue-300 text-center">
                Deepdives
            </div>
            <div className="px-2 py-2 grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
                {deepdivesData.map(dive => (
                    <DeepDiveCard key={dive.title} {...dive} />
                ))}
            </div>
        </GuestLayout>
    );
}
