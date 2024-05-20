import React from "react";
import { useState } from "react";

function Exercicio16() {
	const cincoPrimeirosNumeros = () => {
		let i = 0;
		const num = [];
		while (i <= 5) {
			num.push(i);
			i++;
		}
		return num.join(" | ");
	};

	return (
		<>
			<h2>Implemente um loop while para exibir os numeros de 1 a 5</h2>
			<p>Resposta: {cincoPrimeirosNumeros()}</p>
		</>
	);
}

export default Exercicio16;
