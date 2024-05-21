import React from "react";

const Exercicio22: React.FC = () => {
	const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<div>
			<h2>Exercicio 22: Exibir numeros de 1 ao 10</h2>
			<div>
				{numeros.map((number) => (
					<span key={number}> | {number}</span>
				))}
			</div>
		</div>
	);
};

export default Exercicio22;
