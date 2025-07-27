import { Head, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Stats from '@/Components/Stats';
import { pgnView } from '@mliebelt/pgn-viewer';
import React, { useLayoutEffect, useEffect } from 'react';

// Helper component for accessible external links
const ExternalLink = ({ href, children, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
    >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
    </a>
);

// A dedicated component for showing the online status
const OnlineStatus = ({ isOnline }) => {
    const statusClass = isOnline ? 'text-green-500' : 'text-red-500';
    const statusText = isOnline ? 'ONLINE' : 'OFFLINE';

    return (
        <small className={`w-100 ${statusClass}`}>
            <img
                aria-hidden="true"
                alt=""
                className="inline-flex"
                src="/icons/clock.svg"
            />
            {' '}{statusText}
        </small>
    );
};

// A component to encapsulate the PGN viewer logic
const PgnViewer = ({ pgn }) => {
    useLayoutEffect(() => {
        if (pgn) {
            pgnView('board', {
                pgn: pgn,
                theme: 'green',
                locale: 'nl',
                layout: 'left',
                showResult: true,
                showFen: false,
                width: '480px',
                pieceStyle: 'merida',
                figurine: 'merida',
                headers: true,
            });
        }
    }, [pgn]);

    return <div className="dark:bg-green-800 mx-2 px-2 py-2" id="board"></div>;
};

// Refactored to be a pure component that receives stats via props
export function LiChessStats({ stats }) {
    // This check is still good practice
    if (!stats) return null;

    return (
        <>
            <Stats category="Total" value={stats.count.all} total={stats.count.win} />
            <Stats category="Bullet" value={stats.perfs.bullet.rating} total={stats.perfs.bullet.games} />
            <Stats category="Blitz" value={stats.perfs.blitz.rating} total={stats.perfs.blitz.games} />
            <Stats category="Puzzle" value={stats.perfs.puzzle.rating} total={stats.perfs.puzzle.games} />
        </>
    );
}

// Main Chess component
export default function Chess({ online, pgn, knsb, stats }) {
    // This polling logic is correct and will now work as intended.
    useEffect(() => {
        const loadOnlineAndPgn = () => {
            router.reload({ only: ['online', 'pgn'], preserveState: true, preserveScroll: true });
        };
        const loadStats = () => {
            router.reload({ only: ['stats'], preserveState: true, preserveScroll: true });
        };

        // Trigger initial loads immediately on mount
        loadOnlineAndPgn();
        loadStats();

        // Set up polling intervals
        const onlinePgnPoll = setInterval(loadOnlineAndPgn, 50000);
        const statsPoll = setInterval(loadStats, 10000);

        // Cleanup function to stop polling when the component unmounts
        return () => {
            clearInterval(onlinePgnPoll);
            clearInterval(statsPoll);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <GuestLayout>
            <Head title="Chess" />
            <div className="text-2xl font-semibold mx-auto text-green-300 text-center">
                Chess
            </div>

            {/* LiChess Section */}
            <div className="p-2 grid grid-cols-1">
                <div className="mx-auto flex items-center gap-4">
                    <ExternalLink
                        href='https://lichess.org/@/Helikopter'
                        className="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2"
                    >
                        LiChess: Helikopter
                    </ExternalLink>
                    <OnlineStatus isOnline={online?.online} />
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">
                {/* --- REPLACED DEFERRED WITH CONDITIONAL RENDER --- */}
                {stats ? (
                    <LiChessStats stats={stats} />
                ) : (
                    <div className="text-lg col-span-full text-center">
                        Statistieken van LiChess aan het laden...
                    </div>
                )}
            </div>

            {/* Last Game Section */}
            <div className="text-lg font-semibold mx-auto text-red-300 text-center mt-4">
                Last Game
            </div>
            <PgnViewer pgn={pgn} />

            {/* KNSB Section */}
            <div className="grid grid-cols-1 mt-4">
                <div className="mx-auto">
                    <ExternalLink
                        href="https://ratingviewer.nl/lists/latest/players/8090687"
                        className="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2 mx-2"
                    >
                        KNSB: Frank Lambregts
                    </ExternalLink>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">
                    {knsb.map((rating) => (
                        <Stats
                            key={rating.qualifier}
                            origin="KNSB"
                            category={rating.qualifier}
                            value={rating.rating}
                            total={rating.num_played}
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}
