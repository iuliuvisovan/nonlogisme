const wordList = [
  {
    word: 'Nonlogism',
    definition: 'Concept utilizat pentru a descrie un cuvânt care nu există într-o limbă, dar ar trebui.',
    examples: [
      'Șalot - antonimul cuvântului adânc',
      'Suez - originar din/aparținând statului SUA',
      'Cuvântul “monoplanetar” este un nonlogism, deoarece nu există în limba română dar ar trebui.',
    ],
    etymology: 'prin sudare (non + logism)',
  },
  {
    word: 'Morfosinteză',
    definition: 'Proces de creare a cuvintelor noi într-o limbă prin combinarea și manipularea formelor morfologice existente.',
    examples: ['Morfosinteza a fost folosită pentru a crea cuvântul "frăsori" prin combinarea cuvintelor "frate" și "soră".'],
    etymology: 'Combinarea cuvintelor "morfologie" și "sinteză".',
  },
  {
    word: 'Fiut',
    definition: 'Formă de participiu a verbului “a fi”. Poate fi folosit în același mod în care sunt folosite participiile altor verbe.',
    examples: [
      'Fiutul de student la medicină implică multe ore de studiu și practică.',
      'Fiutul de președinte este o responsabilitate mare.',
    ],
    etymology: 'morfosinteză',
  },
  {
    word: 'Acunci',
    definition: 'Adverbul “acum”, doar că relativ la “atunci”.',
    examples: [
      'Era anul 2019, iar România celebra revoluția de acunci 30 ani.',
      'M-a întrebat Adrian miercurea trecută dacă vreau să vin la fotbal dar am refuzat, deoarece eu tocmai jucasem acunci 2 zile.',
    ],
    etymology: 'prin fuziune “acum” + “atunci”',
  },
  {
    word: 'Hăt',
    definition: 'Generalizarea regionalismului “hăt”, echivalentul cuvântului englezesc “away”.',
    examples: ['Du-te hăt! (“Go away!”)'],
    etymology: 'generalizare intralinguală',
  },
  {
    word: 'Ecoic(ă)',
    definition: 'Cu ecou, despre o cameră, încăpere, container, etc.',
    examples: ['Camera aceasta este prea ecoică.'],
    etymology: 'derivare cu sufix (ecou + ic)',
  },
  {
    word: 'Șalot(ă)',
    definition: 'Care se caracterizează prin adâncime mică sau lipsa adâncimii. Antonimul cuvântului “adânc”.',
    examples: [
      'Această fântână este șalotă.',
      'Această piscină are o zonă foarte adâncă și o zonă mai șalotă, unde copiii pot înota în siguranță.',
    ],
    etymology: 'inventare',
  },
  {
    word: 'Suez(ă)',
    definition: 'Originar din/aparținând statului SUA.',
    examples: ['Acest om este suez.'],
    etymology: 'derivare cu sufix (SUA + ez)',
  },
  {
    word: 'Verinat(ă)',
    definition: 'Soțul sau soția unui verișor. Verișor + cumnat.',
    examples: [
      'La nunta surorii mele am avut ocazia să-l întâlnesc pentru prima dată pe verinatul meu, soțul verișoarei mele.',
      'Andrei, unde-i unchiu-to Adi? -Nu mi-e unchi! E soțul verișoarei mele: mi-e verinat!',
    ],
    etymology: 'sudare (verișor + cumnat)',
  },
  {
    word: 'Milant(ă)',
    definition: 'Ceva ce-ți creează sentimentul de milă.',
    examples: [
      'Am văzut articolul… nu știu ce să zic, nu mi s-a părut amuzant deloc. Mai degrabă milant, când am văzut copii aceia africani întinzând mâna spre cameraman.',
    ],
    etymology: 'derivare cu sufix (milă + ant)',
  },
  {
    word: 'Pătrisc',
    definition: 'Suprafața poligonală de formă pătratică. Analog cu discul pentru cerc.',
    examples: ['George, care e aria acestui pătrat? -Pătratul nu are arie. Vrei să spui al acestui pătrisc?'],
    etymology: 'morfosinteză / pătrat + isc',
  },
  {
    word: 'Trisc',
    definition: 'Suprafața poligonală de formă triunghică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Drisc',
    definition: 'Suprafața poligonală de formă dreptunghiulară. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Rombisc',
    definition: 'Suprafața poligonală de formă rombică. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Trapisc',
    definition: 'Suprafața poligonală de formă trapezoidală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Pentisc',
    definition: 'Suprafața poligonală de formă pentagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Hexisc',
    definition: 'Suprafața poligonală de formă hexagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Heptisc',
    definition: 'Suprafața poligonală de formă heptagonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Octisc',
    definition: 'Suprafața poligonală de formă octogonală. Analog cu discul pentru cerc.',
    examples: [],
    etymology: 'inventare',
  },
  {
    word: 'Făcubil(ă)',
    definition: 'Ceva ce poate fi făcut.',
    examples: [
      'Această lucrare este făcubilă.',
      'Nu pot să înțeleg cum nu reușește să parcheze în acel spațiu. E cel mai făcubil lucru posibil.',
    ],
    etymology: 'prin sudare (a face + abil)',
  },
  {
    word: 'Chemabil(ă)',
    definition: 'Ceva/cineva care poate fi chemat.',
    examples: ['Nu știu pe cine să chem la fotbal… ce zici de Ștefan, joacă bine? -Da, joacă ok, e chemabil.'],
    etymology: 'prin sudare (a chema + abil)',
  },
  {
    word: 'Pusabil(ă)',
    definition: 'Ceva ce poate fi pus.',
    examples: [
      'Am cumpărat o nouă canapea și am fost foarte bucuros să constat că este pusabilă în orice cameră din casă, datorită dimensiunilor și designului său versatile.',
      'Ce zici de melodia asta? Crezi că e pusabilă ca și muzică de fundal diseară?',
    ],
    etymology: 'prin sudare (a pune + abil)',
  },
  {
    word: 'Divers(ă)',
    definition: 'Perfectul compus / participiul verbului “a diverge”.',
    examples: [
      'Am încercat să aplicăm planul original, dar proiectul a divers de la direcția inițială.',
      'Când am început să discutăm despre politică, discuția a divers într-un amalgam de schimb de idei.',
    ],
    etymology: 'prin conjugare (diverge)',
  },
  {
    word: 'Luni, Marți, Miercuri, Joi, Vineri, Sâmbătă, Duminică',
    definition: 'Numele zilelor săptămânii, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, Marți spuneați că mergeți la munte? -Salut, cred că până la urmă vom merge doar Miercuri.'],
    etymology: 'numele zilelor săptămânii, dar cu literă mare',
  },
  {
    word: 'Ianuarie, Februarie, Martie, Aprilie, Mai, Iunie, Iulie, August, Septembrie, Octombrie, Noiembrie, Decembrie',
    definition: 'Numele lunilor anului, dar cu literă mare, fiindcă sunt nume.',
    examples: ['Salut Andrei, în Martie e ziua ta? -Salut! Nu, ziua mea e în Aprilie.'],
    etymology: 'numele lunilor anului, dar cu literă mare',
  },
  {
    word: 'Îndoibil(ă)',
    definition: 'Ceva ce poate fi îndoit (cu ușurință).',
    examples: ['Se vede că acest telefon e făcut din aluminiu, e mult mai îndoibil decât varianta din oțel.'],
    etymology: 'prin sudare (a îndoi + abil)',
  },
  {
    word: 'Completate',
    definition: 'Generalizare/substantivare a adjectivului “complet”, cu scopul de face referire la diferite grade ale acestuia.',
    examples: ['Din cele 7 sectoare de autostradă, doar 2 au fost finalizate până acum, restul fiind în diferite grade de completate.'],
    etymology: 'prin abstractizare/generalizare (complet + ate)',
  },
  {
    word: 'Frăsor',
    definition: 'Termen neutru de gen care se referă la un frate sau o soră.',
    examples: ['Am în total 5 frăsori: 2 frați și 3 surori.', 'Ea se înțelege foarte bine cu frăsorii ei.'],
    etymology: 'Amestec între "frate" și "soră".',
  },
  {
    word: 'Fil',
    definition: 'Termen neutru de gen care se referă la un fiu sau o fiică.',
    examples: ['Am doi fili: un fiu și o fiică.', 'Weekendul acesta voi avea grijă de 3 copii dar doar 2 dintre ei îmi sunt fili.'],
    etymology: 'inventare',
  },
  {
    word: 'Adulție',
    definition: 'Partea din viața unui om în care este adult.',
    examples: ['Oamenii au de obicei mai mult timp la bătrânețe decât la adulție.', 'După copilărie și adolescență, urmează adulția.'],
    etymology: 'prin sufixarea cuvântului “adult”',
  },
  {
    word: 'Ai doia',
    definition: 'Numeral ordinal plural pentru numărul 2. Pluralul numeralului ordinal “al doilea”.',
    examples: ['Ei sunt primii, noi suntem ai doia.'],
    etymology: 'prin pluralizarea numeralului ordinal “al doilea”',
  },
  {
    word: 'Ai treia',
    definition: 'Numeral ordinal plural pentru numărul 3. Pluralul numeralului ordinal “al treilea”.',
    examples: ['Ei sunt primii, ceilalti sunt ai doia, noi n-am reușit sa ajungem decât ai treia.'],
    etymology: 'prin pluralizarea numeralului ordinal “al treilea”',
  },
  {
    word: 'Ai patruia',
    definition: 'Numeral ordinal plural pentru numărul 4. Pluralul numeralului ordinal “al patrulea”.',
    examples: [],
    etymology: 'prin pluralizarea numeralului ordinal “al patrulea”',
  },
  {
    word: 'Ai cincia',
    definition: 'Numeral ordinal plural pentru numărul 5. Pluralul numeralului ordinal “al cincilea”.',
    examples: [],
    etymology: 'prin pluralizarea numeralului ordinal “al cincilea”',
  },
  {
    word: 'Mânesc/Mânească',
    definition: 'Cu referire la mână/mâini.',
    examples: ['Și-a luxat mâna alaltăieri, și acum nu poate face niciun fel de efort mânesc.'],
    etymology: 'prin sufixarea substantivului “mână”',
  },
  {
    word: 'Picioresc/Piciorească',
    definition: 'Cu referire la picior/picioare.',
    examples: ['Și-a luxat piciorul alaltăieri, și acum nu poate face niciun fel de efort picioresc.'],
    etymology: 'prin sufixarea substantivului “picior”',
  },
  {
    word: 'Alui/alei',
    definition: 'Pronume posesivo-posesiv.',
    examples: [
      'Jantele mașinii tale sunt mai curate decât alei mele.',
      'De Crăciun, Ionuț i-a cumpărat o curea tatălui său, iar eu i-am luat o cămașă alui meu.',
    ],
    etymology: 'prin extinderea pronumelor posesive “al (meu)” / “a (mea)”',
  },
  {
    word: 'Dabil(ă)',
    definition: 'Ceva ce poate fi dat.',
    examples: [
      'Eu returnez produsele într-o stare cât mai bună, ca să fie dabile la următorii clienți.',
      'Am decis să donez cărțile mele vechi către biblioteca locală, deoarece majoritatea sunt deja citite, deci chiar dabile.',
    ],
    etymology: 'prin sudare (a da + abil)',
  },
  {
    word: 'Autoritativ(ă)',
    definition:
      'Informație sau sursă de informație care are o încredere și recunoaștere largă, fiind adesea considerată definitivă sau concludentă.',
    examples: [
      'Publicația aceasta este considerată o sursă autoritativă în domeniul tehnologiei.',
      'Informația autoritativă prezentată în raportul oficial a clarificat multe dintre îndoielile existente.',
    ],
    etymology: 'derivat de la termenul englez "authoritative" prin adaptare fonetică și morfologică',
  },
  {
    word: 'Monoplanetar(ă)',
    definition:
      'Specific sau restrâns la o singură planetă. Caracteristică a unei civilizații de a exista și opera exclusiv pe un singur corp ceresc.',
    examples: [
      'În scenarii viitoare în care Terra nu mai este locuibilă, conceptul de civilizație monoplanetară ar putea fi privită retroactiv ca o fază inițială în evoluția umanității.',
      'Deși tehnologic avansați, umanitatea este încă o civilizație monoplanetară, dependentă de resursele Terrei.',
    ],
    etymology: 'Combinarea termenilor "mono" (singur, unic) și "planetar"',
  },
  {
    word: 'Viață',
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
