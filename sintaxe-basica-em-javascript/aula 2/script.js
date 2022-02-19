// tipos primitivos

// boleano
var VOuF = false;
console.log(typeof(VOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'diana';
console.log(typeof(nome));

// função
var funcao = function(){
    console.log(typeof(funcao));
}

// como declarar var
var variavel;
console.log(variavel);

// como declarar let ARRAY
let variavel2 = 'diana';
console.log(variavel2)

// como declarar constante

const constante;
console.log(constante);

// escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();
