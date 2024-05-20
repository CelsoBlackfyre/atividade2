import React from "react";
import { useState } from "react";

function Exercicio18() {
	let i = 0;
	let ar = [];
	while (i <= 5) {
		ar.push(i * 2);
		i++;
	}

	return (
		<div>
			<h2>
				Exercício 18: Desenvolva um while loop para calcular e exibir os
				quadrados dos numeros de 1 a 5
			</h2>

			<p>Resposta: {` ${ar} `}</p>
		</div>
	);
}

export default Exercicio18;
