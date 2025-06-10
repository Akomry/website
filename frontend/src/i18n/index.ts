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
                learntitle: 'What i learneed',
                learn1: 'How to code in Java and in Object-Oriented Programming',
                learn2: 'How to create a graphical application using JavaFX',
                learn3: 'How to communicate between apps using TCP',
                feelingstitle: 'My feelings',
                feelings: 'My favorite project of the year, again. It was fun to develop such an app, and I was thrilled to finally code in Java and/or OOP.'

            },
            sae301: {
                title: "What is SAE301?",
                body1: 'This project was dedicated to make amplitude modulation on a RZ signal. We studied the whole circuitry, made the electronic schemes and calculated every component value to make everything work. We used an NE-555 to generate an NRZ signal, then used a programmable circuit to convert it to an RZ signal, then used a Wien bridge oscillator to generate a carrier sine that we multiplied to the RZ signal to modulate it. After modulation, we made a synchronous demodulation using the generated carrier, a multiplier and a low-pass filter.',
                learntitle: 'What I learned',
                learn1: 'How an amplitude modulation works (+ demodulation)',
                learn2: 'How to make an oscillator from scratch',
                learn3: 'To brainstorm and work as a group',
                learn4: 'How a NE-555 works to generate an NRZ signal',
                feelingstitle: 'My feelings',
                feelings: ' This was complicated. We had to do a lot of calculus and brainstorming, deduce spectral densities of the various signals, without doing any circuitry. But still it was fun and interesting to learn. '
            },
            sae201: {
                title: "What is SAE201?",
                body1: 'During this project, I proceeded to the installation simulation of a microenterprise\'s networking system. For this I used tools like OpenStack to create virtual machines and networks. Then, I installed various services on CentOS Stream 8 machines. Those services includes Apache, DNSMasq, Grafana & Prometheus, and Nextcloud. ',
                body2: 'The simulated network was independant for each group. To access to our machines, we had to use virtual machines running Windows which had elastic IPs connected to our university\'s VPN.',
                learntitle: 'What I learned',
                learn1: 'Install Linux services',
                learn2: 'Create bash scripts and manage a Linux system',
                learn3: 'Debug using tools such as Wireshark or TCPDump',
                learn4: 'Manage firewall issues',
                feelingstitle: 'My feelings',
                feelings: '  It\'s the project I loved the most this year. Having an appetite for Linux systems and their manipulation, I enjoyed working on this project.'
            },
            projects: {
                yawca: 'Make your own app! game jam',
                sae302: 'Communication app',
                website: 'Current website',
                sae201: 'Network project',
                sae301: 'Electronics project'
            },



            alternance: {
                title: "My apprenticeship",
                body1: "For my second year of Networking and Telecommunications Bachelor at the 1st Technological Institute of Grenoble, I am doing an apprenticeship in the company Impactiv'. My apprenticeship is lasting for two years.",

                whois: "Who is",
                body2: "Impactiv’ is a small company with a dozen collaborators, located in La Tronche, Grenoble. We are selling a dynamic display solution for providers in community catering such as Elior, Compass or Sodexo. For example, we install screens and E-Ink ESLs (same technology as Amazon Kindle's screens) to display menus. Recently, Impactiv’ fused with Forgerz to form IDS Group, extending the catalog of software solutions we can offer to our clients.",

                what: "What is my role at Impactiv' ?",
                what1: "Today, my main mission regroups the whole production chain for the computer park. Indeed, our dynamic display solution relies on a web technology, and not every screen has an integrated web browser. To overcome this, I configure, install and maintain the whole computer park. In parallel with this, I'm desking/helping my tutor on technical support tasks.",
                what2: "Therefore, the computer park ends up enormous; the machines' inventories are hard-written in multiple documents. That is why I started a project of developing an internal company solution in order to regroup all the information in one place, therefore easing the access to precious data that can help getting more efficient in tech support tasks",
                what3: "Moreover, I maintain the Linux system image installed on our equipment configured and installed on each site: for example, I wrote a network fallback script that allows the machine to fall back to DHCP if the machine cannot ping the router (when there's a savage changement of IP scope, for example).",
                what4: "Finally, aside from all that, I develop scripts and tools, like a bulk image compression script or a barcode scanner web app.",

                learn: "What I learned",
                learn1: "Thanks to my apprenticeship, I was able to discover various tools.",
                learn2: "I improved my Git mastery (mostly GitLab), especially on branch management and on the issue system. I also learned a commit nomenclature and some rigor. Those were my first steps in the agile methods.",
                learn3: "The whole computer park maintenance and tech support allowed me to improve in error finding and debugging. I had, multiple times, to dig in Linux logs, try hotfixes, and nowadays it's easier for me to identify problems in my code or in a preexisting infrastructure.",
                learn4: "Working on the system images allowed me to develop my skills in bash an python. I learned how overlayfs works, as well as systemd units and I had my first steps containerizing using Docker. Moreover, I discovered mkosi, a tool created by the systemd team that can generate ready-to-use debian system images.",
                learn5: "The computer park maintenance made me discover tools like Mender, a tool used to deploy updates onto the machines of a computer park. Moreover, you can make inventories of said machines (like network configuration, environment variables, or simply the state of the machine) and the execution of custom scripts. By the way, I was able to experiment with OpenVPN and was able to scratch the surface of its functions.",
                learn6: "The Data Centralization app development made me learn and understand TypeScript, as well as NestJS and VueJS. I learned all this by self-taught using online docs.",
                learn7: "Finally, I used Notion, a team collaboration tool for sharing pages, docs, resources, databases, etc. I had to write docs that I could share to colleagues.",

                conclusion: "To conclude",
                conclusion1: "This experience is enriching. Despite my first tutor leaving the company two months after starting my apprenticeship, I manage to keep considerable autonomy. I learn the world of working, teambuilding, and finally can have a concrete use of the knowledge I learned at school. Learning JavaScript and TypeScript were prolific and allowed me to develop this website."


            }


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
            sae201: {
                title: "Qu'est-ce que la SAE201 ?",
                body1: "Lors de ce projet, nous avons procédé à la simulation de l'installation d'un système informatique d'une micro-entreprise. Pour ce faire, nous avons utilisés des outils comme OpenStack pour créer des machines et des réseaux virtuels. Ensuite, nous avons installés divers services sur des machines sous CentOS Stream 8. Ces services incluent httpd/Apache pour du site web, dnsmasq pour la gestion de noms de domaines et de DHCP (attribution d'addresses IP, masques et DNS), Grafana pour de l'affichage des ressources des machines et NextCloud pour du stockage à distance. ",
                body2: "Le réseau simulé était indépendant pour chaque groupe. Pour accéder aux machines de notre réseau, nous devions passer par des machines virtuels sous Windows au préalable qui avaient une adresse IP flottante liée au réseau VPN de l'UGA.\n",
                learntitle: 'Ce que j\'ai appris',
                learn1: 'Installer des services sous Linux',
                learn2: 'Créer des scripts bash et gérer un système Linux',
                learn3: 'Utiliser des outils comme Wireshark ou TCPDump',
                learn4: 'Gérer des problèmes de pare-feu',
                feelingstitle: 'Mon ressenti',
                feelings: ' C\'est la SAÉ que j\'ai préféré de l\'année. Ayant une appétence pour les systèmes Linux et leur manipulation, j\'ai beaucoup apprécié travailler sur ce projet. '
            },

            projects: {
                yawca: 'Game jam Make your own app!',
                sae302: 'Applications communicantes',
                website: 'Site actuel',
                sae201: 'Projet réseau',
                sae301: 'Projet d\'électronique'
            },

            alternance: {
                title: "Mon alternance",
                body1: "Dans le cadre de ma deuxième année de BUT Réseaux et Télécommunications à l'IUT1 de Grenoble, j'étudie en alternance dans la société Impactiv'. Cette alternance est d'une durée de deux ans.",

                whois: "Qui est",
                body2: "Impactiv’ est une petite entreprise d’une dizaine de collaborateurs située à La Tronche, Grenoble. Nous proposons une solution d’affichage dynamique pour des prestataires de la restauration d’entreprises ou de collectivités comme Elior, Compass ou Sodexo. Par exemple, nous installons des écrans et des étiquettes connectées E-Ink (même technologie que les écrans de liseuses Kindle) pour afficher les menus. Récemment, Impactiv’ a fusionné avec Forgerz pour former IGS Group, étendant les solutions logicielles proposées à nos clients.",

                what: "Quel est mon rôle chez Impactiv' ?",
                what1: "Aujourd'hui, ma mission principale consiste en toute la chaîne de mise en production du parc informatique. En effet, notre solution d'affichage dynamique repose sur une technologie web, et tous les écrans ne possèdent pas de navigateur web intégré. Pour palier à celà, je configure, installe et maintiens l'ensemble du parc informatique. En parallèle, j'assiste mon tuteur aux tâches de support technique.",
                what2: "Par conséquent, le parc informatique est volumineux; les informations d'inventaire de chaque site est noté en dur dans divers documents. Je me suis donc lancée dans le projet de faire une solution interne à l'entreprise destinée à regrouper toutes ces informations, afin de faciliter leur accès et d'affirmer leur véracité lors des tâches de support technique.",
                what3: "De plus, je maintiens l'image système installée sur les équipements configurés et installés sur site : j'ai par exemple écrit un script de garde-fou réseau, permettant de basculer sur une configuration DHCP si la machine ne peut plus accéder à la passerelle (lors d'un changement de plan d'adressage IP sauvage par exemple).",
                what4: "Enfin, à côté de tout cela, je développe des scripts et des outils, comme un script de compression d'images en lot ou une application web de scan de code-barres.",

                learn: "Ce que j'ai appris",
                learn1: "Grâce à ma formation en Alternance, j'ai pu découvrir différents outils.",
                learn2: "J'ai amélioré ma maîtrise de Git (notamment GitLab), notamment pour la gestion des branches et du système d'issues. J'ai notamment appris une nomenclature pour les commits, et une rigueur d'utilisation. Ce fut mes premiers pas dans les méthodes agiles.",
                learn3: "La maintenance du parc informatique et le support technique m'ont permis de m'améliorer dans la recherche d'erreurs et le débogage. J'ai du, à plusieurs reprises, fouiller les journaux Linux des systèmes, du essayer des réparations, et aujourd'hui j'arrive plus simplement à identifier des problèmes dans mon code ou dans une infrastructure existante.",
                learn4: "Travailler sur les images systèmes m'a permis de développer mes compétences en bash et en python. J'ai pu comprendre comment fonctionne le système d'overlayfs, les unités systemd et j'ai pu acquérir des bases de conteneurisation. De plus, j'ai découvert l'outil mkosi, outil créé par l'équipe de systemd, permettant de générer des images systèmes debian prêtes à être utilisées.",
                learn5: "La gestion de parc informatique m'a appris l'utilisation d'outils comme Mender, un outil permettant de déployer des mises à jour sur les machines d'un parc informatique. De plus, il permet d'effectuer l'inventaire des machines (comme les adresses réseau, des variables d'environnement, ou tout simplement l'état de la machine) et l'exécution de scripts personnalisés. Par ailleurs, j'ai pu expérimenter avec OpenVPN et j'ai pu effleurer une partie de son fonctionnement.",
                learn6: "L'application de centralisation de données m'a permis d'apprendre et comprendre le langage TypeScript, ainsi que le fonctionnement de NestJS et de VueJS. J'ai appris cet ensemble en autodidacte à l'aide des documentations en ligne.",
                learn7: "Enfin, j'ai eu l'occasion d'utiliser Notion, un outil de collaboration en entreprise. J'ai écrit des documentations que j'ai pu mettre à disposition à mes collègues, notamment.",

                conclusion: "En conclusion",
                conclusion1: "Cette expérience est très enrichissante. Malgré le départ de mon tuteur en début d'alternance, j'ai su garder une autonomie conséquente. J'apprends le monde du travail, à travailler en équipe et je peux enfin faire une application concrète de ce que j'ai pu apprendre en cours. L'apprentissage du JavaScript et du TypeScript ont été prolifiques et m'ont permis de rédiger ce site web."

            }
        }
    }
})

export default i18n
