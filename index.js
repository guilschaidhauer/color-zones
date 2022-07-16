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
    return new Date().toLocaleString("en-US", {timeZone: timezoneName});
}

function addTimezoneCard() {
    const paragraph = document.createElement("p");
    //const node = document.createTextNode(getTimeString());
    //paragraph.appendChild(node);
    paragraph.timezoneName = "America/Sao_Paulo";

    document.getElementById('timezonesCardHolder').append(paragraph);

    timezoneCards.push(paragraph);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}