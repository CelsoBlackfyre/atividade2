function Exercicio14() {
	const calcularMultiplos3 = () => {
		let i = 0;
		const resultado = [];
		while (i <= 5) {
			resultado.push(i * 3);
			i++;
		}
		return resultado.join(" | ");
	};
	return (
		<>
			<div>
				<h2>
					Exercicio 14: Crie um programa que calcule os 5 primeiros multiplos de
					3
				</h2>
				<p>Resposta: {calcularMultiplos3()}</p>
			</div>
		</>
	);
}

export default Exercicio14;
