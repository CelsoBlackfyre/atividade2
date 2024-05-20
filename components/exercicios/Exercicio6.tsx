import React from "react";
import { useState } from "react";

const Exercicio6: React.FC = () => {
	const [resultado, setResultado] = useState<string>("");

	const somar = () => {
		let total = 0;
		for (let i = 1; i <= 100; i++) {
			total += i;
		}
		setResultado(total.toString());
	};

	return (
		<>
			<h2>
				Exercicio 6: Escreva um codigo que calcule e exiba a soma dos numeros de
				1 a 100
			</h2>

			<button onClick={somar}>Somar</button>
			<p>Resposta: {resultado}</p>
		</>
	);
};

export default Exercicio6;
