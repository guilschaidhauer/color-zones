let savedTimezones = localStorage.getItem('savedTimezones');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

function addTimezoneToSavedTimezones(timezoneName) {
    let savedTimezonesString = localStorage.getItem('savedTimezones');
    let savedTimezones;

    if (savedTimezonesString === null) {
        savedTimezones = [];
    } else {
        savedTimezones = JSON.parse(savedTimezonesString);
    }

    savedTimezones.push(timezoneName);

    const string = JSON.stringify(savedTimezones);

    localStorage.setItem('savedTimezones', string);
}