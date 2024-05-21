import React, { useState } from "react";
import "./atividades.css";

const Exercicio4: React.FC = () => {
	const [num, setNum] = useState<number>(0);
	const [resultMult, setResultMult] = useState<string[]>([]);
	const [resultDiv, setResultDiv] = useState<string[]>([]);
	const [resultSom, setResultSom] = useState<string[]>([]);
	const [resultSub, setResultSub] = useState<string[]>([]);

	const tabuada = () => {
		const arMult: string[] = [];
		const arDiv: string[] = [];
		const arSom: string[] = [];
		const arSub: string[] = [];

		for (let i = 1; i <= 10; i++) {
			arMult.push(`${num} * ${i} = ${num * i}`);
			arDiv.push(`${num} / ${i} = ${num / i}`);
			arSom.push(`${num} + ${i} = ${num + i}`);
			arSub.push(`${num} - ${i} = ${num - i}`);
		}

		setResultMult(arMult);
		setResultDiv(arDiv);
		setResultSom(arSom);
		setResultSub(arSub);
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
			<span>{resultMult.join(" | ")}</span>
			<p>Resposta Divisao: </p>
			<span>{resultDiv.join(" | ")}</span>
			<p>Resposta Soma: </p>
			<span>{resultSom.join(" | ")}</span>
			<p>Resposta Subtracao:</p>
			<span>{resultSub.join(" | ")}</span>
		</div>
	);
};

export default Exercicio4;
