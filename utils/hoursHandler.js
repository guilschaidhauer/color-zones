function handleHoursClick() {
    this.style.display = "none";
    this.hoursInputDiv.style.display = "inline-block";
    this.hoursInputDiv.hoursDiv = this;

    this.hoursInputDiv.placeholder = this.innerHTML;
}

function handleHoursInputBlur() {
    this.style.display = "none";
    this.hoursDiv.style.display = "inline-block";
    
    if (isValidHour(this.value)) {
        updateHours(this);
    } else {
        this.placeholder = this.hoursDiv.innerHTML;
    }
}

function updateHours(div) {
    const newHour = div.value;
    const previousHour = div.hoursDiv.innerHTML;

    const hoursOffset = newHour - previousHour;

    addTimeOffset(hoursOffset * 60 * 60);
}

function isValidHour(hour) {
    return (hour >= 0 && hour <= 23);
}

function addTimeOffset(offsetInSeconds) {
    isLiveTime = false;
    wheelIsFree = false;

    timeOffsetInSeconds += offsetInSeconds;

    refreshTimeForAllCards();
    setTimeout(function() { 
        wheelIsFree = true; 
    }, 250);

    timeResetButton.style.display = "grid";
}

function resetTime() {
    timeOffsetInSeconds = 0;
    isLiveTime = true;
    timeResetButton.style.display = "none";
    refreshTime();
} 