let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    showChange();
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
    showChange();
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function showChange() {
	console.log('cliquei!!!');
}

buttonR = document.getElementById('btn-rmv');
buttonA = document.getElementById('btn-add');

buttonR.addEventListener('click', decrement);
buttonA.addEventListener('click', increment);