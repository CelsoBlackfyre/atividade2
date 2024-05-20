"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./atividades.css";

export default function Atividades() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<number>(0);
  const [outputString, setOutputString] = useState<string>("");
  const [output3, setOutput3] = useState<string>("");

  const mudarOutput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOutput(event.target.value);
  };

  const mudarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const questao1 = () => {
    <h4 className="questao">
      Questao 1: Crie um programa verifica se um numero e positivo, negativo ou
      zero.
    </h4>;
    const num = Number(input);
    if (num < 0) {
      setOutputString("O numero e negativo");
    } else if (num > 0) {
      setOutputString("O numero e positivo");
    } else {
      setOutputString("O numero e zero");
    }
  };

  const questao2 = () => {
    <h4 className="questao">
      Questao 2: Escreva um codigo que determine se um numero e par ou impar
    </h4>;
    const num = Number(input);
    if (num % 2 === 0) {
      setOutputString("O numero e par ");
    } else if (num % 2 != 0) {
      setOutputString("O numero e impar");
    } else {
      setOutputString("Isso nao e um numero");
    }
  };

  function Questao3() {
    const num = Number(input);
    if (num >= 60) {
      setOutputString("O aluno foi aprovado");
    } else if (num < 60) {
      setOutputString("O aluno foi reprovado");
    }
    return setOutputString(
      `O valor da nota foi ${num}. O reesultado foi: ${
        num >= 60 ? "Aprovado" : "Reprovado"
      }`,
    );
  }

  function Questao4() {
    const num = Number(input);
    <h4 className="questao">
      Questao 4: Crie um programa que calcule a tabuada de um numero fornecido
      pelo usuario
    </h4>;
    setOutputString(
      `A tabuada de ${num} seria: 
				${num * 1}
				${num * 2} 
				${num * 3} 
				${num * 4} 	
				${num * 5} 
				${num * 6} 
				${num * 7} 
				${num * 8} 
				${num * 9} 
				${num * 10}`,
    );
  }

  function Questao5() {
    useEffect(() => {
      const num1 = Number(input);
      const num2 = Number(input);
      let total = 0;
      let totalPar = 0;
      let totalImpar = 0;
      for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
          totalPar += i;
          total++;
        } else {
          totalImpar += i;
          total++;
        }
      }
      setOutputString(
        `O intervalo entre ${num1} e ${num2} tem ${total} numeros, sendo ${totalPar} pares e ${totalImpar} impares`,
      );
    }, []);
    return (
      <>
        <h2>Intervalo entre 1 e 100 tem: </h2>
        <p>{output.toString()}</p>
      </>
    );
  }

  // function Questao6() {
  // 	useEffect(() => {
  // 		let total = 0;
  // 		for (let i = 1; i <= 100; i++) {
  // 			total += i;
  // 		}
  // 		setOutput(total);
  // 	}, []);
  // 	return (
  // 		<>
  // 			<h2>Soma dos numeros de 1 a 100 seria: </h2>
  // 			<p>{output.toString()}</p>
  // 		</>
  // 	);
  // }

  function Questao7() {}
  //Return principal
  return (
    <>
      <h1>Atividades</h1>

      <div className="atividades grid grid-rows-1 py-10 grid-cols-1 columns-1">
        <input
          type="text"
          value={input}
          onChange={mudarInput}
          placeholder="digite um numero"
        />
        <button onClick={questao1}>Questao 1</button>
        <button onClick={questao2}>Questao 2</button>
        <button onClick={Questao3}>Questao 3</button>
        <button onClick={Questao4}>Questao 4</button>
        <button onClick={Questao5}>Questao 5</button>

        <p>{outputString}</p>
      </div>
    </>
  );
}
