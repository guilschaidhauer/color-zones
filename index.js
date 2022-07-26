let timeDisplay = document.getElementById("time");

let timezoneCards = [];

let isLiveTime = true;

let timeOffsetInSeconds = 3600;

function refreshTime() {
    if (isLiveTime) {
        for (let i=0; i<timezoneCards.length; i++) {
            const date = getDateObject(timezoneCards[i].timezoneName);
            const hoursString = getHoursString(date);
            const minutesString = getMinutesString(date);
    
            getHoursDiv(timezoneCards[i]).innerHTML = hoursString;
            getMinutesDiv(timezoneCards[i]).innerHTML = minutesString;
        }
    }
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