function createTimezoneCardDiv() {
    const div = document.createElement("div");
    div.classList.add("timezone-card");
    div.style.backgroundColor = getTimezoneCardColor();
    return div;
}

function createInfoDiv() {
    const infoDiv = document.createElement("div");
    infoDiv.append(createTimeDiv());
    infoDiv.append(createTimezoneNameDiv());
    infoDiv.classList.add("timezone-info");
    return infoDiv;
}

function createTimeDiv() {
    const timeDiv = document.createElement("div");
    timeDiv.append(createTimeParagraph());
    return timeDiv;
}

function createTimeParagraph() {
    const paragraph = document.createElement("p");
    paragraph.timezoneName = getTimezoneString();
    paragraph.classList.add("time");
    timezoneCards.push(paragraph);
    return paragraph;
}

function createTimezoneNameDiv() {
    const timezoneNameDiv = document.createElement("div");
    timezoneNameDiv.append(createTimezoneNameParagraph());
    return timezoneNameDiv;
}

function createTimezoneNameParagraph() {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = timezoneCards[timezoneCards.length-1].timezoneName;
    paragraph.classList.add("timezone-name");
    return paragraph;
}