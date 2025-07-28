<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Frank Lambregts">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <meta name="description" content="Explore the projects, resume, and technical deep dives of Frank Lambregts, an Information Analyst and Laravel developer passionate about chess and process optimization.">
    <meta name="keywords" content="Frank Lambregts, Information Analyst, Laravel, PHP, React, Statamic, Chess, Portfolio, Developer">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="Frank Lambregts">
    <meta property="og:title" content="Frank Lambregts - Information Analyst & Developer">
    <meta property="og:description" content="Explore the projects, resume, and technical deep dives of Frank Lambregts.">
    <meta property="og:image" content="{{ url('/frank-social-card.png') }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:title" content="Frank Lambregts - Information Analyst & Developer">
    <meta name="twitter:description" content="Explore the projects, resume, and technical deep dives of Frank Lambregts.">
    <meta name="twitter:image" content="{{ url('/frank-social-card.png') }}">
    <title inertia>{{ config('app.name', 'Frank Lambregts') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

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
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
