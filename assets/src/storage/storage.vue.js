function sportStorage() {
    if (typeof(Storage) !== "undefined") {
        return true;
    };
    return false;
}

function saveIntoStorage(pKey, pValue, pJson = false) {
    if (sportStorage() === true) {
        if (pJson === false) {
            localStorage.setItem(pKey, pValue);
        } else {
            localStorage.setItem(pKey, JSON.stringify(pValue));
        };
    };
};

function getFromStorage(pKey, pJson = false) {
    if (sportStorage() === true) {
        let result = localStorage.getItem(pKey);

        if (result) {
            if (pJson === true) {
                result = JSON.parse(result);
            };
            return result;
        } else {
            return undefined;
        }
    };
};

function removeFromStorage(pKey) {
    if (sportStorage() === true) {
        localStorage.removeItem(pKey);
    };
};

function clearStorage() {
    if (sportStorage() === true) {
        localStorage.clear();
    };
};