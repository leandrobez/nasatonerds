import axios from 'axios';

const APIKEY = 'ltkFmH8jSVvWYBskKBwcbHgMjLMYHquwNFnOYsiN';
const urlBasePOD = 'https://api.nasa.gov/planetary/';
const urlBasePMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const urlBaseNeo = 'https://api.nasa.gov/neo/rest/v1/feed?';
const urlEarthImagery = 'https://api.nasa.gov/planetary/earth/imagery?';

const getApod = () => {
  let url = urlBasePOD.concat('apod?', 'api_key=', APIKEY);
  let promisse = {
    error: {
      status: false,
      erro: null
    },
    result: null
  };
  return axios
    .get(url)
    .then(response => {
      if (response.status == 200 && response.statusText == 'OK') {
        promisse.result = response.data;
      } else {
        promisse.error.erro = 'anything';
        promisse.error.status = true;
      }
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

const getMars = (rover, cam, today) => {
  var dd = today[2];
  var mm = today[1];
  var yyyy = today[0];
  let camera = null;
  if (cam) {
    camera = `&camera=${cam}`;
  } else {
    camera = '';
  }

  today = yyyy + '-' + mm + '-' + dd;
  //document.write(today);
  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-3-10&page=1&api_key=ltkFmH8jSVvWYBskKBwcbHgMjLMYHquwNFnOYsiN

  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=ltkFmH8jSVvWYBskKBwcbHgMjLMYHquwNFnOYsiN
  //rovers  pode ser Curiousity Opportunity Spirit
  let url = urlBasePMars.concat(
    rover,
    '/photos?',
    'earth_date=',
    today,
    camera,
    '&page=1',
    '&api_key=',
    APIKEY
  );

  let promisse = {
    error: {
      status: false,
      erro: null
    },
    result: null
  };
  return axios
    .get(url)
    .then(response => {
      if (response.status == 200 && response.statusText == 'OK') {
        promisse.result = response.data;
      } else {
        promisse.error.erro = 'anything';
        promisse.error.status = true;
      }
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

const getEpic = (y, m, d) => {
  //let urlIMG = "https://epic.gsfc.nasa.gov/archive/natural/2016/10/31/png/epic_1b_20151031074844.png"

  let urlEpic =
    'https://api.nasa.gov/EPIC/api/natural/date/' +
    y +
    '-' +
    m +
    '-' +
    d +
    '?api_key=' +
    APIKEY;

  let promisse = {
    error: {
      status: false,
      erro: null
    },
    result: null
  };
  return axios
    .get(urlEpic)
    .then(response => {
      if (response.status == 200 && response.statusText == 'OK') {
        promisse.result = response.data;
      } else {
        promisse.error.erro = 'anything';
        promisse.error.status = true;
      }
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

const getNeo = (start_date, end_date) => {
  //start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
  let urlNeo =
    urlBaseNeo +
    'start_date=' +
    start_date +
    '&end_date=' +
    end_date +
    '&api_key=' +
    APIKEY;
  let promisse = {
    error: {
      status: false,
      erro: null
    },
    result: null
  };
  //console.log(urlNeo)
  return axios
    .get(urlNeo)
    .then(response => {
      //console.log(response)
      if (response.status == 200 && response.statusText == '') {
        promisse.result = response.data;
      } else {
        promisse.error.erro = 'anything';
        promisse.error.status = true;
      }
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

const getEarthImagery = (lon, lat, date) => {
  //https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=DEMO_KEY
  //https://api.nasa.gov/planetary/earth/imagery?lon=-51.23&lat=-30.07&date=2018-10-10&cloud_score=True&api_key=ltkFmH8jSVvWYBskKBwcbHgMjLMYHquwNFnOYsiN
  let urlEarth =
    urlEarthImagery +
    'lon=' +
    lon +
    '&lat=' +
    lat +
    '&date=' +
    date +
    '&cloud_score=True' +
    '&api_key=' +
    APIKEY;
  console.log(urlEarth);
  let promisse = {
    error: {
      status: false,
      erro: null
    },
    result: null
  };
  return axios
    .get(urlEarth)
    .then(response => {
      //console.log(response)
      if (response.status == 200 && response.statusText == '') {
        promisse.result = response.data;
      } else {
        promisse.error.erro = 'anything';
        promisse.error.status = true;
      }
      return promisse;
    })
    .catch(err => {
      promisse.error.status = true;
      promisse.error.erro = err;
      return promisse;
    });
};

export default {
  getApod,
  getMars,
  getEpic,
  getNeo,
  getEarthImagery
};
