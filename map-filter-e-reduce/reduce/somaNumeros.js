function somaNumeros(arr) {
	return arr.reduce(function(prev, curr){
        console.log({prev});
        console.log({curr});
	    return prev + curr;
    });
}

console.log(somaNumeros([1, 1, 1, 3]));