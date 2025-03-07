import { Head, usePage, usePoll, Deferred } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Stats from '@/Components/Stats';
import { pgnView } from '@mliebelt/pgn-viewer';
import React, {useLayoutEffect} from 'react';
import Children from 'react-children-utilities'


export default function Chess({
 online, pgn, knsb
}) {

    usePoll(5000, {only: ['online']}, {})
    usePoll(10000, {only: ['stats']}, {})
    usePoll(50000, {only: ['pgn']}, {})

    const gameDecription = Children.onlyText(pgn)

    useLayoutEffect(() => {
        pgnView('board',
          {
            pgn: gameDecription,
            theme:'green',
            locale: 'nl',
            layout: 'left',
            showResult: true,
            showFen: false,
            width:'480px',
            pieceStyle: 'merida',
            figurine: 'merida',
            headers: true,
          }
        )
      })


    return (
        <GuestLayout>
            <Head title="Chess" />
                <div className="text-2xl font-semibold mx-auto text-green-300 text-center">
                    Chess
                </div>
                <div className="p-2 grid grid-cols-1">
                    <div className="mx-auto">

                        <a className="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2 mx-2" href='https://lichess.org/@/Helikopter'>
                            LiChess: Helikoper
                        </a>
                        {online.online && (
                            <small className="w-100 text-green-500">
                                <img
                                className="inline-flex"
                                src="icons/clock.svg"
                                /> ONLINE </small>
                                )}
                                {!online.online && (
                                <small className="w-100 text-red-500">
                                    <img
                                    className="inline-flex"
                                    src="icons/clock.svg"
                                    /> OFFLINE</small>
                            )}

                    </div>
             </div>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">
             <Deferred data="stats" fallback={<div className="text-lg">Statistieken van LiChess aan het laden...</div>}>
                <LiChessStats />
             </Deferred>
            </div>
            <div className="text-lg font-semibold mx-auto text-red-300 text-center">
                Last Game </div>
            <div className="dark:bg-green-800 mx-2 px-2 py-2" id='board'></div>
            <div className="grid grid-cols-1">
                    <div className="mx-auto">
                        <a className="bg-green-200 dark:bg-green-800 hover:bg-green-400 rounded-lg px-2 mx-2" href="https://ratingviewer.nl/lists/latest/players/8090687">KNSB:
                        Frank Lambregts</a>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-green-200 dark:bg-green-800 rounded-lg p-2 m-2">
                        <Stats origin="KNSB" category={knsb[0].qualifier} value={knsb[0].rating} total={knsb[0].num_played}/>
                        <Stats origin="KNSB" category={knsb[1].qualifier} value={knsb[1].rating} total={knsb[1].num_played}/>
                        {knsb[2] && ( <Stats origin="KNSB" category={knsb[2].qualifier} value={knsb[2].rating} total={knsb[2].num_played}/>)}
                    </div>
            </div>
      </GuestLayout>
    );
}

export function LiChessStats(){
    const props = usePage().props
    return (
        <>
        <Stats category="Total" value={props.stats.count.all} total={props.stats.count.win} />
        <Stats category="Bullet" value={props.stats.perfs.bullet.rating} total={props.stats.perfs.bullet.games} />
        <Stats category="Blitz" value={props.stats.perfs.blitz.rating} total={props.stats.perfs.blitz.games} />
        <Stats category="Puzzle" value={props.stats.perfs.puzzle.rating} total={props.stats.perfs.puzzle.games} />
        </>
    );
}
