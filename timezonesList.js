const timezonesList = [
    {
        id: 'Asia/Tokyo',
        name: 'Tokyo'
    },
    {
        id: 'Asia/Shanghai',
        name: 'Shanghai'
    },
    {
        id: 'Asia/Hong_Kong',
        name: 'Hong Kong'
    },
    {
        id: 'Asia/Seoul',
        name: 'Seoul'
    },

    {
        id: 'Europe/Berlin',
        name: 'Berlin'
    },
    {
        id: 'Europe/London',
        name: 'London'
    },
    {
        id: 'Europe/Rome',
        name: 'Rome'
    },
  
    {
        id: 'America/Sao_Paulo',
        name: 'São Paulo'
    }
];
  
const timezoneCardColorsList = [
    {
        color: '#120d29',
        white: true
    },
    {
        color: '#071117',
        white: true
    },
    {
        color: '#060d1a',
        white: true
    },
    {
        color: '#061021',
        white: true
    },
    {
        color: '#0e1f33',
        white: true
    },
    {
        color: '#2d5863',
        white: true
    },
    {
        color: '#2f8991',
        white: true
    },
    {
        color: '#70b8ba',
        white: false
    },
    {
        color: '#a3ccc0',
        white: false
    },
    {
        color: '#cedbc5',
        white: false
    },
    {
        color: '#edeabb',
        white: false
    },
    {
        color: '#f5e695',
        white: false
    },
    {
        color: '#f7e58b',
        white: false
    },
    {
        color: '#f7cf77',
        white: false
    },
    {
        color: '#f7c383',
        white: false
    },
    {
        color: '#f0a46e',
        white: false
    },
    {
        color: '#cc8672',
        white: true
    },
    {
        color: '#996778',
        white: true
    },
    {
        color: '#69497a',
        white: true
    },
    {
        color: '#55406e',
        white: true
    },
    {
        color: '#1b0f38',
        white: true
    },
    {
        color: '#13082e',
        white: true
    },
    {
        color: '#110c2b',
        white: true
    },
    {
        color: '#16112e',
        white: true
    }
];
  
initializeTimezoneList();
  
// Maybe use a map for the names?
// https://www.w3schools.com/js/js_object_maps.asp

function initializeTimezoneList() {
    let timezonesSelect = document.getElementById("timezonesSelect");
  
    for (let i=0; i<timezonesList.length; i++) {
        let option = document.createElement("option");
        option.text = timezonesList[i].id;
        timezonesSelect.add(option);
    }
}