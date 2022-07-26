let timeDisplay = document.getElementById("time");

let timezoneCards = [];

let isLiveTime = true;

let wheelIsFree = true;

let timeOffsetInSeconds = 0;

function refreshTime() {
    if (isLiveTime) {
        refreshTimeForAllCards();
    }
}

function refreshTimeForAllCards() {
    for (let i=0; i<timezoneCards.length; i++) {
        refreshTimeForCard(timezoneCards[i]);
    }
}

function refreshTimeForCard(timezoneCard) {
    const date = getDateObject(timezoneCard.timezoneName);
    const hoursString = getHoursString(date);
    const minutesString = getMinutesString(date);

    getHoursDiv(timezoneCard).innerHTML = hoursString;
    getMinutesDiv(timezoneCard).innerHTML = minutesString;
}

function getHoursDiv(div) {
    return div.querySelector(".hours");
}

function getMinutesDiv(div) {
    return div.querySelector(".minutes");
}

setInterval(refreshTime, 1000);

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

addEventListener('wheel', (event) => {
    if (wheelIsFree && event.wheelDeltaY < -49) {
        console.log(event.wheelDeltaY);
        isLiveTime = false;
        wheelIsFree = false;

        timeOffsetInSeconds += 3600;

        refreshTimeForAllCards();
        setTimeout(function() { isFree = true }, 250);
    }
});