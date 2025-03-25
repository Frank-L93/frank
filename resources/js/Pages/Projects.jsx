import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Projects() {
    return (
<GuestLayout>
            <Head title="Projects" />
                <div className="text-2xl font-semibold mx-auto text-red-300 text-center">
                    Projects
                </div>
                <div className="px-2 py-2 grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
        <a
        href="https://sgking.nl"
        target="_blank"
        className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark"
      >
        <div>
          <img
            src="king.png"
            alt=""
            className="rounded-t-3xl border-none"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="text-2xl text-blue-500 font-semibold mb-2">
            SG KiNG
          </p>
          <span className="text-lg">Redesigned the website of chess club SG KiNG. Migrated it from WordPress to Statamic and included some new features.</span>
        </div>
      </a>
      <a
        href="https://github.com/Frank-L93/depion"
        target="_blank"
        className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark"
      >
        <div>
          <img
            src="InternDePion.png"
            alt=""
            className="rounded-t-3xl border-none"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="text-2xl text-blue-500 font-semibold mb-2">
            Interne Competitie De Pion
          </p>
          <span className="text-lg">An open source PHP (Laravel) project (original called KeizerPHP) that makes it possible to organise a <i>Systeem Keizer</i> Competition for chess clubs. Used for for S.V. De Pion with its own codebase.
          The original version can be found <a href="https://github.com/Frank-L93/KeizerPHP" target="_blank">here</a>.
          </span>
        </div>
      </a>
      <a
        href="https://github.com/Frank-L93/hoorbt"
        target="_blank"
        className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark"
      >
        <div>
          <img
            src=""
            alt=""
            className="rounded-t-3xl border-none"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="text-2xl text-blue-500 font-semibold mb-2">
            Schaakladder
          </p>
          <span className="text-lg">An open source PHP (Laravel) project to manage a ladder competition, but also for example a knock-out competition. A bit more flexible than the KeizerPHP. The sourcecode is only used to organise 'Het Open Online Roosendaals Bekertoernooi' during the Covid-19 pandemic.
          </span>
        </div>
      </a>
      <Link
        href="/deepdives"
        className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark"
      >
        <div>
          <img
            src=""
            alt=""
            className="rounded-t-3xl border-none"
          />
        </div>
        <div clasNames="text-center px-4 py-6">
          <p className="text-2xl text-blue-500 font-semibold mb-2">
            DeepDives
          </p>
          <span className="text-lg">I like to help others, so when I have time, I try to write usable deepdives. Not really a project, but I like to highlight it. Feel free to contact me if you have a subject you would like to know more about. Happy to dive into it!</span>
        </div>
    </Link>
    </div>
</GuestLayout>
    );
}
