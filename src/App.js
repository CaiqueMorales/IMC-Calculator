import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState(0);

    const varPeso = (p, sp) => {
        
        return(
            <div className="text_area">
                <label>
                    Digite seu peso:
                </label>
                <input type="text" value={p} onChange={(e) => {sp(e.target.value)}} placeholder="Ex: 76.7"/>
            </div>
        )
    
    }

    const varAltura = (a, sa) => {

        return(
            <div className="text_area">
                <label>
                    Digite sua altura:
                </label>
                <input type="text" value={a} onChange={(e) => {sa(e.target.value)}} placeholder="Ex: 1.76" />
            </div>
        )
    
    }

    const fazerCalculo = (p, a, sr) => {

        const calc = () => {
            sr(p / (a * a))
        }
    
        return(
            <button onClick={calc}>Calcular</button>
        )
    
    }

    const fraseResultado = (r) => {
        return(
            <div id="frase">
                <p>O seu IMC é de {r.toFixed(2)}</p>
            </div>
        )
    
    }

    return(
        <div id="container">
            <div className="">
                {varAltura(altura, setAltura)}
                {varPeso(peso, setPeso)}
                {fazerCalculo(peso, altura, setResultado)}
            </div>
            <div className="conteudo_resultado">
                {fraseResultado(resultado)}
            </div>
        </div>
    )

}

export default App;