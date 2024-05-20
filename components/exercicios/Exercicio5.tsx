import React, { useEffect } from "react";
import { useState } from "react";

const Exercicio5: React.FC = () => {
	const [num, setNum] = useState<number>(0);
	const [num2, setNum2] = useState<number>(0);
	const [resultado, setResultado] = useState<string>("");

	const verificarIntervalo = () => {
		let total = 0;
		let totalPar = 0;
		let totalImpar = 0;
		for (let i = num; i < num2; i++) {
			if (i % 2 === 0) {
				setResultado("Par");
				totalPar++;
				total++;
			} else {
				setResultado("Impar");
				totalImpar++;
				total++;
			}
		}

		setResultado(
			`O intervalo entre ${num} e ${num2} tem ${total} numeros, sendo ${totalPar} pares e ${totalImpar} impares`
		);
	};
	return (
		<div>
			<h2>
				Exercicio 5: Crie um programa que calcule quantos numeros pares e
				impares existem entre dois numeros informados pelo usuario
			</h2>
			<label htmlFor="input1">
				Informe o primeiro numero:
				<input
					type="number"
					value={num}
					onChange={(e) => {
						setNum(parseInt(e.target.value));
					}}
				/>
			</label>
			<label htmlFor="input2">
				Informe o segundo numero:
				<input
					type="number"
					value={num2}
					onChange={(e) => {
						setNum2(parseInt(e.target.value));
					}}
				/>
			</label>
			<button onClick={verificarIntervalo}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</div>
	);
};

export default Exercicio5;
