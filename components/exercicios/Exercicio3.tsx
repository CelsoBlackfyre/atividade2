import React from "react";
import { useState } from "react";

const Exercicio3: React.FC = () => {
	const [num, setNum] = useState<number>(0);
	const [resultado, setResultado] = useState<string>("");

	const verificarNota = () => {
		if (num >= 60) {
			setResultado("O aluno foi aprovado");
		} else if (num < 40) {
			setResultado("O aluno foi reprovado");
		} else if (num >= 40 && num <= 60) {
			setResultado("O aluno ficou em recuperacao");
		}
	};

	return (
		<div>
			<h2>
				Exercicio 3: Verificar se o aluno foi aprovado, reprovado ou se ficou em
				recuperacao
			</h2>
			<span>A nota necessaria para passar seria 60 pontos </span>
			<input
				type="number"
				value={num}
				onChange={(e) => {
					setNum(parseInt(e.target.value));
				}}
			/>
			<button onClick={verificarNota}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</div>
	);
};

export default Exercicio3;
