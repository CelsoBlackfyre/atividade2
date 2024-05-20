import React, { useState } from "react";

const Exercicio2: React.FC = () => {
	const [numero, setNumero] = useState<number>(0);
	const [resultado, setResultado] = useState<string>("");

	const verificarParImpar = () => {
		if (numero % 2 === 0) {
			setResultado("O numero e par");
		} else {
			setResultado("O numero e impar");
		}
	};
	return (
		<div>
			<h2>Exercicio2: Determinar se um numero e par ou impar</h2>
			<input
				type="number"
				value={numero}
				onChange={(e) => {
					setNumero(parseInt(e.target.value));
				}}
			/>
			<button onClick={verificarParImpar}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</div>
	);
};
export default Exercicio2;
