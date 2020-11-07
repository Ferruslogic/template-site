let language = String;
var browserDetails = [];
var locales = "";
var res = navigator.language.split("-");
language = res[0].toLowerCase();
browserDetails.language = language;

AppSetting.languages = {
    "en": {
        "appName": "FerrusLogic S.A",
        "title": "FerrusLogic S.A - Software Development.",
        "homeTitle": "Welcome!",
        "homeSubTitle": "Here you will find help to learn how to create <br>  your multi platform apps with",
        "menuItems": [{
                "label": 'Home',
                "path": '/'
            },
            {
                "label": 'Blog',
                "path": '/blog'
            },
            {
                "label": 'Projects',
                "path": '/software'
            },
            {
                "label": 'About',
                "path": '/about'
            },
            {
                "label": 'Contact',
                "path": '/contact'
            },
        ],
        "readMore": "Read more.",
        "darkModeOn": "Dark Mode On",
        "darkModeOff": "Dark Mode Off",
        "postNotFound": "<h1> The publication could not be accessed: </h1><br><ul><li>Check your connection.</li><li> Try switching languages.</li><li>If you still cannot access this publication, please report it to support @ferruslogic.com.</li></ul>",
        "toFollowIn": 'FerrusLogic in',
        "homePageName": "Home",
        "projectsPageName": "Projects",
        "contactPageName": "Contact Us",
        "aboutPageName": "About",
        "blogPageName": "Blog",
        "textContact": "<p class=\"pa-2 d-flex display-1\">Let’s Start a Conversation</p><p class=\"pa-2 d-flex\">Use the form below to drop us an e-mail.<br>Your email address will not be disclosed or shared with third parties.</p>",
        "textAbout": "<p>Once upon a time there were a couple of children who, like all children, dreamed that they had superpowers. Those kids were growing up and their dreams of having super powers to help other people too. But wait, we don't need superpowers to help other people. We just need to have a good heart and the desire to do it. What better way to help other people than by being teachers, so that they can help others to have the tools to fight for their dreams. </p><p> Having achieved this goal and after several years dedicated to teaching at different educational levels. One day they discovered to their amazement that they had developed the closest thing to a superpower. Well, they could talk to computers and order them to do cool things that helped people in their day-to-day lives. But knowledge is worthless if it is not shared. So they decided to create this blog to help others achieve their dreams and be their own superheroes.</p>"
    },
    "es": {
        "appName": "FerrusLogic S.A",
        "title": "FerrusLogic S.A - Desarrollo de Software.",
        "homeTitle": "Bienvenidos!",
        "homeSubTitle": "Aquí encontrará ayuda para aprender a crear <br> aplicaciones multi-plataforma con",
        "menuItems": [{
                "label": 'Inicio',
                "path": '/'
            },
            {
                "label": 'Blog',
                "path": '/blog'
            },
            {
                "label": 'Proyectos',
                "path": '/software'
            },
            {
                "label": 'Acerca',
                "path": '/about'
            },
            {
                "label": 'Contacto',
                "path": '/contact'
            },
        ],
        "readMore": "Leer más.",
        "darkModeOn": "Activar modo oscuro",
        "darkModeOff": "Desactivar modo oscuro",
        "postNotFound": " <h1>No se pudo acceder a la publicación:</h1><br><ul><li>Compruebe su conexión.</li><li>Pruebe cambiar de idioma.</li><li>Si siguen sin poder acceder a esta publicación repórtelo a soporte@ferruslogic.com.</li></ul>",
        "toFollowIn": 'FerrusLogic en',
        "homePageName": "Inicio",
        "projectsPageName": "Proyectos",
        "contactPageName": "Contáctenos",
        "aboutPageName": "¿Quiénes somos?",
        "blogPageName": "Blog",
        "textContact": "<p class = \"pa-2 d-flex display-1 \"> Comencemos una conversación </p> <p class =\" pa-2 d-flex \"> Utilice el siguiente formulario para enviarnos un correo electrónico. <br> Su dirección de correo electrónico no será divulgada ni compartida con terceros. </p>",
        "textAbout": "<p>Érase una vez un par de niños que, como todos los niños, soñaban que tenían superpoderes. Esos niños estaban creciendo y sus sueños de tener superpoderes para ayudar a otras personas también. Pero espera, no necesitamos superpoderes para ayudar a otras personas. Solo necesitamos tener un buen corazón y ganas de hacerlo. Qué mejor manera de ayudar a otras personas que siendo maestros, para que puedan ayudar a otros a tener las herramientas para luchar por sus sueños. </p><p> Habiendo alcanzado este objetivo y después de varios años dedicados a la docencia en diferentes niveles educativos. Un día descubrieron para su asombro que habían desarrollado lo más parecido a un superpoder. Bueno, podían hablar con las computadoras y darles órdenes para que hicieran cosas geniales que ayudaran a las personas en su día a día. Pero el conocimiento no tiene valor si no se comparte. Así que decidieron crear este blog para ayudar a otros a alcanzar sus sueños y ser sus propios superhéroes.</p>"



    }
};

function activeLanguage() {
    var tLanguage = getFromStorage('language');

    if (tLanguage != "es" && tLanguage != "en") {
        if (browserDetails.language != "es" && browserDetails.language != "en") {
            tLanguage = "en";
        } else {
            tLanguage = browserDetails.language;
        };
    };

    saveIntoStorage('language', tLanguage);

    let tem = [];
    if (tLanguage === 'es') {
        tem.active = 'es';
        tem.texts = this.AppSetting.languages.es;
    } else {
        tem.active = 'en';
        tem.texts = this.AppSetting.languages.en;
    };

    this.AppSetting.languages.active = tem.active
    store.commit('setLanguage', tem);

};



function changerLanguage() {
    setLoadedPage(true);

    var tLanguage = getFromStorage('language');

    if (tLanguage == 'en') {
        saveIntoStorage('language', 'es');
    } else {
        saveIntoStorage('language', 'en');
    };

    activeLanguage();

    setLoadedPage(false);
    return getFromStorage('language');
};