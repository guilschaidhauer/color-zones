//let savedTimezones = localStorage.getItem('savedTimezones');

function loadSettings() {
    let savedTimezones = getSavedTimezones();

    for (let i=0; i<savedTimezones.length; i++) {
        createTimezoneCard(savedTimezones[i]);
    }
}

function addTimezoneToSavedTimezones(timezoneName) {
    let savedTimezones = getSavedTimezones();

    savedTimezones.push(timezoneName);

    const string = JSON.stringify(savedTimezones);

    localStorage.setItem('savedTimezones', string);
}

function getSavedTimezones() {
    let savedTimezonesString = localStorage.getItem('savedTimezones');
    let savedTimezones;

    if (savedTimezonesString === null) {
        savedTimezones = [];
    } else {
        savedTimezones = JSON.parse(savedTimezonesString);
    }

    return savedTimezones;
}