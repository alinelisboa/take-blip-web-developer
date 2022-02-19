// array
let array = ['string', 1, true];
console.log(array);
console.log(array[0]);

/* 
    metodos array 
forEach() - para cada item, indice do array
push() - add item no fim do array
pop() - remove ultimo
shift() - remove primeiro
unshift() - add primeiro
indexOf() - retorna o indice de um item
splice() - remove ou substitui item pelo indice
slice() - retorna uma parte do array
*/

array.forEach(function(item, indice){console.log(item, indice)});

array.push('novo Item');

let novoArray = array.slice(0, 3);
console.log(array);

// objects
let object = {string: 'string', number: 1, Boolean: true, Array: ['array']};

// desestruturação de ibjetos
var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();

var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}

var { cor, tamanho, funcao } = xicara;