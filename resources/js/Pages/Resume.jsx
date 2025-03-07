import GuestLayout from '@/Layouts/GuestLayout';

import { Head, Link } from '@inertiajs/react';
import { Chrono } from 'react-chrono';

export default function Resume() {
    return (
            <GuestLayout>
             <Head title="Resume" />

<div class="text-2xl font-semibold mx-auto text-yellow-300 text-center">Resume</div>
<div class="text-xs mx-auto text-center"><a href="https://www.linkedin.com/in/frank-lambregts-a72017149/" target="_blank"><span class="m-2 bg-white rounded-md px-2 py-1 inline-block text-blue-300">LinkedIn</span></a>
</div>

<Chrono items={[
    {
        title: '2025',
        cardDetailedText: [
            <ol class="list-disc list-inside">
              <li>Working for <a href="https://stedin.net" target="_blank">Stedin</a> (until 14th of February)</li>
              <li>Started as Informatie Analist @ <a href="https://vgz.nl" target="_blank">VGZ</a></li>
              <li>Certified: </li>
              <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De
                  Pion</a></li>
              <li>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a></li>
              <li>Continues improvement on SG KiNGs website (Statamic)</li>
            </ol>
        ]
    },
    {
        title: '2024',
        cardDetailedText:[
            <ol class="list-disc list-inside">
              <li>Working for <a href="https://stedin.net" target="_blank">Stedin</a></li>
              <li>Certified: ArchiMate 3.2 Foundation</li>
              <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De
                  Pion</a></li>
              <li>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a>:
                <ul class="list-decimal list-inside"><li>Redesigned the Minorpromotion (magazine for chess youth in North Brabant) in Canva</li></ul>
            </li>
              <li>Continues improvement on SG KiNGs website (Statamic), Intern De Pion (a system to regulate the internal chess competion of De Pion, Keizer-systeem (Laravel))</li>
              <li>Started making more use of the API of LiChess on my personal site.</li>
            </ol>
        ]
    },
    {
        title: '2023',
        cardDetailedText:[
            <ol class="list-disc list-inside">
            <li>Working for <a href="https://stedin.net" target="_blank">Stedin</a></li>
            <li>Certified: SAFe 5 Practitioner</li>
            <li>Redesigning and moving SG KiNGs website to Statamic</li>
            <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a href="https://depion.nl" target="_blank">S.V. De
                Pion</a></li>
                <li>Youth Leader @ <a href="https://nbsb.nl" target="_blank">NBSB</a> as of September</li>
                <li>Moved <a href="https://interndepion.nl" target="_blank">Intern De Pion</a> to DigitalOcean in just two days and upgraded it to support PHP 8.1 and later</li>
          </ol>
        ]
    },
    {
        title: '2022',
        cardDetailedText:[
            <ol class="list-disc list-inside">
          <li>Working for <a
              href="https://stedin.net"
              target="_blank"
            >Stedin</a></li>
          <li>Certified: HBO Effectief Communiceren en Beïnvloeden (NCOI)</li>
          <li>Launched <a
              href="https://schaakmanger.nl"
              target="_blank"
            >SchaakManager</a> (Discontinued for now)</li>
          <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
              href="https://depion.nl"
              target="_blank"
            >S.V. De Pion</a></li>
        </ol>
        ]
    },
    {
        title: '2021',
        cardDetailedText:[
            <ol class="list-disc list-inside">
          <li>Working for <a
              href="https://stedin.net"
              target="_blank"
            >Stedin</a> via <a
              href="https://calco.nl"
              target="_blank"
            >Calco</a> (as of March 13th, directly @ Stedin)</li>
          <li>Certified: </li>
          <li>Started using <a
              href="https://forge.laravel.com"
              target="_blank"
            >Laravel Forge</a> to deploy my personal website.</li>
          <li>Redesigned this website & KeizerPHP to use Tailwind CSS, AlpineJS & Livewire</li>
          <li>Also started on a VueJS / Inertia-version</li>
          <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
              href="https://depion.nl"
              target="_blank"
            >S.V. De Pion</a></li>
          <li>Organised Het Open Online Roosendaals Bekertoernooi</li>
        </ol>
        ]
    },
    {
        title: '2020',
        cardDetailedText:[
            <ol class="list-disc list-inside">
            <li>Working for <a
                href="https://stedin.net"
                target="_blank"
              >Stedin</a> via <a
                href="https://calco.nl"
                target="_blank"
              >Calco</a></li>
            <li>Certified: </li>
            <li>Wrote a Personal Development Plan</li>
            <li>Totally rewrote and published KeizerPHP, with the usage of:
              <ul class="list-decimal list-inside">
                <li>PHP</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Laravel</li>
                <li>WebPush</li>
              </ul>
            </li>
            <li>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant) (Cancelled due to Corona)</li>
            <li>Published franklambregts.com via a <a
                href="https://digitalocean.com"
                target="_blank"
              >DigitalOcean</a> Druplet</li>
            <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
                href="https://depion.nl"
                target="_blank"
              >S.V. De Pion</a></li>
          </ol>
        ]
    },
    {
        title: '2019',
        cardDetailedText:[
            <ol class="list-disc list-inside">
            <li>Started in February at <a
                href="https://calco.nl"
                target="_blank"
              >Calco</a> & in May I got detached at <a
                href="https://stedin.net"
                target="_blank"
              >Stedin</a> as SAP FI/CO Trainee, without any SAP experience.</li>
            <li>Certified:
              <ul class="list-decimal list-inside">
                <li>Professional Scrum Master 1 (<a
                    href="https://scrum.org"
                    target="_blank"
                  >Scrum.org</a>) | March</li>
                <li>SQL (<a
                    href="https://exin.com"
                    target="_blank"
                  >EXIN</a>) | March</li>
                <li>Cloud Computing (<a
                    href="https://exin.com"
                    target="_blank"
                  >EXIN</a>) | March</li>
                <li>ITIL (<a
                    href="https://axelos.com"
                    target="_blank"
                  >Axelos</a>) | April</li>
                <li>SAP Application Associate Financial Accounting (<a
                    href="https://sap.com"
                    target="_blank"
                  >SAP</a>) | August</li>
              </ul>
            </li>
            <li>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</li>
            <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
                href="https://depion.nl"
                target="_blank"
              >S.V. De Pion</a></li>
          </ol>
        ]
    },
    {
        title: '2018',
        cardDetailedText:[
            <ol class="list-disc list-inside">
          <li>Working for <a
              href="https://abab.nl"
              target="_blank"
            >ABAB</a> as Junior Tax Advisor until end of the year</li>
          <li>Certified:
            <ul class="list-decimal list-inside">
              <li>Chess Trainer 2 (<a
                  href="https://schaakbond.nl"
                  target="_blank"
                >KNSB</a>) | May</li>
            </ul>
          </li>
          <li>Organised the <i>Brabantse Pupillendag & Snelschaken voor Jeugd</i> (Chess Tournament for children in North-Brabant)</li>
          <li>Organised the <i>Hutton-toernooi</i> (Chess Tournament between children from the different provinces of the Netherlands)</li>
          <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
              href="https://depion.nl"
              target="_blank"
            >S.V. De Pion</a></li>
        </ol>
        ]
    },
    {
        title: '2017',
        cardDetailedText:[
            <ol class="list-disc list-inside">
            <li>Started in July at <a
                href="https://abab.nl"
                target="_blank"
              >ABAB</a> as Junior Tax Advisor</li>
            <li>Certified:
              <ul class="list-decimal list-inside">
                <li>Chess Trainer 1 (<a
                    href="https://schaakbond.nl"
                    target="_blank"
                  >KNSB</a>) | May</li>
              </ul>
            </li>
            <li>Competition Leader (Seniors) & Chess Trainer (Juniors) @ <a
                href="https://depion.nl"
                target="_blank"
              >S.V. De Pion</a></li>
          </ol>
        ]
    },
    {
        title: '2016 and earlier',
        cardDetailedText:[
            <ol class="list-disc list-inside">
            <li>Obtained Bachelor's Degree in Fiscal Economics at Erasmus University Rotterdam (2015)</li>
            <li>Graduated from Markland College (VWO, <i>Pre-University Education</i>) (2012)</li>
            <li>Started as Competition Leader (Seniors) @ <a
                href="https://depion.nl"
                target="_blank"
              >S.V. De Pion</a> (2015)</li>
            <li>Chess Trainer (Juniors) @ <a
                href="https://depion.nl"
                target="_blank"
              >S.V. De Pion</a> (since 2012)</li>
          </ol>
        ]
    },
]} mode="VERTICAL_ALTERNATING" disableToolbar />
</GuestLayout>
    );
}
