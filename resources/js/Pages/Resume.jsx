import GuestLayout from '@/Layouts/GuestLayout';

import { Head, Link } from '@inertiajs/react';
import { Chrono } from 'react-chrono';

export default function Resume() {
    return (
        <GuestLayout>
            <Head title="Resume" />

            <div className="text-2xl font-semibold mx-auto text-yellow-300 text-center">Resume</div>
            <div className="text-xs mx-auto text-center"><a href="https://www.linkedin.com/in/frank-lambregts-a72017149/" target="_blank"><span className="m-2 bg-white rounded-md px-2 py-1 inline-block text-blue-300">LinkedIn</span></a>
            </div>

            <Chrono items={[
                {
                    title: 'This year',
                    cardTitle: '2025',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> (until 14th of February)</span><br />
                            <span><span className="mr-2">•</span>Started as Informatie Analist @ <a href="https://vgz.nl" target="_blank">VGZ</a></span><br />
                            <span><span className="mr-2">•</span>Certified: IREB CPRE Foundation Level (August 2025)</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> until the end of the season 2024-2025</span><br />
                            <span><span className="mr-2">•</span>Chairman @ <a href="https://sgking.nl" target="_blank">SG KiNG</a> as of the start of season 2025-2026</span><br />
                            <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a></span><br />
                            <span><span className="mr-2">•</span>Continues improvement on SG KiNGs website (Statamic)</span><br />
                        </>
                    )
                },
                {
                    title: 'Last Year',
                    cardTitle: '2024',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                            <span><span className="mr-2">•</span>Certified: ArchiMate 3.2 Foundation</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            <span>
                    <span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a>:
                    <br />
                    <span className="ml-6"><span className="mr-2">•</span>Redesigned the Minorpromotion (magazine for chess youth in North Brabant) in Canva</span>
                </span><br />
                            <span><span className="mr-2">•</span>Continues improvement on SG KiNGs website (Statamic), Intern De Pion (a system to regulate the internal chess competion of De Pion, Keizer-systeem (Laravel))</span><br />
                            <span><span className="mr-2">•</span>Started making more use of the API of LiChess on my personal site.</span><br />
                        </>
                    )
                },
                {
                    title: '2023',
                    cardTitle: '2023',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                            <span><span className="mr-2">•</span>Certified: SAFe 5 Practitioner</span><br />
                            <span><span className="mr-2">•</span>Redesigning and moving SG KiNGs website to Statamic</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a> as of September</span><br />
                            <span><span className="mr-2">•</span>Moved <a href="https://interndepion.nl" target="_blank">Intern De Pion</a> to DigitalOcean in just two days and upgraded it to support PHP 8.1 and later</span><br />
                        </>
                    )
                },
                {
                    title: '2022',
                    cardTitle: '2022',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                            <span><span className="mr-2">•</span>Certified: HBO Effectief Communiceren en Beïnvloeden (NCOI)</span><br />
                            <span><span className="mr-2">•</span>Launched <a href="https://schaakmanger.nl" target="_blank">SchaakManager</a> (Discontinued for now)</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                        </>
                    )
                },
                {
                    title: '2021',
                    cardTitle: '2021',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> via <a href="https://calco.nl" target="_blank">Calco</a> (as of March 13th, directly @ Stedin)</span><br />
                            <span><span className="mr-2">•</span>Certified: </span><br />
                            <span><span className="mr-2">•</span>Started using <a href="https://forge.laravel.com" target="_blank">Laravel Forge</a> to deploy my personal website.</span><br />
                            <span><span className="mr-2">•</span>Redesigned this website & KeizerPHP to use Tailwind CSS, AlpineJS & Livewire</span><br />
                            <span><span className="mr-2">•</span>Also started on a VueJS / Inertia-version</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            <span><span className="mr-2">•</span>Organised Het Open Online Roosendaals Bekertoernooi</span><br />
                        </>
                    )
                },
                {
                    title: '2020',
                    cardTitle: '2020',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> via <a href="https://calco.nl" target="_blank">Calco</a></span><br />
                            <span><span className="mr-2">•</span>Certified: </span><br />
                            <span><span className="mr-2">•</span>Wrote a Personal Development Plan</span><br />
                            <span>
                    <span className="mr-2">•</span>Totally rewrote and published KeizerPHP, with the usage of:
                    <br />
                    <span className="ml-6"><span className="mr-2">•</span>PHP</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>Bootstrap</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>jQuery</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>Laravel</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>WebPush</span><br />
                </span>
                            <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant) (Cancelled due to Corona)</span><br />
                            <span><span className="mr-2">•</span>Published franklambregts.com via a <a href="https://digitalocean.com" target="_blank">DigitalOcean</a> Druplet</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                        </>
                    )
                },
                {
                    title: '2019',
                    cardTitle: '2019',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Started in February at <a href="https://calco.nl" target="_blank">Calco</a> & in May I got detached at <a href="https://stedin.net" target="_blank">Stedin</a> as SAP FI/CO Trainee, without any SAP experience.</span><br />
                            <span>
                    <span className="mr-2">•</span>Certified:
                    <br />
                    <span className="ml-6"><span className="mr-2">•</span>Professional Scrum Master 1 (<a href="https://scrum.org" target="_blank">Scrum.org</a>) | March</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>SQL (<a href="https://exin.com" target="_blank">EXIN</a>) | March</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>Cloud Computing (<a href="https://exin.com" target="_blank">EXIN</a>) | March</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>ITIL (<a href="https://axelos.com" target="_blank">Axelos</a>) | April</span><br />
                    <span className="ml-6"><span className="mr-2">•</span>SAP Application Associate Financial Accounting (<a href="https://sap.com" target="_blank">SAP</a>) | August</span><br />
                </span>
                            <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                        </>
                    )
                },
                {
                    title: '2018',
                    cardTitle: '2018',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Working for <a href="https://abab.nl" target="_blank">ABAB</a> as Junior Tax Advisor until end of the year</span><br />
                            <span>
                    <span className="mr-2">•</span>Certified:
                    <br />
                    <span className="ml-6"><span className="mr-2">•</span>Chess Trainer 2 (<a href="https://schaakbond.nl" target="_blank">KNSB</a>) | May</span><br />
                </span>
                            <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</span><br />
                            <span><span className="mr-2">•</span>Organised the <i>Hutton-toernooi</i> (Chess Tournament between children from the different provinces of the Netherlands)</span><br />
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                        </>
                    )
                },
                {
                    title: '2017',
                    cardTitle: '2017',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Started in July at <a href="https://abab.nl" target="_blank">ABAB</a> as Junior Tax Advisor</span><br />
                            <span>
                    <span className="mr-2">•</span>Certified:
                    <br />
                    <span className="ml-6"><span className="mr-2">•</span>Chess Trainer 1 (<a href="https://schaakbond.nl" target="_blank">KNSB</a>) | May</span><br />
                </span>
                            <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                        </>
                    )
                },
                {
                    title: 'Anything before 2017',
                    cardTitle: '2016 and earlier',
                    cardDetailedText: (
                        <>
                            <span><span className="mr-2">•</span>Obtained Bachelor's Degree in Fiscal Economics at Erasmus University Rotterdam (2015)</span><br />
                            <span><span className="mr-2">•</span>Graduated from Markland College (VWO, <i>Pre-University Education</i>) (2012)</span><br />
                            <span><span className="mr-2">•</span>Started as Competition Leader (Seniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> (2015)</span><br />
                            <span><span className="mr-2">•</span>Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> (since 2012)</span><br />
                        </>
                    )
                },
            ]} mode="VERTICAL_ALTERNATING" disableToolbar />
        </GuestLayout>
    );
}
