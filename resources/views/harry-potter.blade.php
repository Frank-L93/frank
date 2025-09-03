<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>De Magie van Schaken: Een Harry Potter Grimoire</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Wizard's Parchment -->
    <!-- Application Structure Plan: De applicatie gebruikt een thematische, tab-gebaseerde navigatie (Spreuken, Personages, Objecten) om de inhoud overzichtelijk te houden. De data wordt gepresenteerd in een responsieve card-layout, wat visueel aantrekkelijker is dan een tabel. Een live zoekfilter is toegevoegd om gebruikers snel specifieke termen te laten vinden binnen de actieve categorie. Deze structuur is gekozen voor optimale gebruiksvriendelijkheid en interactieve verkenning, in plaats van een lange, statische lijst. -->
    <!-- Visualization & Content Choices: De broninformatie is volledig tekstueel, dus er zijn geen grafieken nodig. Het doel is het organiseren en presenteren van informatie. De gekozen presentatiemethode is een interactief grid van 'kaarten' in plaats van een statische tabel. De belangrijkste interacties zijn het wisselen tussen categorieën via knoppen en het live filteren van de kaarten met een zoekbalk. Deze aanpak maakt de inhoud boeiender en makkelijker te doorzoeken. Alles is geïmplementeerd met vanilla JavaScript en Tailwind CSS, zonder SVG of Mermaid. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FDFBF5;
            color: #382E2E;
        }
        h1, h2, h3 {
            font-family: 'EB Garamond', serif;
        }
        .nav-btn {
            transition: all 0.3s ease;
        }
        .nav-btn.active {
            background-color: #4A3F6D;
            color: #FDFBF5;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .card {
            background-color: #FFFFFF;
            border-left: 5px solid #D4C1A2;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
        .card-title {
            color: #4A3F6D;
        }
        .card-subtitle {
            font-size: 0.8rem;
            color: #7E6F6A;
            font-style: italic;
        }
    </style>
</head>
<body class="bg-stone-50 antialiased">

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <header class="text-center mb-10">
        <h1 class="text-5xl md:text-6xl font-bold text-stone-800">De Magie van Schaken</h1>
        <p class="text-xl text-stone-600 mt-2">Een Harry Potter Grimoire</p>
    </header>

    <main>
        <div class="max-w-4xl mx-auto mb-8 text-center">
            <p class="text-lg text-stone-700">Verken de betoverende connecties tussen de wereld van Harry Potter en het strategische spel schaken. Kies een categorie hieronder of gebruik de zoekbalk om specifieke termen te ontdekken.</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sticky top-0 bg-stone-50/80 backdrop-blur-sm py-4 z-10">
            <div id="navigation" class="flex flex-wrap justify-center gap-2 sm:gap-4">
                <button data-category="spreuken" class="nav-btn active text-stone-700 bg-white shadow-sm hover:bg-stone-100 font-semibold py-2 px-5 rounded-full">Spreuken & Vloeken</button>
                <button data-category="personages" class="nav-btn text-stone-700 bg-white shadow-sm hover:bg-stone-100 font-semibold py-2 px-5 rounded-full">Personages & Wezens</button>
                <button data-category="objecten" class="nav-btn text-stone-700 bg-white shadow-sm hover:bg-stone-100 font-semibold py-2 px-5 rounded-full">Objecten & Plaatsen</button>
            </div>
            <div class="w-full sm:w-auto mt-4 sm:mt-0">
                <input type="text" id="searchInput" placeholder="Zoek een term..." class="w-full sm:w-64 px-4 py-2 border border-stone-300 rounded-full focus:ring-2 focus:ring-purple-800 focus:outline-none transition">
            </div>
        </div>

        <div id="content-container">
        </div>
        <p id="no-results" class="text-center text-stone-500 text-lg hidden">Geen resultaten gevonden voor uw zoekopdracht.</p>

    </main>
</div>

<script>
    const data = [
        { category: 'spreuken', term: 'Wingardium Leviosa', hpMeaning: 'Een spreuk om objecten te laten zweven.', chessConnection: 'Een elegante, lange zet met een loper of toren, alsof het stuk moeiteloos over het bord naar een cruciaal veld zweeft.' },
        { category: 'spreuken', term: 'Expelliarmus', hpMeaning: 'Ontwapent een tegenstander.', chessConnection: 'Een penning of een vork die een belangrijk verdedigend stuk van de tegenstander \'ontwapent\' en de verdediging van de koning verzwakt.' },
        { category: 'spreuken', term: 'Protego', hpMeaning: 'De schildspreuk die beschermt tegen bezweringen.', chessConnection: 'Een solide verdedigende zet die een directe dreiging pareert. Een blokkade of het dekken van een aangevallen stuk.' },
        { category: 'spreuken', term: 'Stupor (Stupefy)', hpMeaning: 'Verlamt of verdooft een slachtoffer.', chessConnection: 'Een zet die de tegenstander zo verrast of in de problemen brengt dat er geen goede reactie meer mogelijk is, waardoor hun plan \'verlamd\' raakt.' },
        { category: 'spreuken', term: 'Confundo', hpMeaning: 'Brengt het slachtoffer in de war.', chessConnection: 'Een complexe, dubbelzinnige zet die de tegenstander in verwarring brengt, hopend dat ze een blunder maken in de chaos.' },
        { category: 'spreuken', term: 'Expecto Patronum', hpMeaning: 'Roept een beschermgeest op tegen Dementors.', chessConnection: 'Je koningin of een ander krachtig stuk inzetten als de ultieme verdediger om een zware aanval op de koning af te slaan.' },
        { category: 'spreuken', term: 'Avada Kedavra', hpMeaning: 'De Vloek des Doods.', chessConnection: 'De onvermijdelijke, beslissende zet die leidt tot schaakmat. De \'genadeklap\' voor de vijandelijke koning.' },
        { category: 'spreuken', term: 'Imperio', hpMeaning: 'Geeft volledige controle over het slachtoffer.', chessConnection: 'Een situatie van \'zetdwang\', waarbij je een zet doet die de tegenstander dwingt tot een specifieke reactie, waardoor jij de controle over het spelverloop overneemt.' },
        { category: 'spreuken', term: 'Accio', hpMeaning: 'Een spreuk om objecten naar je toe te halen.', chessConnection: 'Het \'uitlokken\' van een vijandelijk stuk naar een veld waar het kwetsbaar is, of het \'oproepen\' van je eigen stukken voor een gecoördineerde aanval.' },
        { category: 'spreuken', term: 'Reparo', hpMeaning: 'Repareert kapotte objecten.', chessConnection: 'Het \'repareren\' van een verzwakte pionnenstructuur of het herstellen van de coördinatie tussen je stukken na een onhandige fase.' },
        { category: 'spreuken', term: 'Petrificus Totalus', hpMeaning: 'Een vloek die het hele lichaam verlamt.', chessConnection: 'Een absolute penning. Een stuk staat voor de koning en kan absoluut niet bewegen, volledig \'verlamd\' door de aanval.' },
        { category: 'spreuken', term: 'Alohomora', hpMeaning: 'Een spreuk die sloten opent.', chessConnection: 'Een slimme pionzet of een offer dat een gesloten stelling \'openbreekt\' en nieuwe aanvalsl lijnen creëert.' },
        { category: 'spreuken', term: 'Sectumsempra', hpMeaning: 'Een vloek die diepe snijwonden veroorzaakt.', chessConnection: 'Een meedogenloze, scherpe aanval die de pionnenverdediging rond de vijandelijke koning openrijt en blijvende zwaktes creëert.' },
        { category: 'spreuken', term: 'Legilimens', hpMeaning: 'Hiermee kan men de gedachten van een ander lezen.', chessConnection: 'Het perfect anticiperen op het plan van je tegenstander, alsof je hun volgende zetten al kunt \'lezen\' en je daarop voorbereidt.' },
        { category: 'spreuken', term: 'Obliviate', hpMeaning: 'Een spreuk die het geheugen wist.', chessConnection: 'Wanneer je tegenstander een cruciale dreiging over het hoofd ziet, alsof die tijdelijk uit hun geheugen is \'gewist\', leidend tot een blunder.' },
        { category: 'spreuken', term: 'Reducto', hpMeaning: 'Een vloek die objecten verpulvert.', chessConnection: 'Een krachtige doorbraak in het centrum die de pionnenstructuur van de tegenstander volledig \'verpulvert\'.' },
        { category: 'spreuken', term: 'Finite Incantatem', hpMeaning: 'Een algemene tegenbezwering.', chessConnection: 'Een profylactische zet. Een zet die niet direct iets aanvalt, maar het hele plan van de tegenstander neutraliseert voordat het kan beginnen.' },
        { category: 'spreuken', term: 'Incendio', hpMeaning: 'Een spreuk die vuur creëert.', chessConnection: 'Het starten van een \'brand op het bord\'; een snelle, zich uitbreidende koningsaanval die moeilijk te blussen is.' },
        { category: 'spreuken', term: 'Lumos', hpMeaning: 'Creëert een lichtpuntje op de toverstok.', chessConnection: 'Een verhelderende zet die de complexiteit uit een stelling haalt en plotseling jouw winnende plan \'verlicht\'.' },
        { category: 'personages', term: 'Albus Perkamentus', hpMeaning: 'Het briljante en strategische schoolhoofd.', chessConnection: 'De speler die diepe, positionele plannen smeedt, stukken offert voor een hoger doel en de tegenstander altijd een paar zetten voor is.' },
        { category: 'personages', term: 'Severus Sneep', hpMeaning: 'De dubbelagent met onduidelijke motieven.', chessConnection: 'Een stuk dat een dubbele functie heeft; het lijkt te verdedigen, maar heeft een verborgen, aanvallende rol. Of een complexe, dubbelzinnige stelling.' },
        { category: 'personages', term: 'Hermelien Griffel', hpMeaning: 'De slimme heks die alles uit boeken leert.', chessConnection: 'De \'theoreticus\' die de opening perfect speelt volgens de schaakboeken en vertrouwt op nauwkeurige berekening in plaats van intuïtie.' },
        { category: 'personages', term: 'Ron Wemel', hpMeaning: 'Bewijst zijn moed tijdens de Tovernaarschaakpartij.', chessConnection: 'De speler die onder druk boven zichzelf uitstijgt. Een briljante, opofferende zet die de partij redt of wint, net als Rons paardoffer.' },
        { category: 'personages', term: 'Huis-elf', hpMeaning: 'Een nederig maar loyaal en soms machtig wezen.', chessConnection: 'De pion. Oogt zwak, maar is essentieel voor de structuur, kan cruciale offers brengen en heeft de potentie om te promoveren tot het machtigste stuk.' },
        { category: 'personages', term: 'Dementor', hpMeaning: 'Een wezen dat alle geluk wegzuigt.', chessConnection: 'Een verstikkende aanval of een permanente positionele zwakte die alle \'lucht\' en hoop uit de stelling van de tegenstander haalt.' },
        { category: 'personages', term: 'Fenix (Phoenix)', hpMeaning: 'Een magische vogel die herrijst uit zijn as.', chessConnection: 'Een stuk dat verloren leek in een hoek van het bord, maar ontsnapt en plotseling weer een beslissende rol speelt in de partij.' },
        { category: 'objecten', term: 'Tovernaarschaak', hpMeaning: 'Het levende schaakspel.', chessConnection: 'De meest directe link. Het hele spel kan worden gezien als een partij Tovernaarschaak, waar elk geslagen stuk \'vernietigd\' wordt.' },
        { category: 'objecten', term: 'Verdwijnkast', hpMeaning: 'Teleporteert objecten tussen twee locaties.', chessConnection: 'De rokade. De koning en toren wisselen op een \'magische\' manier van plaats, waarbij de koning naar veiligheid verdwijnt.' },
        { category: 'objecten', term: 'Sluipwegwijzer', hpMeaning: 'Een kaart die iedereen op Zweinstein toont.', chessConnection: 'Een diep strategisch inzicht. Het vermogen om alle dreigingen en mogelijkheden op het bord te zien en je plan feilloos te visualiseren.' },
        { category: 'objecten', term: 'Felix Fortenfort', hpMeaning: 'Een toverdrank voor vloeibaar geluk.', chessConnection: 'Wanneer een gewaagde, speculatieve aanval of combinatie perfect uitpakt, alsof je door puur geluk wordt geleid.' },
        { category: 'objecten', term: 'Wisseldrank', hpMeaning: 'Verandert iemand in een ander persoon.', chessConnection: 'Pionpromotie. Een nederige pion bereikt de overkant en transformeert in een machtige koningin.' },
        { category: 'objecten', term: 'Onzichtbaarheidsmantel', hpMeaning: 'Maakt de drager onzichtbaar.', chessConnection: 'Een \'stille\' zet. Een subtiele, onopvallende zet die een verborgen en dodelijke dreiging voorbereidt die de tegenstander pas te laat ziet.' },
        { category: 'objecten', term: 'Gruzielement', hpMeaning: 'Een object waarin een deel van een ziel is verborgen.', chessConnection: 'Een diepgewortelde zwakte in de vijandelijke stelling die je moet vinden en exploiteren om te winnen. Of andersom: een cruciaal verdedigend stuk dat je stelling bijeenhoudt.' },
        { category: 'objecten', term: 'Kamer van Hoge Nood', hpMeaning: 'Een kamer die verschijnt en biedt wat je nodig hebt.', chessConnection: 'In een verloren gewaande stelling toch een onverwachte, creatieve zet vinden die de partij redt of zelfs doet kantelen.' },
        { category: 'objecten', term: 'Het Verboden Bos', hpMeaning: 'Een gevaarlijke en onvoorspelbare plek.', chessConnection: 'Het betreden van een scherpe, tactische en chaotische variant waar elke zet cruciaal is en een enkele misstap fataal kan zijn.' }
    ];

    const contentContainer = document.getElementById('content-container');
    const navigation = document.getElementById('navigation');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('no-results');

    let activeCategory = 'spreuken';

    function createCard(item) {
        return `
                <div class="card p-6 rounded-lg shadow-md break-inside-avoid mb-6" data-category="${item.category}" data-search-term="${(item.term + ' ' + item.chessConnection).toLowerCase()}">
                    <h3 class="card-title text-2xl font-bold mb-1">${item.term}</h3>
                    <p class="card-subtitle mb-3">${item.hpMeaning}</p>
                    <p class="text-stone-700">${item.chessConnection}</p>
                </div>
            `;
    }

    function renderContent(category, searchTerm = '') {
        const filteredData = data.filter(item => {
            const inCategory = item.category === category;
            const matchesSearch = searchTerm === '' || (item.term.toLowerCase().includes(searchTerm) || item.chessConnection.toLowerCase().includes(searchTerm));
            return inCategory && matchesSearch;
        });

        if (filteredData.length > 0) {
            contentContainer.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${filteredData.map(createCard).join('')}</div>`;
            noResults.classList.add('hidden');
        } else {
            contentContainer.innerHTML = '';
            noResults.classList.remove('hidden');
        }
    }

    navigation.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            activeCategory = e.target.dataset.category;

            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            searchInput.value = '';
            renderContent(activeCategory);
        }
    });

    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        renderContent(activeCategory, searchTerm);
    });

    document.addEventListener('DOMContentLoaded', () => {
        renderContent(activeCategory);
    });

</script>
</body>
</html>
