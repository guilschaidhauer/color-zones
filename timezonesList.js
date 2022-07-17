const timezonesList = [
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Seoul',

  'Europe/Berlin',
  'Europe/Madrid',
  'Europe/Paris',
  'Europe/London',
  'Europe/Budapest',
  'Europe/Dublin',
  'Europe/Rome',

  'America/Sao_Paulo',
  'America/Argentina/Buenos_Aires'
];

const timezoneCardColorsList = [
  '#F7AD79',
  '#D4687D',
  '#BD80EB',
  '#6887D4',
  '#71F5E2'
];

let timezoneCardColorsListIndex = 0;

initializeTimezoneList();

function initializeTimezoneList() {
    let timezonesSelect = document.getElementById("timezonesSelect");

    for (let i=0; i<timezonesList.length; i++) {
        let option = document.createElement("option");
        option.text = timezonesList[i];
        timezonesSelect.add(option);
    }
}

function getTimezoneCardColor() {
  const color =  timezoneCardColorsList[timezoneCardColorsListIndex];
  timezoneCardColorsListIndex++;

  if (timezoneCardColorsListIndex >= timezoneCardColorsList.length) {
    timezoneCardColorsListIndex = 0;
  }

  return color;
}