let language = String;
var browserDetails = this;
var locales = "";

var res = navigator.language.split("-");
language = res[0].toLowerCase();
this.browserDetails.language = language;

AppSetting.languages = {
    "en": {
        "appName": "FerrusLogic S.A",
        "title": "FerrusLogic S.A - Software Development.",
        "homeTitle": "Welcome!",
        "homeSubTitle": "Here you will find help to learn how to create <br>  your multi platform apps with"
    },
    "es": {
        "appName": "FerrusLogic S.A",
        "title": "FerrusLogic S.A - Desarrollo de Software.",
        "homeTitle": "Bienvenidos!",
        "homeSubTitle": "Aquí encontrará ayuda para aprender a crear <br> aplicaciones multi-plataforma con"
    }
};

AppSetting.ActiveLanguage = this.AppSetting.languages.en;

function activeLanguage(pLanguage) {

    if (pLanguage === null || pLanguage === undefined) {
        if (this.browserDetails.language != "es" && this.browserDetails.language != "en") {
            pLanguage = "en";
        };
    };

    saveIntoStorage('language', pLanguage);

    if (pLanguage === 'es') {
        AppSetting.ActiveLanguage = this.AppSetting.languages.es;
    } else {
        AppSetting.ActiveLanguage = this.AppSetting.languages.en;
    };
    return true;
};


activeLanguage(language);