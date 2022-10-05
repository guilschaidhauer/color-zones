function formatTimezoneName(timezoneName) {
    return timezoneName.split("/")[1];
}

function formatMinutesString(minutesString) {
    if (minutesString.length === 1) {
        minutesString += '0';
    }

    return minutesString;
}