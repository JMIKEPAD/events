

// setTimeout(() => {
//     console.log('pippo');
// }, 10000);

let counter2 = 0;

const interval = setInterval(() => {
    console.log(counter2);
    if (counter2 === 10) {
        clearInterval(interval);
    }
    counter2++
}, 1000);









const button3 = document.getElementById('button3')

button3.onclick = () => buttonClick('button 3');

button3.onclick = counterTimePressButton;

const button4 = document.getElementById('button4');

button4.addEventListener('click', buttonClick);

button4.addEventListener('click', buttonClick);

// document.addEventListener('keydown', buttonClick);

document.addEventListener('keydown', realTimeSearch);

// const barPippo = document.getElementById('barPippo');

// barPippo.addEventListener('click', counterTimePressButton);

const link = document.getElementById('link');

link.addEventListener('click', counterTimePressButton);

const link2 = document.getElementById('link2');

link2.addEventListener('click', displayPar);

function buttonClick(string) {

    console.log(string);
}



let counter = 0;



function counterTimePressButton(event) {
    console.log(event);
    counter += 1;
    console.log(counter);
    // if (counter===7) {
    //     button4.removeEventListener('click', counterTimePressButton)
    // }
    event.stopPropagation();
    event.preventDefault();
    window.location = 'https://google.com';
}

function displayPar(event) {
    let par = document.getElementById('hiddenParagraph');
    par.style.display = 'block';
    event.preventDefault();
}


function changeBackground(event) {
    let number = parseInt(event.key);
    if (event.ctrlKey && !isNaN(number)) {
        event.preventDefault();
        document.body.style.backgroundColor = '#' + number + number + number;
    }
}

function onMouseEnter() {
    console.log("sono entrato");
}

function onMouseLeave() {
    console.log("sono uscito");
}

const div = document.getElementById('mouseDiv2');
div.addEventListener('mouseover', onMouseEnter);
div.addEventListener('mouseover', onMouseLeave);
div.addEventListener('mouseover', onMouseOver);

function onMouseOver() {
    console.log('sono sopra');
}


let selectedKey = '';

function onKeyDown(event) {

    if (event.key !== selectedKey) {
        selectedKey = event.key;
        console.log('tasto premuto ' + selectedKey);

    }

}
let searchTimeOut;

function realTimeSearch(event) {
    if (searchTimeOut) {
        clearTimeout(searchTimeOut)
    }
    searchTimeOut = setTimeout(() => {
        console.log('sto cercando');
    }, 1000);
    
}