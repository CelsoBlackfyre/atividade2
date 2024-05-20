import { useState } from "react";
import "./App.css";
import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Exercicio1 from "../components/exercicios/Exercicio1";
import Exercicio2 from "../components/exercicios/Exercicio2";
import Exercicio3 from "../components/exercicios/Exercicio3";
import Exercicio4 from "../components/exercicios/Exercicio4";
import Exercicio5 from "../components/exercicios/Exercicio5";
import Exercicio6 from "../components/exercicios/Exercicio6";
import Exercicio7 from "../components/exercicios/Exercicio7";
import Exercicio8 from "../components/exercicios/Exercicio8";
import Exercicio9 from "../components/exercicios/Exercicio9";
import Exercicio10 from "../components/exercicios/Exercicio10";
import Exercicio11 from "../components/exercicios/Exercicio11";
import Exercicio12 from "../components/exercicios/Exercicio12";
import Exercicio13 from "../components/exercicios/Exercicio13";
import Exercicio14 from "../components/exercicios/Exercicio14";
import Exercicio15 from "../components/exercicios/Exercicio15";
import Exercicio16 from "../components/exercicios/Exercicio16";
import Exercicio17 from "../components/exercicios/Exercicio17";
import Exercicio18 from "../components/exercicios/Exercicio18";
import Exercicio19 from "../components/exercicios/Exercicio19";
import Exercicio20 from "../components/exercicios/Exercicio20";
import Exercicio21 from "../components/exercicios/Exercicio21";
import Exercicio22 from "../components/exercicios/Exercicio22";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/exercicio1" element={<Exercicio1 />} />
				<Route path="/exercicio2" element={<Exercicio2 />} />
				<Route path="/exercicio3" element={<Exercicio3 />} />
				<Route path="/exercicio4" element={<Exercicio4 />} />
				<Route path="/exercicio5" element={<Exercicio5 />} />
				<Route path="/exercicio6" element={<Exercicio6 />} />
				<Route path="/exercicio7" element={<Exercicio7 />} />
				<Route path="/exercicio8" element={<Exercicio8 />} />
				<Route path="/exercicio9" element={<Exercicio9 />} />
				<Route path="/exercicio10" element={<Exercicio10 />} />
				<Route path="/exercicio11" element={<Exercicio11 />} />
				<Route path="/exercicio12" element={<Exercicio12 />} />
				<Route path="/exercicio13" element={<Exercicio13 />} />
				<Route path="/exercicio14" element={<Exercicio14 />} />
				<Route path="/exercicio15" element={<Exercicio15 />} />
				<Route path="/exercicio16" element={<Exercicio16 />} />
				<Route path="/exercicio17" element={<Exercicio17 />} />
				<Route path="/exercicio18" element={<Exercicio18 />} />
				<Route path="/exercicio19" element={<Exercicio19 />} />
				<Route path="/exercicio20" element={<Exercicio20 />} />
				<Route path="/exercicio21" element={<Exercicio21 />} />
				<Route path="/exercicio22" element={<Exercicio22 />} />
			</Routes>
		</Router>
	);
}

export default App;
