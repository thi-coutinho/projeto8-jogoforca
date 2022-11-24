import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useState } from "react";
function App() {
  const [jogoIniciado,setJogoIniciado] = useState(false)
  const [palavra,setPalavra] = useState([])
  const [erros,setErros] = useState(0)
  const [letrasCorretas,setLetrasCorretas] = useState("")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  

  return (
    <main>
      <Jogo jogoIniciado={jogoIniciado}
            setJogoIniciado={setJogoIniciado}
            erros={erros}
            palavra={palavra}
            setPalavra={setPalavra}
            palavras={palavras}
            letrasCorretas={letrasCorretas}
      />
      <Letras alfabeto={alfabeto}
              palavra={palavra}
              jogoIniciado={jogoIniciado}
              erros={erros}
              setErros={setErros}
              letrasCorretas={letrasCorretas}
              setLetrasCorretas={setLetrasCorretas}

      />
      <Chute/>
    </main>
  );
}

export default App;
