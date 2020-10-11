/* language */
var browserDetails = this;
var AppSetting = this;
var locales = "";

var res = navigator.language.split("-");
language = res[0].toLowerCase();
this.browserDetails.language = language;

function activeLanguage(pLanguage) {
    if (pLanguage == null) {
        if (this.browserDetails.language != "es" && this.browserDetails.language != "en") {
            pLanguage = "en";
        };
    };

    saveIntoStorage('language', pLanguage);
};


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

language = "";
language = getFromStorage('language');
activeLanguage(language);


AppSetting.ActiveLanguage = API_getAppLocale()