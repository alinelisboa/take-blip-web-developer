var count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	if (count >= 10){
		desabilitar(buttonA);
		console.log('Não posso contar mais que 10!');
	} else {
		habilitar(buttonA);
		showChange();
		count++;
		CURRENT_NUMBER.innerHTML = count;
	}
	habilitar(buttonA);
}

function decrement() {
	if (count <= 0){
		desabilitar(buttonR);
		console.log('Não posso contar menos que 0!');
	} else {
		habilitar(buttonR);
		showChange();
		count--;
		CURRENT_NUMBER.innerHTML = count;
	}
	habilitar(buttonR);
}

function showChange() {
	console.log('cliquei!!!');
}

function habilitar(button){
	button.disabled = false;
}

function desabilitar(button){
	button.disabled = true;
}

var buttonR = document.getElementById('btn-rmv');
var buttonA = document.getElementById('btn-add');

buttonR.addEventListener('click', decrement);
buttonA.addEventListener('click', increment);