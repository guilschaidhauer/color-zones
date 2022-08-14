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
  {
    color: '#120d29'
  },
  {
    color: '#120d29'
  },
  {
    color: '#071117'
  },
  {
    color: '#060d1a'
  },
  {
    color: '#061021'
  },
  {
    color: '#0e1f33'
  },
  {
    color: '#2d5863'
  },
  {
    color: '#2f8991'
  },
  {
    color: '#70b8ba'
  },
  {
    color: '#a3ccc0'
  },
  {
    color: '#cedbc5'
  },
  {
    color: '#edeabb'
  },
  {
    color: '#f5e695'
  },
  {
    color: '#f7e58b'
  },
  {
    color: '#f7cf77'
  },
  {
    color: '#f7c383'
  },
  {
    color: '#f0a46e'
  },
  {
    color: '#cc8672'
  },
  {
    color: '#996778'
  },
  {
    color: '#69497a'
  },
  {
    color: '#55406e'
  },
  {
    color: '#1b0f38'
  },
  {
    color: '#13082e'
  },
  {
    color: '#110c2b'
  },
  {
    color: '#16112e'
  }
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