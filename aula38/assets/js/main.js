const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundDoBody = estiloBody.backgroundColor;
console.log(backgroundDoBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundDoBody;
    p.style.color = '#ffffff';
}