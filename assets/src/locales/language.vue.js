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
        "appName": "FerrusLogic S.A Es",
        "title": "FerrusLogic S.A - Desarrollo de Software.",
        "homeTitle": "Bienvenidos!",
        "homeSubTitle": "Aquí encontrará ayuda para aprender a crear <br> aplicaciones multi-plataforma con"
    }
};

this.AppSetting.ActiveLanguage = this.AppSetting.languages.en;

function activeLanguage() {

    var tLanguage = getFromStorage('language');

    if (tLanguage != "es" && tLanguage != "en") {
        if (this.browserDetails.language != "es" && this.browserDetails.language != "en") {
            tLanguage = "en";
        } else {
            tLanguage = this.browserDetails.language;
        };
    };

    saveIntoStorage('language', tLanguage);

    if (tLanguage === 'es') {
        this.AppSetting.ActiveLanguage = this.AppSetting.languages.es;
        this.AppSetting.language = 'es';

    } else {
        this.AppSetting.ActiveLanguage = this.AppSetting.languages.en;
        this.AppSetting.language = 'en';
    };
};

activeLanguage();