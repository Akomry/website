import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: "fr",
    fallbackLocale: 'en',
    messages: {
        en: {
            nav: {
                home: "Home",
                about: "About me",
                cv: "Web Resume",
                alt: "Apprenticeship"
            },
            home: {
                welcome: "Welcome to my website !",
                projects: "Some cool projects I worked on",
                buttons: "There, have cool old-fashioned 88x31 buttons"
            },
            cv: {
                title: 'Web Resume',

                coord: 'Coordinates',
                age: '19 years old',

                formation: 'Education',
                rt: '2nd year of Networking and Telecommunications',
                iut: 'IUT1 from Grenoble - Saint-Martin-d\'Hères',
                bac: 'High school diploma',
                lycee: 'Charles-Gabriel Pravaz High School',
                spebac: 'Math, English Literature, Expert Maths, with high honours',

                lang: 'Language',
                francais: 'French : Mother tongue',
                anglais: 'English : Fluent (B2)',
                allemand: 'German : Solid foundations (A2)',

                comp: 'Skills',
                prog: 'Programming',
                devnet: 'Develop an app based on a network protocol',
                cont: 'Containerize and manage a Docker infrastructure',
                ad: 'Setup and manage an Active Directory infrastructure',
                db: 'Setup and manage a Database Management System',
                automate: 'Automate administration tasks using scripting and Ansible'
            },
            about: {
                title: 'Who am I?',

                hey: 'Heya ! Ako here.',
                me: 'I\'m a 19-year-old proud transfem and programming passionate. I develop softwares, scripts and maintain my own\n' +
                    '          server infrastructure in my free time.',
                estrogen: 'On E since 27th May, 2025',

                computerstuff: 'Computer stuff',
                arch: 'i use arch btw',
                comp1: 'Passionate about linux, its architecture, how it works, ',
                comp2: ', and plan on someday make a LFS.\n' +
                    '          I\'m self-hosting game servers, this website and several other services through systemd units and containers.\n' +
                    '          Maybe it\'s time to host a ptero install? Anyways.\n' +
                    '          I\'m coding in Java, sometimes (rarely) in JS/TS, scripting using bash.',

                musicstuff: 'Music stuff',
                music: ' I\'m a beginner vocaloid producer, using FL Studio, SynthesizerV and some random knowledge I acquired on the internet. Also been self-taught bass and guitar for 3 years now, have random skills on piano when absolutely needed. Maybe one day i\'ll commit on learning drums and saxophone. Huge Kasane Teto fan, KAFU enjoyer, Ado follower, Gloryhammer headbanger, Zutomayo everlasting fan, just to name a few. Maybe I should make a public playlist for you to check :think:',

                animestuff: 'Anime and manga stuff',
                anime: ' Steins;Gate fan, NGNL-Zero\'s my fav animated film all-time, is there more to explain? Jokes apart, i\'m not a HUGE anime watcher, but i\'m still an anime enjoyer. Working at an anime association \'round home. ',

                videogamestuff: 'Video game stuff',
                videogames: ' I\'m playing a bit too much roguelites I think-\n' +
                    'Huge fan of Mateusz Skutnik\'s works, like Submachine (Legacy), Covert Front and Slice of Sea. If you like good ol\' point and clicks, check that guy out, he\'s on those games since 2005. So yeah, I use to play a heck lot of flash games. ',

                artstuff: 'Art stuff',
                art: ' I\'m drawing on paper and on photoshop sometimes when I\'m bored (and maybe at work too). Check my instagram for more pics, but here, you can have some. ',

                telecomstuff: 'Telecom stuff',
                telecom: ' I\'m studying telecommunications, so obviously I have some knowledge and interest about it. I\'m planning on making guitar pedals (an overdrive one seems really easy to make, only take some LC filters) and maybe a modular MOOG synthesizer if I ever find motivation to build one. I know the basics about amplutide and frequency modulation, QAM, spectre analysis, fibre optics, electronics... And i hopefully plan to lean more :D ',

                linktree: 'Want a linktree? Have one.'

            },
            sae302: {
                title: "What is SAE302?",
                body1: ' Basically, I had to recreate a communication app using JavaFX. From the very basics, I had to use SceneBuilder to create our graphical environment, then create the whole controller stack using callbacks. I then wrote a TCP server and client, and incorporated them in the client app. Even though we were guided through this project, only a few managed to finish it.',
                body21: 'We also had to use git versioning, and the whole code is available to download on ',
                body22: '. I used the Jetbrains\' IDE, IntelliJ.',
                learntitle: 'What i learnt',
                learn1: 'How to code in Java and in Object-Oriented Programming',
                learn2: 'How to create a graphical application using JavaFX',
                learn3: 'How to communicate between apps using TCP',
                feelingstitle: 'My feelings',
                feelings: 'My favorite project of the year, again. It was fun to develop such an app, and I was thrilled to finally code in Java and/or OOP.'

            },
            sae301: {
                title: "What is SAE301?",
                body1: 'This project was dedicated to make amplitude modulation on a RZ signal. We studied the whole circuitry, made the electronic schemes and calculated every component value to make everything work. We used an NE-555 to generate an NRZ signal, then used a programmable circuit to convert it to an RZ signal, then used a Wien bridge oscillator to generate a carrier sine that we multiplied to the RZ signal to modulate it. After modulation, we made a synchronous demodulation using the generated carrier, a multiplier and a low-pass filter.',
                learntitle: 'What I learnt',
                learn1: 'How an amplitude modulation works (+ demodulation)',
                learn2: 'How to make an oscillator from scratch',
                learn3: 'To brainstorm and work as a group',
                learn4: 'How a NE-555 works to generate an NRZ signal',
                feelingstitle: 'My feelings',
                feelings: ' This was complicated. We had to do a lot of calculus and brainstorming, deduce spectral densities of the various signals, without doing any circuitry. But still it was fun and interesting to learn. '
            },



        },
        fr: {
            nav: {
                home: "Accueil",
                about: "A propos de moi",
                cv: "Web CV",
                alt: "Alternance"
            },
            home: {
                welcome: "Bienvenue sur mon site web !",
                projects: "Quelques projects sympathiques sur lesquels j'ai travaillé",
                buttons: "Tiens, quelques boutons 88x31 à l'ancienne"
            },
            cv: {
                title: 'Web CV',

                coord: 'Coordonées',
                age: '19 ans',

                formation: 'Formation',
                rt: '2e année de BUT Réseaux et Télécommunications',
                iut: 'IUT1 de Grenoble - Saint-Martin-d\'Hères',
                bac: 'Baccalauréat Général',
                lycee: 'Lycée Charles-Gabriel Pravaz',
                spebac: 'Maths, LLCER, Maths expertes avec mention bien',

                lang: 'Langues',
                francais: 'Français : Langue maternelle',
                anglais: 'Anglais : Parle couramment (B2)',
                allemand: 'Allemand : Bases solides (A2)',

                comp: 'Compétences',
                prog: 'Programmation',
                devnet: 'Développer une application basée sur un protocole réseau',
                cont: 'Conteneuriser et maintenir une infrastructure Docker',
                ad: 'Installer et configurer un serveur Active Directory',
                db: 'Mettre en place et maintenir une SGBD',
                automate: 'Automatiser les tâches d\'administration avec du scripting et Ansible',
            },
            about: {
                title: 'Qui suis-je?',

                hey: 'Salut ! C\'est Ako.',
                me: 'Je suis une transfem (et fière de l\'être) de 19 ans passionée de programmation. Je développe des logiciels, des scripts et maintiens ma propre\n' +
                    'infrastructure serveur dans mon temps libre.',
                estrogen: 'Sous estrogène depuis le 27 mai 2025',

                computerstuff: 'Informatique',
                arch: 'j\'utilise arch btw',
                comp1: 'Passionnée de Linux, son architecture, comment ça fonctionne, ',
                comp2: ', et je prévois de faire un LFS un de ces jours.\n' +
                    '          J\'héberge en local des serveurs de jeux, ce site et d\'autres services avec des unités systemd et des conteneurs.\n' +
                    '          Peut être serait-il temps d\'installer une instance ptero? Bref.\n' +
                    '          Je code en Java, parfois (raremenet) en JS/TS, et je fais du scripting bash.',

                musicstuff: 'Musique',
                music: ' Je suis une productrice vocaloid débutante, utilisant FL Studio, SynthesizerV et des connaissances aléatoires que j\'ai pu acquérir sur internet. J\'apprends aussi depuis 3 ans la guitare et la basse en autodidacte et j\'ai quelques compétences basiques de piano pour si j\'ai vraiment besoin. Peut être qu\'un jour je me lancerai enfin à la batterie et au saxophone. Grande fan de Kasane Teto, consommatrice de KAFU, Fan d\'Ado, Gloryhammer headbanger, Fan inconditionnelle de Zutomayo, pour en citer quelques uns. Peut être que je vous ferai une playlist publique pour vous faire écouter tout ça :think:',

                animestuff: 'Animes et manga',
                anime: 'Fan de Steins;Gate, NGNL-Zero est mon film d\'animation préféré de tous les temps, que dire de plus ? Blague à part, je ne suis pas une ENORME consommatrice d\'animés, mais j\'apprécie en consommer. Je travaille dans une asso d\'animés par chez moi. ',

                videogamestuff: 'Jeux vidéos',
                videogames: ' Je joue un peu trop aux roguelikes je crois-' +
                    'Grande fan des oeuvres de Mateusz Skutnik, comme Submachine (Legacy), Covert Front et Slice of Sea. Si vous aimez les bon vieux point&clicks, allez voir son travail, il planche sur ces jeux depuis 2015. Donc euh ouais, j\'ai grandi avec les jeux flash. ',

                artstuff: 'Art',
                art: 'Je dessine sur papier et parfois sur photoshop quand je m\'ennuie (et peut être au travail aussi). Checkez mon instagram quelques photos... m\'enfin quoique, vous pouvez en avoir quelques unes ici.',

                telecomstuff: 'Télécom',
                telecom: 'J\'étudie les télécommunications, donc évidemment que j\'en ai des connaissances et de l\'intérêt. Je prévoie de faire des pédales de guitares (une pédale d\'overdrive ça a l\'air tellement simple à faire, vraiment juste des filtres LC) et peut être un synthétiseur modulaire MOOD si je trouve un jour la motivation d\'en faire un. Je connais les bases sur les modulations d\'amplitude, de fréquence, les MAQ, les analyses de spectre, la fibre optique, l\'électronique...Et j\'espère pouvoir en apprendre plus :D ',

                linktree: 'Tu veux un linktree ? Tiens, cadeau.'
            },
            sae302: {
                title: "Qu'est-ce que la SAE302?",
                body1: ' Basiquement, j\'ai du recréer une application de communication en utilisant JavaFX. À partir des bases, j\'ai utilisé SceneBuilder pour créer l\'environnement graphique (FXML), puis j\'ai écrit les callbacks du contrôleur. J\'ai ensuite développé le serveur et le client TCP, que j\'ai incorporé dans l\'application. Même si on a été guidés dans le projet, seuls quelques uns ont réussi à le finir.',
                body21: 'On a aussi utilisé du versionnement Git, et le code est disponible au téléchargement sur ',
                body22: '. J\'ai utilisé l\'IDE de Jetbrains, IntelliJ.',
                learntitle: 'Ce que j\'ai appris',
                learn1: 'Comment coder en Java et en Programmation Orientée Objet',
                learn2: 'Comment créer une application graphique avec JavaFX',
                learn3: 'Comment communiquer entre deux applications via TCP',
                feelingstitle: 'Mon ressenti',
                feelings: 'Encore mon projet préféré de l\'année. C\'était fun de développer ce genre d\'application, et j\'étais excitée de pouvoir coder en Java/POO.'
            },

            sae301: {
                title: "Qu'est-ce que la SAE301?",
                body1: "Ce projet était dédié à la mise en pratique d'une modulation d'amplitude sur un signal RZ. Nous avons étudié le circuit dans un bureau d'étude, établi des schémas électroniques et calculé la valeur de tous les composants pour que tout fonctionne. Nous avons utilisé un NE-555 pour générer un signal NRZ, puis l'avons envoyé dans une maquette programmable pour le transformer en RZ, puis avons utilisé un oscillateur à pont de Wien pour générer une sinusoïde porteuse qu'on a multiplié au signal RZ pour le moduler. Après cette modulation, nous avons mis en place une démodulation synchrone en utilisant la porteuse générée, un multiplieur et un filtre passe-bas.",
                learntitle: 'Ce que j\'ai appris',
                learn1: 'Comment une modulation d\'amplitude fonctionne (+ sa démodulation)',
                learn2: 'Comment créer un oscillateur à partir de rien',
                learn3: 'Comment brainstormer et faire un bureau d\'études en groupe',
                learn4: 'Comment fonctionne un NE-555 pour générer un signal NRZ',
                feelingstitle: 'Mon ressenti',
                feelings: "C'était compliqué. On a dû faire beaucoup de calculs et de brainstorming, déduire des densités spectrales de puissance des différents signaux sans faire aucun montage. Mais c'était tout de même fun et intéressant à apprendre."
            },

        }
    }
})

export default i18n
