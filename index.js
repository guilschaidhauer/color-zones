let timeDisplay = document.getElementById("time");

let timezoneCards = [];

function refreshTime() {
    for (let i=0; i<timezoneCards.length; i++) {
        const hoursString = getHoursString(timezoneCards[i].timezoneName);
        const minutesString = getMinutesString(timezoneCards[i].timezoneName);

        getHoursDiv(timezoneCards[i]).innerHTML = hoursString;
        getMinutesDiv(timezoneCards[i]).innerHTML = minutesString;
    }
}

function getHoursDiv(div) {
    return div.querySelector(".hours");
}

function getMinutesDiv(div) {
    return div.querySelector(".minutes");
}

function getDateString(timezoneName) {
    return new Date().toLocaleDateString("pt-BR", {timeZone: timezoneName});
}

setInterval(refreshTime, 1000);

function getHoursString(timezoneName) {
    return new Date().toLocaleString("pt-BR", {timeZone: timezoneName, hour: '2-digit'});
}

function getMinutesString(timezoneName) {
    return new Date().toLocaleString("pt-BR", {timeZone: timezoneName, minute: '2-digit'});
}

function addTimezoneCard() {
    const div = createTimezoneCardDiv();
 
    document.getElementById('timezonesCardHolder').append(div);

    adjustTimezoneCardsWidth();

    closeForm();

    refreshTime();
}

function removeTimeZoneCard(button) {
    const timezoneCard = button.parentElement.parentElement.parentElement;

    for(var i=0; i<timezoneCards.length; i++){ 
        if (timezoneCards[i] === timezoneCard) { 
            timezoneCards.splice(i, 1); 
        }
    }

    timezoneCard.remove();
    adjustTimezoneCardsWidth();
}

function getTimezoneString() {
    return document.getElementById("timezonesSelect").value;
}

function adjustTimezoneCardsWidth() {
    for (let i=0; i<timezoneCards.length; i++) {
        timezoneCards[i].style.width = getTimezoneCardWidth();
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