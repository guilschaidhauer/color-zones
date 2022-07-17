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
    return new Date().toLocaleString("en-US", {timeZone: timezoneName, hour: '2-digit', minute:'2-digit'}) + " - " + timezoneName;
}

function addTimezoneCard() {
    const div = createTimezoneCardDiv();
    const paragraph = createTimezoneParagraph();

    div.append(paragraph);
    document.getElementById('timezonesCardHolder').append(div);

    timezoneCards.push(paragraph);
    adjustTimezoneCardsWidth();

    closeForm();

    refreshTime();
}

function getTimezoneString() {
    return document.getElementById("timezonesSelect").value;
}

function createTimezoneParagraph() {
    const paragraph = document.createElement("p");
    paragraph.timezoneName = getTimezoneString();
    paragraph.classList.add("timezone-card-data");
    return paragraph;
}

function createTimezoneCardDiv() {
    const div = document.createElement("div");
    div.classList.add("timezone-card");
    return div;
}

function adjustTimezoneCardsWidth() {
    for (let i=0; i<timezoneCards.length; i++) {
        timezoneCards[i].parentElement.style.width = getTimezoneCardWidth();
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