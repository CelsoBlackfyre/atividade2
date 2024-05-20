import React, { useState } from "react";
import "./atividades.css";
const Exercicio1: React.FC = () => {
	const [num, setNum] = useState<number | string>(0);
	const [resultado, setResultado] = useState<string>("");
	const numero = Number(num);
	const verificarNumero = () => {
		if (numero > 0) {
			setResultado("O numero e positivo");
		} else if (numero < 0) {
			setResultado("O numero e negativo");
		} else {
			setResultado("O numero e igual a zero");
		}
	};

	return (
		<div>
			<h2 className="font-bold text-2xl">
				Exercicio 1: Crie um programa que determine se um numero é positivo,
				negativo ou igual a zero.
			</h2>
			<input
				className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 pb-8 pt-6 text-base hover:border-[#fff] cursor-pointer transition"
				type="number"
				value={num}
				defaultValue={"Hello"}
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>

			<button
				className="cursor-pointer text-white font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800"
				onClick={verificarNumero}>
				Button
			</button>
			<p>Resposta: {resultado}</p>
		</div>
	);
};

export default Exercicio1;
