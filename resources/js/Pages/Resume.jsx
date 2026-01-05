import GuestLayout from '@/Layouts/GuestLayout';

import { Head, Link } from '@inertiajs/react';
import { Chrono } from 'react-chrono';

export default function Resume() {
    return (
        <GuestLayout>
            <Head title="Resume" />
            <div className="max-w-xl mx-auto text-center lg:text-balance">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold tracking-tight text-yellow-300">Resume</h2>
                <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                    <a href="https://www.linkedin.com/in/frank-lambregts-a72017149/" target="_blank"><span className="m-2 bg-white rounded-md px-2 py-1 inline-block text-blue-300">LinkedIn</span></a>
                </p>
                <p className="text-base mt-4 font-medium text-zinc-500">Read my very interesting resume below!</p>
            </div>
            <div className="flex flex-col mx-auto mt-12 grid-cols-9 md:grid">
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2026">2026</time>
                            </p>
                            <h3 className="text-base mt-4 font-semibold tracking-tight text-zinc-900">This year</h3>
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working as Informatie Analist @ <a href="https://vgz.nl" target="_blank">VGZ</a></span><br />
                                <span><span className="mr-2">•</span>Certified: </span><br />
                                <span><span className="mr-2">•</span>Chairman @ <a href="https://sgking.nl" target="_blank">SG KiNG</a></span><br />
                                <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a>:<br/>
                                <span className="ml-4"><span className="mr-2">•</span>Important: organizing the Provincial Championships for Youth (Individual and Teams)</span><br />
                                </span>
                                <span><span className="mr-2">•</span>Continues improvement on SG KiNGs website (Statamic)</span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                    <div className="my-4 mr-auto col-start-6 col-end-10">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2025">2025</time>
                            </p>
                            <h3 className="text-base mt-4 font-semibold tracking-tight text-zinc-900">Last year</h3>
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> (until 14th of February)</span><br />
                                <span><span className="mr-2">•</span>Started as Informatie Analist @ <a href="https://vgz.nl" target="_blank">VGZ</a></span><br />
                                <span><span className="mr-2">•</span>Certified: IREB CPRE Foundation Level (August 2025)</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> until the end of the season 2024-2025</span><br />
                                <span><span className="mr-2">•</span>Chairman @ <a href="https://sgking.nl" target="_blank">SG KiNG</a> as of the start of season 2025-2026</span><br />
                                <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a>:<br />
                                <span className="ml-4"><span className="mr-2">•</span>Important: organizing the Provincial Championships for Youth (Individual and Teams)</span></span><br />
                                <span><span className="mr-2">•</span>Continues improvement on SG KiNGs website (Statamic)</span><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2024">2024</time>
                            </p>
                            
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                                <span><span className="mr-2">•</span>Certified: ArchiMate 3.2 Foundation</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                                <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a>:<br />
                                <span className="ml-4"><span className="mr-2">•</span>Important: organizing the Provincial Championships for Youth (Individual and Teams)</span><br />
                                <span className="ml-4"><span className="mr-2">•</span>Redesigned the Minorpromotion (magazine for chess youth in North Brabant) in Canva</span></span><br />
                                <span><span className="mr-2">•</span>Continues improvement on SG KiNGs website (Statamic), Intern De Pion (a system to regulate the internal chess competion of De Pion, Keizer-systeem (Laravel))</span><br />
                                <span><span className="mr-2">•</span>Started making more use of the API of LiChess on my personal site.</span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                    <div className="my-4 mr-auto col-start-6 col-end-10">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2023">2023</time>
                            </p>
                           
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                                <span><span className="mr-2">•</span>Certified: SAFe 5 Practitioner</span><br />
                                <span><span className="mr-2">•</span>Redesigning and moving SG KiNGs website to Statamic</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                                <span><span className="mr-2">•</span>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a> as of September:<br />
                                <span className="ml-4"><span className="mr-2">•</span>Important: organizing the Provincial Championships for Youth (Individual and Teams)</span></span><br />
                                <span><span className="mr-2">•</span>Moved <a href="https://interndepion.nl" target="_blank">Intern De Pion</a> to DigitalOcean in just two days and upgraded it to support PHP 8.1 and later</span><br />
                             </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2022">2022</time>
                            </p>
                            
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a></span><br />
                                <span><span className="mr-2">•</span>Certified: HBO Effectief Communiceren en Beïnvloeden (NCOI)</span><br />
                                <span><span className="mr-2">•</span>Launched <a href="https://schaakmanger.nl" target="_blank">SchaakManager</a> (Discontinued for now)</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                    <div className="my-4 mr-auto col-start-6 col-end-10">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2021">2021</time>
                            </p>
                           
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> via <a href="https://calco.nl" target="_blank">Calco</a> (as of March 13th, directly @ Stedin)</span><br />
                                <span><span className="mr-2">•</span>Certified: </span><br />
                                <span><span className="mr-2">•</span>Started using <a href="https://forge.laravel.com" target="_blank">Laravel Forge</a> to deploy my personal website.</span><br />
                                <span><span className="mr-2">•</span>Redesigned this website & KeizerPHP to use Tailwind CSS, AlpineJS & Livewire</span><br />
                                <span><span className="mr-2">•</span>Also started on a VueJS / Inertia-version</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                                <span><span className="mr-2">•</span>Organised Het Open Online Roosendaals Bekertoernooi</span><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2020">2020</time>
                            </p>
                            
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://stedin.net" target="_blank">Stedin</a> via <a href="https://calco.nl" target="_blank">Calco</a></span><br />
                                <span><span className="mr-2">•</span>Certified: </span><br />
                                <span><span className="mr-2">•</span>Wrote a Personal Development Plan</span><br />
                                <span><span className="mr-2">•</span>Totally rewrote and published KeizerPHP, with the usage of:<br />
                                    <span className="ml-6"><span className="mr-2">•</span>PHP</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>Bootstrap</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>jQuery</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>Laravel</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>WebPush</span><br />
                                </span>
                                <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant) (Cancelled due to Corona)</span><br />
                                <span><span className="mr-2">•</span>Published franklambregts.com via a <a href="https://digitalocean.com" target="_blank">DigitalOcean</a> Droplet</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                    <div className="my-4 mr-auto col-start-6 col-end-10">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2019">2019</time>
                            </p>
                           
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Started in February at <a href="https://calco.nl" target="_blank">Calco</a> & in May I got detached at <a href="https://stedin.net" target="_blank">Stedin</a> as SAP FI/CO Trainee, without any SAP experience.</span><br />
                                <span><span className="mr-2">•</span>Certified:<br />
                                    <span className="ml-6"><span className="mr-2">•</span>Professional Scrum Master 1 (<a href="https://scrum.org" target="_blank">Scrum.org</a>) | March</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>SQL (<a href="https://exin.com" target="_blank">EXIN</a>) | March</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>Cloud Computing (<a href="https://exin.com" target="_blank">EXIN</a>) | March</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>ITIL (<a href="https://axelos.com" target="_blank">Axelos</a>) | April</span><br />
                                    <span className="ml-6"><span className="mr-2">•</span>SAP Application Associate Financial Accounting (<a href="https://sap.com" target="_blank">SAP</a>) | August</span><br />
                                </span>
                                <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2018">2018</time>
                            </p>
                            
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Working for <a href="https://abab.nl" target="_blank">ABAB</a> as Junior Tax Advisor until end of the year</span><br />
                                <span><span className="mr-2">•</span>Certified:<br />
                                    <span className="ml-6"><span className="mr-2">•</span>Chess Trainer 2 (<a href="https://schaakbond.nl" target="_blank">KNSB</a>) | May</span><br />
                                </span>
                                <span><span className="mr-2">•</span>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</span><br />
                                <span><span className="mr-2">•</span>Organised the <i>Hutton-toernooi</i> (Chess Tournament between children from the different provinces of the Netherlands)</span><br />
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
                <div className="flex md:contents">
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                    <div className="my-4 mr-auto col-start-6 col-end-10">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2017">2017</time>
                            </p>
                           
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Started in July at <a href="https://abab.nl" target="_blank">ABAB</a> as Junior Tax Advisor</span><br />
                                <span><span className="mr-2">•</span>Certified:<br />
                                    <span className="ml-6"><span className="mr-2">•</span>Chess Trainer 1 (<a href="https://schaakbond.nl" target="_blank">KNSB</a>) | May</span><br />
                                </span>
                                <span><span className="mr-2">•</span>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a></span><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse md:contents">
                    <div className="my-4 ml-auto col-start-1 col-end-5">
                        <div className="relative p-4 shadow size-full bg-linear-180 outline outline-zinc-100 from-zinc-50 to-zinc-100 rounded-xl">
                            <p className="text-xs relative font-semibold uppercase tracking-wide text-zinc-500">
                                <time year="2016">2016</time>
                            </p>
                            <h3 className="text-base mt-4 font-semibold tracking-tight text-zinc-900">Anything before 2017</h3>
                            <p className="text-sm mt-2 text-zinc-500 lg:text-balance">
                                <span><span className="mr-2">•</span>Obtained Bachelor's Degree in Fiscal Economics at Erasmus University Rotterdam (2015)</span><br />
                                <span><span className="mr-2">•</span>Graduated from Markland College (VWO, <i>Pre-University Education</i>) (2012)</span><br />
                                <span><span className="mr-2">•</span>Started as Competition Leader (Seniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> (2015)</span><br />
                                <span><span className="mr-2">•</span>Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De Pion</a> (since 2012)</span><br />
                            </p>
                        </div>
                    </div>
                    <div className="relative mr-10 col-start-5 col-end-6 md:mx-auto">
                        <div className="flex items-center justify-center w-3 h-full">
                            <div className="h-full w-[0.05rem] bg-zinc-200 pointer-events-none"></div>
                        </div>
                        <div className="absolute -mt-3 rounded-full size-3 outline-2 outline-zinc-100 bg-zinc-100 top-1/2"></div>
                    </div>
                </div>
            </div>
            
        </GuestLayout>
    );
}
