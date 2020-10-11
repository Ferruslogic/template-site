/* Language */
var browserDetails = this;
var AppLanguage = this;
var language = "";
var res = navigator.language.split("-");
language = res[0].toLowerCase();
this.browserDetails.language = language;

var r = API_getWebLocale().then(data => {
    console.error('data', data)
    return data;
});

console.error(r)