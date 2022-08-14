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
      white: true
    },
    {
      color: '#a3ccc0',
      white: true
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
  
  function initializeTimezoneList() {
      let timezonesSelect = document.getElementById("timezonesSelect");
  
      for (let i=0; i<timezonesList.length; i++) {
          let option = document.createElement("option");
          option.text = timezonesList[i];
          timezonesSelect.add(option);
      }
  }