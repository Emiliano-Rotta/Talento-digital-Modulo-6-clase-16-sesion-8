//test

//Un test (o prueba) es un proceso que nos permite asegurarnos de que nuestro código funcione correctamente.


//npm install chai mocha --save-dev

export function suma (a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error('Ambos argumentos deben ser numeros')
    }
    return  a + b;
}

// Consigna
// Crea una función llamada resta(a, b) que devuelva la resta de dos números.
// Escribe un test que verifique que la función funciona correctamente para los casos:
// resta(10, 5) debe devolver 5.
// resta(0, 3) debe devolver -3.
// export function resta(a, b) {
//     return a - b
// }

// Modifica la función resta(a, b) para que valide que ambos argumentos sean números.
export function resta(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error('Ambos argumentos deben ser numeros')
    }
    return a - b
}


// Escribe un test que verifique:
// La resta funciona correctamente cuando los argumentos son números.
// Lanza un error con el mensaje "Ambos argumentos deben ser números" si algún argumento no es válido, si es un string, si es undefind, si es null
