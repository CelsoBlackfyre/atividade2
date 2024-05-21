function Exercicio11() {
	const ar = [10, 20, 30, 40, 50];

	ar.forEach((element) => {
		console.log(element);
	});

	return (
		<div>
			<h2>
				Exercicio 11: Crie um programa que mostre o valor de cada elemento do
				array atraves de um foreach
			</h2>

			<p>Resposta: {` ${ar} `}</p>
		</div>
	);
}

export default Exercicio11;
