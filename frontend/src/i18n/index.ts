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
            }
        }
    }
})

export default i18n
