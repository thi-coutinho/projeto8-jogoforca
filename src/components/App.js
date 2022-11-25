import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useState } from "react";
function App() {
  const [statusJogo,setStatusJogo] = useState("prejogo") // pode assumir os valores "prejogo", "jogando", "perdeu", "ganhou"
  const [palavra,setPalavra] = useState([])
  const [erros,setErros] = useState(0)
  const [letrasClicadas,setLetrasClicadas] = useState("")
  const [chute,setChute] = useState("")
  
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  

  return (
    <main>
      <Jogo statusJogo = {statusJogo}
            setStatusJogo = {setStatusJogo}
            erros={erros}
            setErros={setErros}
            palavra={palavra}
            setPalavra={setPalavra}
            palavras={palavras}
            letrasClicadas={letrasClicadas}
            setLetrasClicadas={setLetrasClicadas}
            setChute={setChute}
      />
      <Letras alfabeto={alfabeto}
              palavra={palavra}
              statusJogo = {statusJogo}
              setStatusJogo = {setStatusJogo}
              erros={erros}
              setErros={setErros}
              letrasClicadas={letrasClicadas}
              setLetrasClicadas={setLetrasClicadas}

      />
      <Chute  palavra={palavra}
              statusJogo = {statusJogo}
              setStatusJogo = {setStatusJogo}
              setErros={setErros}
              chute={chute}
              setChute={setChute}

      />
    </main>
  );
}

export default App;
