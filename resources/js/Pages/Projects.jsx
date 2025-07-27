import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

// --- Data for the Project cards ---
const projectsData = [
    {
        title: 'SG KiNG',
        imageSrc: 'king.png',
        href: 'https://sgking.nl',
        isExternal: true,
        description: 'Redesigned the website of chess club SG KiNG. Migrated it from WordPress to Statamic and included some new features.',
    },
    {
        title: 'Interne Competitie De Pion',
        imageSrc: 'InternDePion.png',
        href: 'https://github.com/Frank-L93/depion',
        isExternal: true,
        description: 'An open source PHP (Laravel) project that makes it possible to organise a Systeem Keizer Competition for chess clubs. Used for S.V. De Pion. A previous version, KeizerPHP, is also available on my GitHub.',
    },
    {
        title: 'Schaakladder',
        // imageSrc is intentionally omitted to demonstrate the placeholder
        href: 'https://github.com/Frank-L93/hoorbt',
        isExternal: true,
        description: 'An open source PHP (Laravel) project to manage a ladder or knock-out competition. Used to organise an online tournament during the Covid-19 pandemic.',
    },
    {
        title: 'DeepDives',
        // imageSrc is intentionally omitted to demonstrate the placeholder
        href: '/deepdives',
        isExternal: false,
        description: 'When I have time, I try to write usable deepdives to help others. Feel free to contact me if you have a subject you would like to know more about!',
    },
];

// Helper to get initials from a title string, e.g., "Interne Competitie" -> "IC"
const getInitials = (title = '') =>
    title
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

// --- A Reusable Card Component for Projects ---
const ProjectCard = ({ title, imageSrc, href, isExternal, description }) => {
    const cardImage = imageSrc ? (
        <img
            src={imageSrc}
            alt={`Screenshot of the ${title} project`}
            className="rounded-t-3xl border-none object-cover h-48 w-full"
        />
    ) : (
        <div className="flex h-48 w-full items-center justify-center rounded-t-3xl bg-gray-200 dark:bg-gray-600">
            <span className="text-5xl font-bold text-gray-400 dark:text-gray-300">{getInitials(title)}</span>
        </div>
    );

    const cardContent = (
        <>
            {cardImage}
            <div className="text-center px-4 py-6">
                <p className="text-2xl text-blue-500 font-semibold mb-2">
                    {title}
                    {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
                </p>
                <span className="text-lg">{description}</span>
            </div>
        </>
    );

    const cardClasses = "flex flex-col rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 sm:mb-0 bg-white dark:bg-gray-700";

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                {cardContent}
            </a>
        );
    }

    return (
        <Link href={href} className={cardClasses}>
            {cardContent}
        </Link>
    );
};


// --- The Main Page Component ---
export default function Projects() {
    const pageTitle = "Frank's Projects";
    const pageDescription = "Explore a collection of projects by Frank Lambregts, including Laravel applications, Statamic websites, and chess-related tools.";

    return (
        <GuestLayout>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
            </Head>

            <div className="text-2xl font-semibold mx-auto text-red-300 text-center">
                Projects
            </div>
            <div className="px-2 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:gap-10">
                {projectsData.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </GuestLayout>
    );
}
