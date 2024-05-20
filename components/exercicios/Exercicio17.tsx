import React from "react";
import { useState } from "react";

function Exercicio17() {
	const [resultado, setResultado] = useState<number>(0);

	const arMul = [];
	const arDiv = [];
	const arSom = [];
	const arSub = [];
	let i = 0;
	let mult = 0;
	let sub = 0;
	let som = 0;
	let div = 0;
	while (i <= 10) {
		div = 7 / i;
		sub = 7 - i;
		som = 7 + i;
		mult = 7 * i;
		arDiv.push(div);
		arSub.push(sub);
		arSom.push(som);
		arMul.push(mult);
		i++;
	}
	return (
		<>
			<h2>Crie um loop while para imprimir a tabuada do 7</h2>
			<p>Resposta:</p>
			<p>Mutiplicacao</p>
			{arMul.map((item) => (
				<li key={item}>{item}</li>
			))}
			<div>_________________________________</div>
			<p>Divisao</p>
			{arDiv.map((item) => (
				<li key={item}>{item}</li>
			))}
			<div>_________________________________</div>
			<p>Soma</p>
			{arSom.map((item) => (
				<li key={item}>{item}</li>
			))}
			<div>_________________________________</div>
			<p>Subtracao</p>
			{arSub.map((item) => (
				<li key={item}>{item}</li>
			))}
			<div>_________________________________</div>
		</>
	);
}

export default Exercicio17;
