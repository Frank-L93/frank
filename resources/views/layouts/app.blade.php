<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
          <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Frank Lambregts">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <meta name="description" content="Explore the projects, resume, and deep dives of Frank Lambregts, an Information Analyst and Laravel developer passionate about chess and process optimization. I am a fan of Statamic. And I organize chess events.">
    <meta name="keywords" content="Frank Lambregts, Information Analyst, Laravel, PHP, Statamic, Chess, Organizer, Portfolio, Developer, Requirements, Engineer">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="Frank Lambregts">
    <meta property="og:title" content="Frank Lambregts - Information Analyst & Developer">
    <meta property="og:description" content="Explore the projects, resume, and deep dives of Frank Lambregts.">
    <meta property="og:image" content="{{ url('/frank-social-card.png') }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:title" content="Frank Lambregts - Information Analyst & Developer">
    <meta name="twitter:description" content="Explore the projects, resume, and deep dives of Frank Lambregts.">
    <meta name="twitter:image" content="{{ url('/frank-social-card.png') }}">
        <title>{{ $title }} | {{config('app.name') }}</title>

        @vite(['resources/css/app.css', 'resources/js/app.js'])
 <script type="application/ld+json">
        {
          "context": "https://schema.org",
          "@type": "Person",
          "name": "Frank Lambregts",
          "url": "{{ url('/') }}",
          "image": "{{ url('/frank.jpg') }}",
          "sameAs": [
            "https://www.facebook.com/franklambregts",
            "https://github.com/Frank-L93",
            "https://www.linkedin.com/in/frank-lambregts-a72017149/"
          ],
          "jobTitle": "Information Analyst",
          "worksFor": {
            "@type": "Organization",
            "name": "VGZ"
          },
          "knowsAbout": ["Laravel", "PHP", "React", "Statamic", "Chess", "Business Process Modeling"]
        }
    </script>
        @livewireStyles
    </head>
    <body>

         <div class="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
            <livewire:navigation />

            <main class="flex w-full grow flex-col items-center p-4 sm:p-6">
                <div class="w-full rounded-md max-w-4xl overflow-hidden bg-white px-4 py-4 shadow-md sm:rounded-lg dark:bg-gray-800">
                    {{ $slot }}
                </div>
            </main>

           
                <footer class="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    <div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        <span class="text-yellow-300">
                            Coded with <span aria-hidden="true">💖</span> in <a href="https://laravel.com" target="_blank">Laravel</a>
                        </span>
                        <span class="text-green-300">
                            Powered <span aria-hidden="true">⚡</span> by <a href="https://livewire.laravel.com" target="_blank">Livewire</a>
                        </span>
                        <span class="text-purple-300">
                            Designed <span aria-hidden="true">🎨</span> with <a href="https://tailwindcss.com" target="_blank">Tailwind</a>
                        </span>
                    </div>
                </footer>
          
        </div>
        

        @livewireScripts
    </body>
</html>
