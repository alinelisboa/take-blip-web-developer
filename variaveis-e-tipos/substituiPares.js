// solução 1
var array = [];

function substitui(array){
    if (!array.length) return console.log(-1)

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            array[i] = 0;
        }
    }
    console.log(array);
}

// solução 2

function substitui2(array){
    if(!array.length) return '-1';
    if(!array) return '-1';

    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log('Você já é zero!!');
        } else if (array[i] % 2 == 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
        return array;
}

// input

console.log(substitui2([2, 0, 3, 6]));