import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }
    
    const armarNumero = (numeroTexto: string) =>{
        //no aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numeroTexto === '.')
                setNumero(numero + numeroTexto);
            else if(numeroTexto === '0' && numero.includes('.'))
                setNumero(numero + numeroTexto);
            else if(numeroTexto !== '0' && !numero.includes('.'))
                setNumero(numeroTexto);
            else if(numeroTexto === '0' && !numero.includes('.'))
                setNumero(numero);
            else
                setNumero(numero + numeroTexto);
        }else
            setNumero(numero + numeroTexto);
    }

    const deleteLastNumber = () => {
        if(numero.length > 1 && !numero.includes('-'))
            setNumero(numero.slice(0, -1));
        else
            setNumero('0');
    }
    
    const positivoNegativo = () => {
        if(numero === '0') return;

        if(numero.includes('-')){
            setNumero(numero.replace('-', ''));
        }else{
            setNumero('-' + numero);
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if(numero.endsWith('.')) 
            setNumero(numero.slice(0, -1));
        else
            setNumeroAnterior(numero);
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = ()=>{

        if(numeroAnterior === '0') return;

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                if(num1 === 0){
                    setNumero('0');
                    setNumeroAnterior('0');
                    break;
                }
                setNumero(`${num2 / num1}`);
                break;
        }

        setNumeroAnterior('0');
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        deleteLastNumber,
        armarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}