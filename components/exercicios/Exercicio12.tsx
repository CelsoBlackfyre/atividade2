import React from "react";
import { useState } from "react";

function Exercicio12() {
	const [ar, setAr] = useState<Array<string>>([]);

	const imprimirArray = () => {
		const arrNome = ["Maria", "25", "Engenharia"];
		arrNome.forEach((element) => {
			console.log(element);
		});

		setAr(arrNome);
	};
	return (
		<>
			<h2>
				Percorra um array associativo utilizando a estrutura foreach e exiba
				tanto as chaves quanto os valores $aluno
			</h2>

			<button onClick={imprimirArray}>Verificar</button>
			<p>Resposta: {ar.join(" ")}</p>
		</>
	);
}

export default Exercicio12;
