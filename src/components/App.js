import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useState } from "react";
function App() {
  const [statusJogo,setStatusJogo] = useState("prejogo") // pode assumir os valores "prejogo", "jogando", "perdeu", "ganhou"
  const [palavra,setPalavra] = useState([])
  const [erros,setErros] = useState(0)
  const [letrasCorretas,setLetrasCorretas] = useState("")
  
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  

  return (
    <main>
      <Jogo statusJogo = {statusJogo}
            setStatusJogo = {setStatusJogo}
            erros={erros}
            palavra={palavra}
            setPalavra={setPalavra}
            palavras={palavras}
            letrasCorretas={letrasCorretas}
      />
      <Letras alfabeto={alfabeto}
              palavra={palavra}
              statusJogo = {statusJogo}
              setStatusJogo = {setStatusJogo}
              erros={erros}
              setErros={setErros}
              letrasCorretas={letrasCorretas}
              setLetrasCorretas={setLetrasCorretas}

      />
      <Chute  palavra={palavra}
              statusJogo = {statusJogo}
              setStatusJogo = {setStatusJogo}
              setErros={setErros}

      />
    </main>
  );
}

export default App;
