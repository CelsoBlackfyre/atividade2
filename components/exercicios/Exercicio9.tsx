import { useState } from "react";

function Exercicio9() {
	const [num, setNum] = useState(0);
	const [resultado, setResultado] = useState(0);
	let fib = 0;
	let num1 = 0;
	let num2 = 1;
	const arFib = [0, 1];
	const Exercicio9 = () => {
		for (let i = 0; i < num; i++) {
			fib = num1 + num2;
			num1 = num2;
			num2 = fib;
			arFib.push();
		}
		setResultado(fib);
	};

	return (
		<>
			<div>
				<h2>
					Exercicio 9: Crie um programa que calcule o fibonacci de um numero
					informado pelo usuario
				</h2>

				<input
					type="number"
					value={num}
					onChange={(e) => setNum(parseInt(e.target.value))}
				/>

				<button onClick={Exercicio9}>Verificar</button>
				<p>Resposta: {` ${resultado} `}</p>
			</div>
		</>
	);
}

export default Exercicio9;
