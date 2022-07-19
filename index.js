let timeDisplay = document.getElementById("time");

let timezoneCards = [];

function refreshTime() {
    for (let i=0; i<timezoneCards.length; i++) {
        let dateString = getTimeString(timezoneCards[i].timezoneName);
        timezoneCards[i].innerHTML = dateString;
    }
}

setInterval(refreshTime, 1000);

function getTimeString(timezoneName) {
    return new Date().toLocaleString("pt-BR", {timeZone: timezoneName, hour: '2-digit', minute:'2-digit'});
}

function getDateString(timezoneName) {
    return new Date().toLocaleDateString("pt-BR", {timeZone: timezoneName});
}

function addTimezoneCard() {
    const div = createTimezoneCardDiv();
 
    document.getElementById('timezonesCardHolder').append(div);

    adjustTimezoneCardsWidth();

    closeForm();

    refreshTime();
}

function removeTimeZoneCard(button) {
    timezoneCards.splice(button.timezoneCardsIndex, 1);
    button.parentElement.parentElement.parentElement.remove();
    adjustTimezoneCardsWidth();
}

function getTimezoneString() {
    return document.getElementById("timezonesSelect").value;
}

function adjustTimezoneCardsWidth() {
    for (let i=0; i<timezoneCards.length; i++) {
        timezoneCards[i].parentElement.parentElement.parentElement.style.width = getTimezoneCardWidth();
    }
}

function getTimezoneCardWidth() {
    return (100 / timezoneCards.length) + "%";
}

function openForm() {
    document.getElementById("addTimezoneButton").style.display = "none";
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("addTimezoneButton").style.display = "block";
    document.getElementById("myForm").style.display = "none";
}