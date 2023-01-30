'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `    <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000).toFixed(
    1
  )}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const rendereError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

//1task
// const getCountry = function (country, classname = '') {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data.name);
//     console.log(data);
//     renderCountry(data);
//   });
// };
// getCountryData('usa');
// getCountryData('uzbekistan');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2task
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data.name);
//     // console.log(data);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       // console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('uzb');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3task promise/fetch
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('uzb');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4task promise/fetch

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };
// getCountryData('uzb');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5task handling errors
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥`);
//       rendereError(`something went wrong ${err.message}. try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('uzb');
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6task handling errors

// const getJSON = function (url, errormsg = '') {
//   return fetch.then(response => {
//     if (!response.ok) throw new error(`${errormsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new error(`country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new error(`country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥`);
//       rendereError(`something went wrong ${err.message}. try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('uzb');
// });
// getCountryData('uzb');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7

// const getJSON = function (url, errormsg = '') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new error(`${errormsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, `country not found`)
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥`);
//       rendereError(`something went wrong ${err.message}. try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('uzb');
// });
// getCountryData('australia');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//challenge//

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${+lat},${+lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`smth went wrong ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);

      // console.log(`you are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`smth went wrong ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}`);
      rendereError(` ${err.message}`);
    });
};

whereAmI(52.508, 13.381);
