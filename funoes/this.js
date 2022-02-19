function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const p1 = {
    nome: 'Aline',
    idade: 19
}

const p2 = {
    nome: 'Kauã',
    idade: 14
}

const animal = {
    nome: 'Tom', 
    idade: 2,
    raca: 'Pug'
}

console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(p1, [7]));