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
        ]
    },
    "es": {
        "appName": "FerrusLogic S.A Es",
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
        ]
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

    store.commit('setLanguage', tem);
};



function changerLanguage() {
    var tLanguage = getFromStorage('language');
    if (tLanguage == 'en') {
        saveIntoStorage('language', 'es');
    } else {
        saveIntoStorage('language', 'en');
    }
    activeLanguage();
    return getFromStorage('language')
};