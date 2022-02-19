function mudaModo(){
    mudaClasses();
    mudaTexto();
}

function mudaClasses(){
    h1.classList.toggle(darkModeClass);
    btn.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function mudaTexto(){
    const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		btn.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	btn.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const h1 = document.getElementById('page-title');
const btn = document.getElementById('mode-selector');
const footer = document.getElementById('page-body');
const body = document.getElementById('page-footer');
const darkModeClass = 'dark-mode';

btn.addEventListener('click', mudaModo);
