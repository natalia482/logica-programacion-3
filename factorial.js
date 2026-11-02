function calcularFactorial(numero) {
    // Número negativo
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    
    if (numero === 0) {
        return 1;
    }

    let resultado = 1;
    
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

//pruebas
const numerosPrueba = [4, 0, 5, 7, 10];

numerosPrueba.forEach(num => {
    console.log(`${num}! = ${calcularFactorial(num)}`);
});