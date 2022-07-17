function createInfoDiv() {
    const infoDiv = document.createElement("div");
    infoDiv.append(createTimeDiv());
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

function createTimezoneCardDiv() {
    const div = document.createElement("div");
    div.classList.add("timezone-card");
    div.style.backgroundColor = getTimezoneCardColor();
    return div;
}