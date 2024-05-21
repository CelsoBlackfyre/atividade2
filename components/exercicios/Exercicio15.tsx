import { useState } from "react";

function Exercicio15() {
	const [resultado, setResultado] = useState<number>(0);

	const numerosPares = () => {
		let i = 0;
		const par = [];
		while (i <= 10) {
			if (i % 2 === 0) {
				par.push(i);
			}
			i++;
		}
		const soma = par.reduce((acumulado, valorAtual) => {
			return acumulado + valorAtual;
		}, 0);
		setResultado(soma);
	};

	return (
		<>
			<h2>
				Utilize um loop while para imprimir a soma dos numeros pares de 0 a 10
			</h2>
			<button onClick={numerosPares}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</>
	);
}

export default Exercicio15;
