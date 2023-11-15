const wordList = [
  {
    slug: 'nonlogism',
    word: 'Nonlogism',
    partOfSpeech: 'substantiv comun',
    definition: 'Cuvânt pentru un concept care nu există într-o limbă, dar care ar trebui să existe conform realității lingvistice.',
    examples: [
      'Crearea de nonlogisme este un proces natural, care asigură limbii flexibilitatea necesară pentru a exprima noi idei și concepte.',
      'Cuvântul „monoplanetar” este un nonlogism deoarece nu există în limba română, dar ar trebui.',
    ],
    etymology: 'prin sudare (non + logism)',
  },
  {
    slug: 'morfosinteza',
    word: 'Morfosinteză',
    partOfSpeech: 'substantiv comun',
    definition: 'Proces de creare a cuvintelor noi într-o limbă prin combinarea și manipularea formelor morfologice existente.',
    examples: ['Morfosinteza a fost folosită pentru a crea cuvântul "frăsori" prin combinarea cuvintelor "frate" și "soră".'],
    etymology: 'Combinarea cuvintelor "morfologie" și "sinteză".',
  },
  {
    slug: 'fiut',
    word: 'Fiut',
    partOfSpeech: 'substantiv comun',
    definition: 'Formă de participiu a verbului “a fi”. Poate fi folosit în același mod în care sunt folosite participiile altor verbe.',
    examples: [
      'Fiutul de student la medicină implică multe ore de studiu și practică.',
      'Fiutul de președinte este o responsabilitate mare.',
    ],
    etymology: 'morfosinteză',
  },
  {
    slug: 'acunci',
    word: 'Acunci',
    partOfSpeech: 'adverb',
    definition: 'Adverbul “acum”, doar că relativ la “atunci”.',
    examples: [
      'Era anul 2019, iar România celebra revoluția de acunci 30 ani.',
      'M-a întrebat Adrian miercurea trecută dacă vreau să vin la fotbal dar am refuzat, deoarece eu tocmai jucasem acunci 2 zile.',
    ],
    etymology: 'prin fuziune “acum” + “atunci”',
  },
  {
    slug: 'hat',
    word: 'Hăt',
    partOfSpeech: 'interjecție',
    definition: 'Oriunde dar nu aici. Generalizarea regionalismului “hăt”, echivalentul cuvântului englezesc “away”.',
    examples: ['Du-te hăt! (“Go away!”)'],
    etymology: 'generalizare intralinguală',
  },
  {
    slug: 'ecoic',
    word: 'Ecoic(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Cu ecou (despre o cameră, încăpere, container, etc.)',
    examples: ['Camera aceasta este prea ecoică.'],
    etymology: 'derivare cu sufix (ecou + ic)',
  },
  {
    slug: 'salot',
    word: 'Șalot(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Care se caracterizează prin adâncime mică sau lipsa adâncimii. Antonimul cuvântului “adânc”.',
    examples: [
      'Această fântână este șalotă.',
      'Această piscină are o zonă foarte adâncă și o zonă mai șalotă, unde copiii pot înota în siguranță.',
    ],
    etymology: 'inventare',
  },
  {
    slug: 'suez',
    word: 'Suez(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Originar din/aparținând statului SUA.',
    examples: ['La fel cum un om din Franța este francez, un om din SUA este suez.', 'Acest om este suez, din SUA.'],
    etymology: 'derivare cu sufix (SUA + ez)',
  },
  {
    slug: 'verinat',
    word: 'Verinat(ă)',
    partOfSpeech: 'substantiv comun',
    definition: 'Soțul sau soția unui verișor. Verișor + cumnat.',
    examples: [
      'La nunta surorii mele am avut ocazia să-l întâlnesc pentru prima dată pe verinatul meu, soțul verișoarei mele.',
      'Andrei, unde-i unchiu-to Adi? -Nu mi-e unchi! E soțul verișoarei mele: mi-e verinat!',
    ],
    etymology: 'sudare (verișor + cumnat)',
  },
  {
    slug: 'milant',
    word: 'Milant(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce-ți creează sentimentul de milă.',
    examples: [
      'Am văzut articolul… nu știu ce să zic, nu mi s-a părut amuzant deloc. Mai degrabă milant, când am văzut copii aceia africani întinzând mâna spre cameraman.',
    ],
    etymology: 'derivare cu sufix (milă + ant)',
  },
  {
    slug: 'patrisc',
    word: 'Pătrisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă pătratică. Analog cu discul pentru cerc.',
    examples: ['George, care e aria acestui pătrat? -Pătratul nu are arie. Vrei să spui al acestui pătrisc?'],
    etymology: 'morfosinteză / pătrat + isc',
  },
  {
    slug: 'trisc',
    word: 'Trisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă triunghică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'drisc',
    word: 'Drisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă dreptunghiulară. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'rombisc',
    word: 'Rombisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă rombică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'trapisc',
    word: 'Trapisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă trapezoidală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'pentisc',
    word: 'Pentisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă pentagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'hexisc',
    word: 'Hexisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă hexagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'heptisc',
    word: 'Heptisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă heptagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'octisc',
    word: 'Octisc',
    partOfSpeech: 'substantiv comun',
    definition: 'Suprafața poligonală de formă octogonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    slug: 'facubil',
    word: 'Făcubil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi făcut.',
    examples: [
      'Această lucrare este făcubilă.',
      'Nu pot să înțeleg cum nu reușește să parcheze în acel spațiu. E cel mai făcubil lucru posibil.',
    ],
    etymology: 'prin sudare (a face + abil)',
  },
  {
    slug: 'chemabil',
    word: 'Chemabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva/cineva care poate fi chemat.',
    examples: ['Nu știu pe cine să chem la fotbal… ce zici de Ștefan, joacă bine? -Da, joacă ok, e chemabil.'],
    etymology: 'prin sudare (a chema + abil)',
  },
  {
    slug: 'pusabil',
    word: 'Pusabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi pus.',
    examples: [
      'Am cumpărat o nouă canapea și am fost foarte bucuros să constat că este pusabilă în orice cameră din casă, datorită dimensiunilor și designului său versatile.',
      'Ce zici de melodia asta? Crezi că e pusabilă ca și muzică de fundal diseară?',
    ],
    etymology: 'prin sudare (a pune + abil)',
  },
  {
    slug: 'divers',
    word: 'Divers(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Perfectul compus / participiul verbului “a diverge”.',
    examples: [
      'Am încercat să aplicăm planul original, dar proiectul a divers de la direcția inițială.',
      'Când am început să discutăm despre politică, discuția a divers într-un amalgam de schimb de idei.',
    ],
    etymology: 'prin conjugare (diverge)',
  },
  {
    slug: 'luni-marti-miercuri-joi-vineri-sambata-duminica',
    word: 'Luni, Marți, Miercuri, Joi, Vineri, Sâmbătă, Duminică',
    partOfSpeech: 'substantiv comun',
    definition: 'Numele zilelor săptămânii, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, Marți spuneați că mergeți la munte? -Salut, cred că până la urmă vom merge doar Miercuri.'],
    etymology: 'numele zilelor săptămânii, dar cu literă mare',
  },
  {
    slug: 'ianuarie-februarie-martie-aprilie-mai-iunie-iulie-august-septembrie-octombrie-noiembrie-decembrie',
    word: 'Ianuarie, Februarie, Martie, Aprilie, Mai, Iunie, Iulie, August, Septembrie, Octombrie, Noiembrie, Decembrie',
    partOfSpeech: 'substantiv comun',
    definition: 'Numele lunilor anului, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, în Martie e ziua ta? -Salut! Nu, ziua mea e în Aprilie.'],
    etymology: 'numele lunilor anului, dar cu literă mare',
  },
  {
    slug: 'indoibil',
    word: 'Îndoibil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi îndoit (cu ușurință).',
    examples: ['Se vede că acest telefon e făcut din aluminiu, e mult mai îndoibil decât varianta din oțel.'],
    etymology: 'prin sudare (a îndoi + abil)',
  },
  {
    slug: 'completate',
    word: 'Completate',
    partOfSpeech: 'substantiv comun',
    definition: 'Generalizare/substantivare a adjectivului “complet”, cu scopul de face referire la diferite grade ale acestuia.',
    examples: ['Din cele 7 sectoare de autostradă, doar 2 au fost finalizate până acum, restul fiind în diferite grade de completate.'],
    etymology: 'prin abstractizare/generalizare (complet + ate)',
  },
  {
    slug: 'frasor',
    word: 'Frăsor',
    partOfSpeech: 'substantiv comun',
    definition: 'Termen neutru de gen care se referă la un frate sau o soră.',
    examples: ['Am în total 5 frăsori: 2 frați și 3 surori.', 'Ea se înțelege foarte bine cu frăsorii ei.'],
    etymology: 'Amestec între "frate" și "soră".',
  },
  {
    slug: 'fil',
    word: 'Fil',
    partOfSpeech: 'substantiv comun',
    definition: 'Termen neutru de gen care se referă la un fiu sau o fiică.',
    examples: ['Am doi fili: un fiu și o fiică.', 'Weekendul acesta voi avea grijă de 3 copii dar doar 2 dintre ei îmi sunt fili.'],
    etymology: 'inventare',
  },
  {
    slug: 'adultie',
    word: 'Adulție',
    partOfSpeech: 'substantiv comun',
    definition: 'Partea din viața unui om în care este adult.',
    examples: ['Oamenii au de obicei mai mult timp la bătrânețe decât la adulție.', 'După copilărie și adolescență, urmează adulția.'],
    etymology: 'prin sufixarea cuvântului “adult”',
  },
  {
    slug: 'ai-doia',
    word: 'Ai doia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 2. Pluralul numeralului ordinal “al doilea”.',
    examples: ['Ei sunt primii, noi suntem ai doia.'],
    etymology: 'prin pluralizarea numeralului ordinal “al doilea”',
  },
  {
    slug: 'ai-treia',
    word: 'Ai treia',
    partOfSpeech: 'numeral',
    definition: 'Numeral ordinal plural pentru numărul 3. Pluralul numeralului ordinal “al treilea”.',
    examples: ['Ei sunt primii, ceilalti sunt ai doia, noi n-am reușit sa ajungem decât ai treia.'],
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
    examples: ['Și-a luxat mâna alaltăieri, și acum nu poate face niciun fel de efort mânesc.'],
    etymology: 'prin sufixarea substantivului “mână”',
  },
  {
    slug: 'picioresc-picioreasca',
    word: 'Picioresc/Piciorească',
    partOfSpeech: 'adjectiv',
    definition: 'Cu referire la picior/picioare.',
    examples: ['Și-a luxat piciorul alaltăieri, și acum nu poate face niciun fel de efort picioresc.'],
    etymology: 'prin sufixarea substantivului “picior”',
  },
  {
    slug: 'alui-alei',
    word: 'Alui/alei',
    partOfSpeech: 'pronume',
    definition: 'Pronume posesivo-posesiv.',
    examples: [
      'Jantele mașinii tale sunt mai curate decât alei mele.',
      'De Crăciun, Ionuț i-a cumpărat o curea tatălui său, iar eu i-am luat o cămașă alui meu.',
    ],
    etymology: 'prin extinderea pronumelor posesive “al (meu)” / “a (mea)”',
  },
  {
    slug: 'dabil',
    word: 'Dabil(ă)',
    partOfSpeech: 'adjectiv',
    definition: 'Ceva ce poate fi dat.',
    examples: [
      'Eu returnez produsele într-o stare cât mai bună, ca să fie dabile la următorii clienți.',
      'Am decis să donez cărțile mele vechi către biblioteca locală, deoarece majoritatea sunt deja citite, deci chiar dabile.',
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
      'Publicația aceasta este considerată o sursă autoritativă în domeniul tehnologiei.',
      'Informația autoritativă prezentată în raportul oficial a clarificat multe dintre îndoielile existente.',
    ],
    etymology: 'derivat de la termenul englez "authoritative" prin adaptare fonetică și morfologică',
  },
  {
    slug: 'monoplanetar',
    word: 'Monoplanetar(ă)',
    partOfSpeech: 'adjectiv',
    definition:
      'Specific sau restrâns la o singură planetă. Caracteristică a unei civilizații de a exista și opera exclusiv pe un singur corp ceresc.',
    examples: [
      'În scenarii viitoare în care Terra nu mai este locuibilă, conceptul de civilizație monoplanetară ar putea fi privită retroactiv ca o fază inițială în evoluția umanității.',
      'Deși tehnologic avansați, umanitatea este încă o civilizație monoplanetară, dependentă de resursele Terrei.',
    ],
    etymology: 'Combinarea termenilor "mono" (singur, unic) și "planetar"',
  },
  {
    slug: 'viata',
    word: 'Viață',
    partOfSpeech: 'substantiv comun',
    definition:
      'Entitate holistică constituită din totalitatea vietăților care înglobează toate formele de viață într-un scop unic și comun.',
    examples: [
      'Studiind Viața în sensul său holistic, putem descoperi cum diferite specii interacționează și contribuie la un scop comun al existenței.',
      'Abordarea filosofică modernă a Vieții ca un tot unitar pune accent pe cum contribuțiile individuale, atât umane, cât și ale altor forme de viață, se împletesc pentru a crea un ansamblu complex cu scop unic.',
    ],
    etymology: 'Extindere a cuvântului "viață" referitor la individ pentru a include o dimensiune holistică',
  },
];

export default wordList;
