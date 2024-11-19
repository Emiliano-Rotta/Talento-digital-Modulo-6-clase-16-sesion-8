import { expect } from 'chai';
import { suma } from '../math.js';

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
