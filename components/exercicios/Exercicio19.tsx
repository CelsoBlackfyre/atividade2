import { useState } from "react";

function Exercicio19() {
	const [arr, setArr] = useState<number[]>([]);
	const loopDec = () => {
		let i = 10;
		const ar = [];
		while (i > 0) {
			console.log(i);
			ar.push(i);
			i--;

			setArr(ar);
		}
	};

	return (
		<>
			<h2>Crie um loop que imprima de 10 a 0</h2>
			<button onClick={loopDec}>Verificar</button>
			<p>Resposta: {arr.join(" | ")}</p>
		</>
	);
}

export default Exercicio19;
