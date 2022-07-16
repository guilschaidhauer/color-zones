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
    return new Date().toLocaleString("en-US", {timeZone: timezoneName}) + " - " + timezoneName;
}

function addTimezoneCard() {
    let e = document.getElementById("timezonesSelect");
    let timezoneString = e.value;

    const paragraph = document.createElement("p");
    paragraph.timezoneName = timezoneString;

    document.getElementById('timezonesCardHolder').append(paragraph);

    timezoneCards.push(paragraph);

    closeForm();
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}