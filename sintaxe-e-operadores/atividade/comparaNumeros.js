var iguais = '';

function funcao(a, b) {
    if (!a || !b) return 'Defina dois números!';
    
    var soma = a + b;
    var menorOuMaior10 = '';
    var menorOuMaior20 = '';

    if (a == b){
        iguais = 'são iguais';
    } else{
        iguais = 'não são iguais';
    }

    if (soma > 10){
        menorOuMaior10 = 'maior';
    } else {
        menorOuMaior10 = 'menor';
    }

    if (soma > 20){
        menorOuMaior20 = 'maior';
    } else{
        menorOuMaior20 = 'menor';
    }

    console.log(`Os números ${a} e ${b} ${iguais}. Sua soma é ${soma}, que é ${menorOuMaior10} que 10 e ${menorOuMaior20} que 20.`);
}

funcao(10, 10);