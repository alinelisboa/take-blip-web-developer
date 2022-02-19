const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' 
};

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL, myInit);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();