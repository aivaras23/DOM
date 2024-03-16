const h1DOM = document.getElementsByTagName('h1');

console.log(h1DOM)
console.log(h1DOM[0])
console.log(h1DOM[0].innerText)
console.log(h1DOM[0].textContent)

h1DOM[0].innerText = 'Another text'

// innertext tas pats kaip textContent tiktais kad innerText isvalo tarpus
// textContent istraukia teksta su tarpais

const titleDOM = document.getElementsByTagName('title');

titleDOM[0].innerText = 'AAAAA';

setTimeout(() => {
    console.log('LAIKAS - 1')
}, 3000)

setTimeout(() => {
    console.log('LAIKAS - 2')
}, 3000)

console.clear();


const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:0';

let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerText = `${m < 10 ? '0' : ' '}${m}:${s < 10 ? '0' : ' '}${s}`
}, 1000)

let count = 0;
setInterval(() => {
    count++;
    if (count % 2 === 0) {
        titleDOM[0].innerText = 'DOM';
    }
    else {
        titleDOM[0].innerText = '***NEW MESSAGE***';
    }
}, 1000)
