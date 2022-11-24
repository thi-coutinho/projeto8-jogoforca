import { useState } from "react"

export default function Letras(props) {
    const [letrasClicadas,setLetraClicadas] = useState("")

    function checkLetra(letra) {
        if (letrasClicadas.includes(letra)) return

        setLetraClicadas(letrasClicadas+letra)

        if (props.palavra.toString().includes(letra)) {
            props.setLetrasCorretas(props.letrasCorretas+letra)
        } else {
            props.setErros(props.erros+1)
        }
        
    }
    return (
        <div className="letras">
            {
                props.alfabeto.map(
                    (letra) => (
                        <button key={letra} 
                            onClick={()=>checkLetra(letra)} 
                            disabled={!props.jogoIniciado || letrasClicadas.includes(letra)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    )
                )
            }
        </div>
    )
}