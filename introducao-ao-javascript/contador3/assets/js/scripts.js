var count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	corPadrao()
	showChange();
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if (count < 0){
		mudaCor();
		console.log('Mudando a cor');
	}
}

function decrement() {
	showChange();
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if (count < 0){
		mudaCor();
		console.log('Mudando a cor');
	}
}

function showChange() {
	console.log('cliquei!!!');
}

function mudaCor(){
	CURRENT_NUMBER.style.color='#BF0000';
}

function corPadrao(){
	CURRENT_NUMBER.style.color='black';
}

var buttonR = document.getElementById('btn-rmv');
var buttonA = document.getElementById('btn-add');

buttonR.addEventListener('click', decrement);
buttonA.addEventListener('click', increment);