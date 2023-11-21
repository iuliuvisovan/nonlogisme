const wordList = [
  {
    slug: 'nonlogism',
    word: 'Nonlogism',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Cuvânt pentru un concept care nu există într-o limbă, dar care ar trebui să existe conform realității lingvistice.',
    examples: [
      'Crearea de <b>nonlogisme</b> este un proces natural, care asigură limbii flexibilitatea necesară pentru a exprima noi idei și concepte.',
      'Cuvântul „monoplanetar” este un <b>nonlogism</b> deoarece nu există în limba română, dar ar trebui.',
    ],
    etymology: 'prin sudare (non + logism)',
  },
  {
    slug: 'morfosinteza',
    word: 'Morfosinteză',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Proces de creare a cuvintelor noi într-o limbă prin combinarea și manipularea formelor morfologice existente.',
    examples: ['<b>Morfosinteza</b> a fost folosită pentru a crea cuvântul "frăsori" prin combinarea cuvintelor "frate" și "soră".'],
    etymology: 'Combinarea cuvintelor "morfologie" și "sinteză".',
  },
  {
    slug: 'acunci',
    word: 'Acunci',
    partOfSpeech: 'adverb',
    partOfSpeechType: 'de timp',
    definition: 'Adverbul “acum”, doar că relativ la “atunci”.',
    examples: [
      'Era anul 2019, iar România celebra revoluția de <b>acunci</b> 30 ani.',
      'M-a întrebat Adrian miercurea trecută dacă vreau să vin la fotbal dar am refuzat, deoarece eu tocmai jucasem <b>acunci</b> 2 zile.',
    ],
    etymology: 'prin fuziune “acum” + “atunci”',
  },
  {
    slug: 'fiut',
    word: 'Fiut',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Formă de participiu a verbului “a fi”. Poate fi folosit în același mod în care sunt folosite participiile altor verbe.',
    examples: [
      '<b>Fiutul</b> de student la medicină implică multe ore de studiu și practică.',
      '<b>Fiutul</b> de președinte este o responsabilitate mare.',
    ],
    etymology: 'morfosinteză',
  },
  {
    slug: 'hat',
    word: 'Hăt',
    partOfSpeech: 'adverb',
    partOfSpeechType: 'de loc',
    definition: 'Oriunde, dar nu aici. Generalizarea regionalismului “hăt” și echivalentul cuvântului englezesc “away”.',
    examples: ['Du-te <b>hăt</b>! (“Go away!”)'],
    etymology: 'generalizare intralinguală',
  },
  {
    slug: 'ecoic',
    word: 'Ecoic(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Cu ecou (despre o cameră, încăpere, container, etc.)',
    examples: ['Camera aceasta este prea <b>ecoică</b> pentru a efectua înregistrări de calitate.'],
    etymology: 'derivare cu sufix (ecou + ic)',
  },
  {
    slug: 'salot',
    word: 'Șalot(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Care se caracterizează prin adâncime mică sau lipsa adâncimii. Antonimul cuvântului “adânc”.',
    examples: [
      'Această fântână este <b>șalotă</b>.',
      'Această piscină are o zonă foarte adâncă și o zonă mai <b>șalotă</b>, unde copiii pot înota în siguranță.',
    ],
    etymology: 'inventare',
  },
  {
    slug: 'suez',
    word: 'Suez(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Originar din/aparținând statului SUA.',
    examples: ['La fel cum un om din Franța este francez, un om din SUA este <b>suez</b>.', 'Acest om este <b>suez</b>, din SUA.'],
    etymology: 'derivare cu sufix (SUA + ez)',
  },
  {
    slug: 'verinat',
    word: 'Verinat(ă)',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Soțul sau soția unui verișor. Verișor + cumnat.',
    examples: [
      'La nunta surorii mele am avut ocazia să-l întâlnesc pentru prima dată pe <b>verinatul</b> meu, soțul verișoarei mele.',
      'Andrei, unde-i unchiu-to Adi? -Nu mi-e unchi! E soțul verișoarei mele: mi-e <b>verinat</b>!',
    ],
    etymology: 'sudare (verișor + cumnat)',
  },
  {
    slug: 'milant',
    word: 'Milant(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce-ți creează sentimentul de milă.',
    examples: [
      'Am văzut videoul.. nu știu ce să zic, mi s-a părut mai degrabă <b>milant</b> decât amuzant, văzând acei copii întinzând mâna spre cameraman.',
    ],
    etymology: 'derivare cu sufix (milă + ant)',
  },
  {
    slug: 'patrisc',
    word: 'Pătrisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă pătratică. Analog cu discul pentru cerc.',
    examples: ['-George, care e aria acestui pătrat? -Pătratul nu are arie. Vrei să spui al acestui <b>pătrisc</b>?'],
    etymology: 'morfosinteză (pătrat + isc)',
  },
  {
    slug: 'trisc',
    word: 'Trisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă triunghică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (triunghi + isc)',
  },
  {
    slug: 'drisc',
    word: 'Drisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă dreptunghiulară. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (dreptunghi + isc)',
  },
  {
    slug: 'rombisc',
    word: 'Rombisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă rombică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (romb + isc)',
  },
  {
    slug: 'trapisc',
    word: 'Trapisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă trapezoidală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (trapez + isc)',
  },
  {
    slug: 'pentisc',
    word: 'Pentisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă pentagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (pentagon + isc)',
  },
  {
    slug: 'hexisc',
    word: 'Hexisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă hexagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (hexagon + isc)',
  },
  {
    slug: 'heptisc',
    word: 'Heptisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă heptagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'morfosinteză (heptagon + isc)',
  },
  {
    slug: 'octisc',
    word: 'Octisc',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Suprafața poligonală de formă octogonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'octogon (heptagon + isc)',
  },
  {
    slug: 'facubil',
    word: 'Făcubil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi făcut.',
    examples: [
      'Această lucrare este <b>făcubilă</b>.',
      'Nu pot să înțeleg cum nu reușește să parcheze în acel spațiu. E cel mai <b>făcubil</b> lucru posibil.',
    ],
    etymology: 'prin sudare (a face + abil)',
  },
  {
    slug: 'chemabil',
    word: 'Chemabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva/cineva care poate fi chemat.',
    examples: [
      'În echipa noastră, avem nevoie de oameni <b>chemabili</b> în orice moment pentru situații de urgență.',
      'Când organizăm petreceri de ultim moment, Luca este întotdeauna <b>chemabil</b>. El aduce mereu atmosfera potrivită.',
      '-Nu știu pe cine să chem la fotbal… ce zici de Ștefan, joacă bine? -Da, joacă ok, e <b>chemabil</b>.',
    ],
    etymology: 'prin sudare (a chema + abil)',
  },
  {
    slug: 'pusabil',
    word: 'Pusabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi pus.',
    examples: [
      'Am cumpărat o nouă canapea și am fost foarte bucuros să constat că este <b>pusabilă</b> în orice cameră din casă, datorită dimensiunilor și designului său versatile.',
      'Ce zici de melodia asta? Crezi că e <b>pusabilă</b> ca și muzică de fundal diseară?',
    ],
    etymology: 'prin sudare (a pune + abil)',
  },
  {
    slug: 'divers',
    word: 'Divers(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Perfectul compus / participiul verbului “a diverge”.',
    examples: [
      'Am încercat să aplicăm planul original, dar proiectul a <b>divers</b> de la direcția inițială.',
      'Când am început să discutăm despre politică, discuția a <b>divers</b> într-un amalgam de schimb de idei.',
    ],
    etymology: 'prin conjugare (diverge)',
  },
  {
    slug: 'luni-marti-miercuri-joi-vineri-sambata-duminica',
    word: 'Luni, Marți, Miercuri, Joi, Vineri, Sâmbătă, Duminică',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Numele zilelor săptămânii, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, <b>Marți</b> spuneați că mergeți la munte? -Salut, cred că până la urmă vom merge doar <b>Miercuri</b>.'],
    etymology: 'numele zilelor săptămânii, dar cu literă mare',
  },
  {
    slug: 'ianuarie-februarie-martie-aprilie-mai-iunie-iulie-august-septembrie-octombrie-noiembrie-decembrie',
    word: 'Ianuarie, Februarie, Martie, Aprilie, Mai, Iunie, Iulie, August, Septembrie, Octombrie, Noiembrie, Decembrie',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Numele lunilor anului, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, în <b>Martie</b> e ziua ta? -Salut! Nu, ziua mea e în <b>Aprilie</b>.'],
    etymology: 'numele lunilor anului, dar cu literă mare',
  },
  {
    slug: 'indoibil',
    word: 'Îndoibil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi îndoit (cu ușurință).',
    examples: ['Se vede că acest telefon e făcut din aluminiu, e mult mai <b>îndoibil</b> decât varianta din oțel.'],
    etymology: 'prin sudare (a îndoi + abil)',
  },
  {
    slug: 'completate',
    word: 'Completate',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Generalizare/substantivare a adjectivului “complet”, cu scopul de face referire la diferite grade ale acestuia.',
    examples: [
      'Din cele 7 sectoare de autostradă, doar 2 au fost finalizate până acum, restul fiind în diferite grade de <b>completate</b>.',
    ],
    etymology: 'prin abstractizare/generalizare (complet + ate)',
  },
  {
    slug: 'frasor',
    word: 'Frăsor',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Termen neutru de gen care se referă la un frate sau o soră.',
    examples: ['Am în total 5 <b>frăsori</b>: 2 frați și 3 surori.', 'Ea se înțelege foarte bine cu <b>frăsorii</b> ei.'],
    etymology: 'Amestec între "frate" și "soră".',
  },
  {
    slug: 'fil',
    word: 'Fil',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Termen neutru de gen care se referă la un fiu sau o fiică.',
    examples: [
      'Am doi <b>fili</b>: un fiu și o fiică.',
      'Weekendul acesta voi avea grijă de 3 copii dar doar 2 dintre ei îmi sunt <b>fili</b>.',
    ],
    etymology: 'inventare',
  },
  {
    slug: 'adultie',
    word: 'Adulție',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition: 'Partea din viața unui om în care este adult.',
    examples: [
      'Oamenii au de obicei mai mult timp la bătrânețe decât la <b>adulție</b>.',
      'După copilărie și adolescență, urmează <b>adulția</b>.',
    ],
    etymology: 'prin sufixarea cuvântului “adult”',
  },
  {
    slug: 'ai-doia',
    word: 'Ai doia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 2. Pluralul numeralului ordinal “al doilea”.',
    examples: ['Ei sunt primii, noi suntem <b>ai doia</b>.'],
    etymology: 'prin pluralizarea numeralului ordinal “al doilea”',
  },
  {
    slug: 'ai-treia',
    word: 'Ai treia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 3. Pluralul numeralului ordinal “al treilea”.',
    examples: ['Ei sunt primii, ceilalti sunt <b>ai doia</b>, noi n-am reușit sa ajungem decât <b>ai treia</b>.'],
    etymology: 'prin pluralizarea numeralului ordinal “al treilea”',
  },
  {
    slug: 'ai-patruia',
    word: 'Ai patruia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 4. Pluralul numeralului ordinal “al patrulea”.',
    examples: [],
    etymology: 'prin pluralizarea numeralului ordinal “al patrulea”',
  },
  {
    slug: 'ai-cincia',
    word: 'Ai cincia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 5. Pluralul numeralului ordinal “al cincilea”.',
    examples: [],
    etymology: 'prin pluralizarea numeralului ordinal “al cincilea”',
  },
  {
    slug: 'manesc-maneasca',
    word: 'Mânesc/Mânească',
    partOfSpeech: 'adjectiv',
    definition: 'Cu referire la mână/mâini.',
    examples: ['Și-a luxat mâna alaltăieri, și acum nu poate face niciun fel de efort <b>mânesc</b>.'],
    etymology: 'prin sufixarea substantivului “mână”',
  },
  {
    slug: 'picioresc-picioreasca',
    word: 'Picioresc/Piciorească',
    partOfSpeech: 'adjectiv',
    definition: 'Cu referire la picior/picioare.',
    examples: ['Și-a luxat piciorul alaltăieri, și acum nu poate face niciun fel de efort <b>picioresc</b>.'],
    etymology: 'prin sufixarea substantivului “picior”',
  },
  {
    slug: 'alui-alei',
    word: 'Alui/alei',
    partOfSpeech: 'pronume',
    definition: 'Pronume posesivo-posesiv.',
    examples: [
      'Jantele mașinii tale sunt mai curate decât <b>alei</b> mele.',
      'De Crăciun, Ionuț i-a cumpărat o curea tatălui său, iar eu i-am luat o cămașă <b>alui</b> meu.',
    ],
    etymology: 'prin extinderea pronumelor posesive “al (meu)” / “a (mea)”',
  },
  {
    slug: 'dabil',
    word: 'Dabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi dat.',
    examples: [
      'Eu returnez produsele într-o stare cât mai bună, ca să fie <b>dabile</b> la următorii clienți.',
      'Am decis să donez cărțile mele vechi către biblioteca locală, deoarece majoritatea sunt deja citite, deci chiar <b>dabile</b>.',
    ],
    etymology: 'prin sudare (a da + abil)',
  },
  {
    slug: 'autoritativa',
    word: 'Autoritativ(ă)',
    partOfSpeech: 'adjectiv',
    definition:
      'Informație sau sursă de informație care are o încredere și recunoaștere largă, fiind adesea considerată definitivă sau concludentă.',
    examples: [
      'Publicația aceasta este considerată o sursă <b>autoritativă</b> în domeniul tehnologiei.',
      'Informația <b>autoritativă</b> prezentată în raportul oficial a clarificat multe dintre îndoielile existente.',
    ],
    etymology: 'calchiere. de la termenul englez "authoritative" prin adaptare fonetică și morfologică',
  },
  {
    slug: 'monoplanetar',
    word: 'Monoplanetar(ă)',
    partOfSpeech: 'adjectiv',
    definition:
      'Specific sau restrâns la o singură planetă. Caracteristică a unei civilizații de a exista și opera exclusiv pe un singur corp ceresc.',
    examples: [
      'În scenarii viitoare în care Terra nu mai este locuibilă, conceptul de civilizație <b>monoplanetară</b> ar putea fi privită retroactiv ca o fază inițială în evoluția umanității.',
      'Deși tehnologic avansați, umanitatea este încă o civilizație <b>monoplanetară</b>, dependentă de resursele Terrei.',
    ],
    etymology: 'Combinarea termenilor "mono" (singur, unic) și "planetar"',
  },
  {
    slug: 'viata',
    word: 'Viață',
    partOfSpeech: 'substantiv',
    partOfSpeechType: 'comun',
    definition:
      'Entitate holistică constituită din totalitatea vietăților care înglobează toate formele de viață într-un scop unic și comun.',
    examples: [
      'Studiind <b>Viața</b> în sensul său holistic, putem descoperi cum diferite specii interacționează și contribuie la un scop comun al existenței.',
      'Abordarea filosofică modernă a <b>Vieții</b> ca un tot unitar pune accent pe cum contribuțiile individuale, atât umane, cât și ale altor forme de viață, se împletesc pentru a crea un ansamblu complex cu scop unic.',
    ],
    etymology: 'Extindere a cuvântului "viață" referitor la individ pentru a include o dimensiune holistică',
  },
];

export default wordList;
