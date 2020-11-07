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
        "textContact": "<p class=\"pa-2 d-flex display-1\">Let’s Start a Conversation</p><p class=\"pa-2 d-flex\">Use the form below to drop us an e-mail.<br>Your email address will not be disclosed or shared with third parties.</p>"
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
                "label": 'Acerca de',
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
        "aboutPageName": "Acerca de",
        "blogPageName": "Blog",
        "textContact": "<p class = \"pa-2 d-flex display-1 \"> Comencemos una conversación </p> <p class =\" pa-2 d-flex \"> Utilice el siguiente formulario para enviarnos un correo electrónico. <br> Su dirección de correo electrónico no será divulgada ni compartida con terceros. </p>"



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