import { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Ranking({ data }) {

    const [playerRankings, setPlayerRankings] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [playerMatches, setPlayerMatches] = useState([]);

    useEffect(() => {
        if (data && data.rounds && data.players) {
            const lastRound = data.rounds[data.rounds.length - 1];
            if (lastRound && lastRound.ranking) {
                const rankings = lastRound.ranking.map((ranking) => {
                    const player = data.players.find(
                        (p) => p.pairing_number === ranking.player
                    );

                    return {
                        ...ranking,
                        playerName: player ? player.name : 'Unknown Player',
                        playerRating: player ? player.rating : 'Unknown Rating',
                        pairingNumber: player ? player.pairing_number : null, // Add pairingNumber
                    };
                });
                rankings.sort((a, b) => a.rank - b.rank);
                setPlayerRankings(rankings);
            }
        }
    }, [data]);

    useEffect(() => {
        if (selectedPlayer && data && data.rounds && data.players) { // Ensure data.players exists
            const matches = [];
            data.rounds.forEach((round) => {
                if (round.pairings) {
                    round.pairings.forEach((pairing) => {
                        const blackPlayer = data.players.find(p => p.pairing_number === pairing.black);
                        const whitePlayer = data.players.find(p => p.pairing_number === pairing.white);

                        if (
                            pairing.black === selectedPlayer.pairingNumber ||
                            pairing.white === selectedPlayer.pairingNumber
                        ) {
                            matches.push({
                                round: round.number,
                                table: pairing.table,
                                black: blackPlayer ? blackPlayer.name : 'Unknown', // Get black player name
                                white: whitePlayer ? whitePlayer.name : 'Unknown', // Get white player name
                                black_points: pairing.black_points,
                                white_points: pairing.white_points,
                            });
                        }
                    });
                }
            });
            setPlayerMatches(matches);
        } else {
            setPlayerMatches([]);
        }
    }, [selectedPlayer, data]);

    const handlePlayerClick = (player) => {
        setSelectedPlayer(player);
    };

    const handleCloseMatches = () => {
        setSelectedPlayer(null);
    };

    return (
<>
            <Head title={data.name} />
            <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">

            <div className="mt-6 overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">

                        <main className="mt-6">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">Score</th>
                        {data.rounds[0].ranking[0].subscore && (
                        <th className="px-4 py-2">Bordpunten</th>)}
                        <th className="px-4 py-2">Buchholz</th>
                        <th className="px-4 py-2">Sonneborn-Berger</th>
                    </tr>
                </thead>
                <tbody>
                    {playerRankings.map((ranking) => (
                        <tr key={ranking.player}>
                            <td className="border px-4 py-2">{ranking.rank}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handlePlayerClick(ranking)}
                                    className="text-blue-500 hover:underline"
                                >
                                    {ranking.playerName}
                                </button>
                            </td>
                            <td className="border px-4 py-2">{ranking.playerRating}</td>
                            <td className="border px-4 py-2">{ranking.score}</td>
                            {ranking.subscore && (
                            <td className="border px-4 py-2">{ranking.subscore}</td>)}
                            <td className="border px-4 py-2">{ranking.buchholz}</td>
                            <td className="border px-4 py-2">{ranking.sonneborn_berger}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedPlayer && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">
                        Matches for {selectedPlayer.playerName}
                        <button
                            onClick={handleCloseMatches}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            (Close)
                        </button>
                    </h2>
                    {playerMatches.length > 0 ? (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Round</th>
                                    <th className="px-4 py-2">Table</th>
                                    <th className="px-4 py-2">White</th>
                                    <th className="px-4 py-2">Black</th>
                                    <th className="px-4 py-2">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playerMatches.map((match, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{match.round}</td>
                                        <td className="border px-4 py-2">{match.table}</td>
                                        <td className="border px-4 py-2">{match.white}</td>
                                        <td className="border px-4 py-2">{match.black}</td>
                                        <td className="border px-4 py-2">
                                            {`${match.white_points} - ${match.black_points}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No matches found for this player.</p>
                    )}
                </div>
            )}
        </main>
        </div>
        </div>
        </div>
        </>
    );
}
