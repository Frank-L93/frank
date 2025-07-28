import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { IconContext } from 'react-icons';
import { FaLaravel, FaReact, FaChess, FaLinkedin, FaGithubAlt, FaFacebook, FaEnvelope } from "react-icons/fa";
import { AiTwotoneApi } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";

// --- Data for "Likes" and "Socials" cards ---
const likesData = [
    { name: 'Laravel', href: 'https://laravel.com', Icon: FaLaravel, color: '#F9322C' },
    { name: 'Statamic', href: 'https://statamic.com', imgSrc: 'icons/statamic-mark-lime.svg' },
    { name: 'React', href: 'https://react.dev', Icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind', href: 'https://tailwindcss.com', Icon: RiTailwindCssFill, color: '#38BDF8' },
    { name: 'APIs', Icon: AiTwotoneApi, color: '#6366F1' }, // No link
    { name: 'Chess', Icon: FaChess, color: '#FBBF24' },   // No link
];

const socialsData = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/frank-lambregts-a72017149/', Icon: FaLinkedin, color: '#0A66C2' },
    { name: 'GitHub', href: 'https://github.com/Frank-L93/', Icon: FaGithubAlt, color: '#181717' },
    { name: 'Facebook', href: 'https://www.facebook.com/franklambregts', Icon: FaFacebook, color: '#1877F2' },
    { name: 'Email', href: 'mailto:web@franklambregts.com', Icon: FaEnvelope, color: '#6B7280' },
];

// --- Reusable Components ---

// A generic card for consistent styling
const InfoCard = ({ title, subtitle, children }) => (
    <div className="flex flex-col rounded-3xl shadow-lg bg-white dark:bg-gray-700 mb-10 sm:mb-0">
        <div className="text-center px-4 py-6">
            <p className="text-2xl text-red-500 font-semibold mb-2">{title}</p>
            <span className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</span>
            <div className="mt-4">
                {children}
            </div>
        </div>
    </div>
);

// A component for a single technology or social link
const IconLink = ({ href, Icon, name, color, imgSrc }) => {
    const content = (
        <>
            {Icon && (
                <IconContext.Provider value={{ color: color, size: '44' }}>
                    <Icon />
                </IconContext.Provider>
            )}
            {imgSrc && <img src={imgSrc} alt={`${name} logo`} className="h-11 w-11" />}
            <span className="mt-2 text-sm font-medium">{name}</span>
        </>
    );

    const className = "flex flex-col items-center justify-center text-center p-2 rounded-lg transition-colors";

    if (href) {
        return (
            <a
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={href.startsWith('mailto:') ? `Email me` : `Visit ${name}'s website`}
                className={`${className} hover:bg-gray-100 dark:hover:bg-gray-600`}
            >
                {content}
                {href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
        );
    }
    else {
        // Render a non-interactive div if there's no href
        return <div className={className}>{content}</div>;
    }
};


// --- The Main Page Component ---
export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="text-2xl font-semibold mx-auto text-purple-300 text-center">
                Hi!
            </div>
            <div className="px-2 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 sm:gap-10">

                <InfoCard title="Who am I?" subtitle="Frank, duh!">
                    <div className="flex flex-col sm:flex-row items-center text-left gap-4">
                        <img
                            src="/frank.jpg"
                            alt="A picture of Frank Lambregts"
                            className="w-32 h-32 rounded-full object-cover flex-shrink-0"
                        />
                        <p>
                            That's me! As you might have guessed, my name is Frank Lambregts. I am an enthusiast about anything that has to do with tech. I like to play chess and I am a huge fan of Harry Potter.
                        </p>
                    </div>
                </InfoCard>

                <InfoCard title="My Likes?" subtitle="Many things!">
                    <div className="grid grid-cols-3 gap-2">
                        {likesData.map(like => <IconLink key={like.name} {...like} />)}
                    </div>
                </InfoCard>


                <InfoCard title="My Socials?" subtitle="Uh, oh">
                    <div className="grid grid-cols-3 gap-2">
                        {socialsData.map(social => <IconLink key={social.name} {...social} />)}
                    </div>
                </InfoCard>
            </div>
        </GuestLayout>
    );
}
