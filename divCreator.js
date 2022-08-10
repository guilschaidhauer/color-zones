function createTimezoneCardDiv(timezoneName) {
    const div = document.createElement("div");
    div.timezoneName = timezoneName;
    timezoneCards.push(div);
    div.classList.add("timezone-card");
    div.append(createInfoDiv());

    return div;
}

function createInfoDiv() {
    const infoDiv = document.createElement("div");
    infoDiv.append(createTimeDiv());
    infoDiv.append(createDateDiv());
    infoDiv.append(createTimezoneNameDiv());
    infoDiv.append(createDeleteButtonDiv());

    infoDiv.classList.add("timezone-info");
    return infoDiv;
}

function createTimeDiv() {
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time-div");
    timeDiv.append(createHoursDiv());
    timeDiv.append(createColonDiv());
    timeDiv.append(createMinutesDiv());
    return timeDiv;
}

function createHoursDiv() {
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    return hoursDiv;
}

function createMinutesDiv() {
    const minutesDiv = document.createElement("div");
    minutesDiv.classList.add("minutes");
    return minutesDiv;
}

function createColonDiv() {
    const colonDiv = document.createElement("div");
    colonDiv.innerHTML = ":";
    colonDiv.classList.add("colon");
    return colonDiv;
}

function createDateDiv() {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date-div");
    dateDiv.append(createDateParagraph());
    return dateDiv;
}

function createDateParagraph() {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = getDateString(getTimezoneString());
    paragraph.classList.add("date");
    return paragraph;
}

function createTimezoneNameDiv() {
    const timezoneNameDiv = document.createElement("div");
    timezoneNameDiv.append(createTimezoneNameParagraph());
    return timezoneNameDiv;
}

function createTimezoneNameParagraph() {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = formatTimezoneName(timezoneCards[timezoneCards.length-1].timezoneName);
    paragraph.classList.add("timezone-name");
    return paragraph;
}

function createDeleteButtonDiv() {
    const deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.append(createDeleteButton());
    return deleteButtonDiv;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.innerHTML = "X";
    
    button.onclick = function() {
        removeTimeZoneCard(this);
    };
    return button;
}