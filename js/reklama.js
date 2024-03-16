import { ads } from './ads/ads.js';


const adsDOM = document.getElementById('ad');
const closeDOM = adsDOM.querySelector('.close');

closeDOM.addEventListener('click', () => {
    adsDOM.classList.toggle('hide')
});