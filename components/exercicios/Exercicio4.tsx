import React from "react";
import { useState } from "react";
import "./atividades.css";

const Exercicio4: React.FC = () => {
	const [num, setNum] = useState<number>(0);
	const [resultado, setResultado] = useState<string>("");
	const [resultado2, setResultado2] = useState<string>("");
	const [resultado3, setResultado3] = useState<string>("");
	const [resultado4, setResultado4] = useState<string>("");

	let arMult = [];
	let arDiv = [];
	let arSom = [];
	let arSub = [];
	const tabuada = () => {
		for (let i = 1; i <= 10; i++) {
			setResultado(
				`${arMult.push(num * i)} ${arDiv.push(num / i)} ${arSom.push(
					num + i
				)} ${arSub.push(num - i)}`
			);
			setResultado(`${arMult} | `);
			setResultado2(`${arDiv} | `);
			setResultado3(`${arSom}`);
			setResultado4(`${arSub}`);
		}
	};

	return (
		<div>
			<h2>Exercicio 4: Crie um programa que calcule a tabuada de um numero</h2>
			<input
				type="number"
				value={num}
				onChange={(e) => {
					setNum(parseInt(e.target.value));
				}}
			/>
			<button onClick={tabuada}>Verificar</button>
			<p>Resposta Multiplicacao:</p>
			<span>{resultado}</span>
			<p>Resposta Divisao: </p>
			<span>{resultado2}</span>
			<p>Resposta Soma: </p>
			<span>{resultado3}</span>
			<p>Resposta Subtracao:</p>
			<span> {resultado4}</span>
		</div>
	);
};

export default Exercicio4;
