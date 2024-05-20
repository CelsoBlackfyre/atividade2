import React from "react";
import { useState } from "react";

function Exercicio20() {
	let i = 10;
	do {
		document.write(" | " + i);
		i--;
	} while (i > 0);

	return (
		<>
			<h2>
				Crie um loop do while que imprima os numeros de 10 a 1 em ordem
				decrescente.
			</h2>
			<p>Resposta: {i}</p>
		</>
	);
}

export default Exercicio20;
