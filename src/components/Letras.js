import { useState } from "react"

export default function Letras({alfabeto,palavra,statusJogo,setStatusJogo,erros,setErros,letrasCorretas,setLetrasCorretas}) {
    const [letrasClicadas,setLetraClicadas] = useState("")

    function checkLetra(letra) {
        if (letrasClicadas.includes(letra)) return

        setLetraClicadas(letrasClicadas+letra)

        if (palavra.toString().includes(letra)) {
            setLetrasCorretas(letrasCorretas+letra)
            if (palavra.every((p)=>(letrasCorretas+letra).includes(p))){
                setStatusJogo("ganhou")
            } 
        } else {
            setErros(erros+1)
            if (erros+1 === 6) setStatusJogo("perdeu")
        }
        
    }

    function desabilitaBotoes(statusJogo,letra, letrasClicadas) {
        if (statusJogo !== "jogando"){
            return true
        } else if (letrasClicadas.includes(letra)) {
            return true
        } else return false
    }
    return (
        <div className="letras">
            {
                alfabeto.map(
                    (letra) => (
                        <button key={letra} 
                            onClick={()=>checkLetra(letra)} 
                            disabled={desabilitaBotoes(statusJogo,letra, letrasClicadas)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    )
                )
            }
        </div>
    )
}