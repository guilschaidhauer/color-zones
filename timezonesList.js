let timezonesList = [
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

initializeTimezoneList();

function initializeTimezoneList() {
    let timezonesSelect = document.getElementById("timezonesSelect");

    for (let i=0; i<timezonesList.length; i++) {
        let option = document.createElement("option");
        option.text = timezonesList[i];
        timezonesSelect.add(option);
    }
}