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
    infoDiv.append(createDeleteButton());

    infoDiv.classList.add("timezone-info");
    return infoDiv;
}

function createTimeDiv() {
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("time-div");

    const hoursInputDiv = createHoursInputDiv();
    timeDiv.append(hoursInputDiv);

    timeDiv.append(createHoursDiv(hoursInputDiv));
    timeDiv.append(createColonDiv());
    timeDiv.append(createMinutesDiv());
    return timeDiv;
}

function createHoursDiv(hoursInputDiv) {
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    hoursDiv.onclick = handleHoursClick;
    hoursDiv.hoursInputDiv = hoursInputDiv;
    return hoursDiv;
}

function createHoursInputDiv() {
    const hoursInputDiv = document.createElement("textarea");
    hoursInputDiv.classList.add("hours-input");
    hoursInputDiv.maxLength = 2;
    hoursInputDiv.onblur = handleHoursInputBlur; 
    return hoursInputDiv;
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
    paragraph.innerHTML = timezoneList.get(timezoneCards[timezoneCards.length-1].timezoneName);
    paragraph.classList.add("timezone-name");
    return paragraph;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.classList.add("remove-button");
    button.innerHTML = "X";
    
    button.onclick = function() {
        removeTimeZoneCard(this);
    };
    return button;
}