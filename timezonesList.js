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
  '#120d29',
  '#071117',
  '#060d1a',
  '#061021',
  '#0e1f33',
  '#2d5863',
  '#2f8991',
  '#70b8ba',
  '#a3ccc0',
  '#cedbc5',
  '#edeabb',
  '#f5e695',
  '#f7e58b',
  '#f7cf77',
  '#f7c383',
  '#f0a46e',
  '#cc8672',
  '#996778',
  '#69497a',
  '#55406e',
  '#1b0f38',
  '#13082e',
  '#110c2b',
  '#16112e'
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