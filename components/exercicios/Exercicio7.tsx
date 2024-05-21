import { useState } from "react";

const Exercicio7 = () => {
	const [resultado, setResultado] = useState<number>(0);

	function maiorArray() {
		const vetor: Array<number> = [10, 20, 39, 76, 22, 17, 7];
		let maior = 0;
		for (let i = 0; i < vetor.length; i++) {
			if (vetor[i] > vetor[i - 1]) {
				maior = vetor[i];
			}
		}
		setResultado(maior);
	}

	return (
		<div>
			<h2>
				Exercicio 7: Crie um programa que determine o maior elemento de um array
				([10, 20, 39, 76, 22, 17, 7])
			</h2>
			<button onClick={maiorArray}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</div>
	);
};

export default Exercicio7;
