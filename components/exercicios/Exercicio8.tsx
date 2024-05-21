import { useState } from "react";
function Exercicio8() {
	const [palavra, setPalavra] = useState<string>("");
	const [resultado, setResultado] = useState<string>("");

	const verificarPalindromo = () => {
		const palavraNormal = palavra.toLowerCase();
		const palavraAoContrario = palavraNormal.split("").reverse().join("");

		if (palavraNormal === palavraAoContrario) {
			setResultado("A palavra é palíndroma");
		} else {
			setResultado("A palavra não é palíndroma");
		}
	};

	return (
		<>
			<h2>Elabore um código que verifica se uma palavra é palíndroma ou não</h2>
			<input
				type="text"
				value={palavra}
				onChange={(e) => setPalavra(e.target.value)}
			/>
			<button onClick={verificarPalindromo}>Verificar</button>
			<p>Resposta: {resultado}</p>
		</>
	);
}

export default Exercicio8;
