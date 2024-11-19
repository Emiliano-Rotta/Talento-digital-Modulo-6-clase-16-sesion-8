import { expect } from 'chai';
import { resta, suma } from '../math.js';

describe('Operaciones matemáticas suma', () => {
    it('Debería sumar dos números correctamente', () => {
        const resultado = suma(2, 3);
        expect(resultado).to.equal(5);
    });
    it('Debería arrojar error si no es un número', () => {
        expect(()=> suma(2,"3")).to.throw('Ambos argumentos deben ser numeros');
    });
    it('Debería sumar correctamente dos números negativos', () => {
        expect( suma(-10,-5)).to.equal(-15);
    });
    it('Debería arrojar error si no me pasan un parametro', () => {
        expect(()=> suma(2, undefined)).to.throw('Ambos argumentos deben ser numeros');
    });


})

// Escribe un test que verifique que la función funciona correctamente para los casos:
// resta(10, 5) debe devolver 5.
// resta(0, 3) debe devolver -3.

describe('Operaciones matemáticas resta', () => {
    it('Debería restar dos números correctamente', () => {
        const resultado = resta(10, 5);
        expect(resultado).to.equal(5);
    });
    it('Debería poder restar dos números y quedar en negativo', () => {
        const resultado = resta(0, 3);
        expect(resultado).to.equal(-3);
    });
    it('Debería arrojar error si no es un número', () => {
        expect(()=> resta(2,"3")).to.throw('Ambos argumentos deben ser numeros');
        expect(()=> resta("2","3")).to.throw('Ambos argumentos deben ser numeros');
        expect(()=> resta("2",3)).to.throw('Ambos argumentos deben ser numeros');
    });
    it('Debería arrojar error si es null', () => {
        expect(()=> resta(2,null)).to.throw('Ambos argumentos deben ser numeros');

    });
    it('Debería arrojar error si es undefined', () => {
        expect(()=> resta(2,undefined)).to.throw('Ambos argumentos deben ser numeros');

    });

})