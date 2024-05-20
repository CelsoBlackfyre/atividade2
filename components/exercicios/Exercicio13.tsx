import React from "react";
import { useState } from "react";

function Exercicio13() {
	const [valor, setValor] = useState<number>(0);
	const [valorar, setValorAr] = useState<Array<number>>([]);

	const arr: number[] = [];
	let num = 0;

	const calcularMedia = () => {
		for (let i = 0; i < valor; i++) {
			num = Math.random() * 100;
			arr.push(num);
		}
		setValorAr(arr);
		setValor(arr.reduce((a, b) => a + b, 0) / arr.length);
	};

	return (
		<>
			<h2>
				Exercicio 13: Utilize a estrutura foreach para calcular a media de
				valores em um array
			</h2>
			<label htmlFor="input">Informe o tamanho do array:</label>
			<input
				type="number"
				value={valor}
				onChange={(e) => setValor(parseInt(e.target.value))}
			/>
			<button onClick={calcularMedia}>Verificar</button>
			<p>Array: {valorar.join(" | ")}</p>
			<p>Resposta: </p>
			<p>Media: {valor}</p>
		</>
	);
}

export default Exercicio13;
