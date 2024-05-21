import { useState } from "react";

function Exercicio10(str: string) {
	const [frase, setFrase] = useState("");
	str = frase;
	const minuscula = str.toLowerCase();
	const vogais = ["a", "e", "i", "o", "u"];

	const resultado = [...minuscula].filter((char) =>
		vogais.includes(char)
	).length;
	return (
		<>
			<div>
				<h2>
					Exercicio 10: Crie um programa que determine quantas vogais existem em
					uma frase
				</h2>
				<input
					type="text"
					value={frase}
					onChange={(e) => setFrase(e.target.value)}
				/>

				<p>Resposta: {resultado}</p>
			</div>
		</>
	);
}

export default Exercicio10;
