export default function Letras({alfabeto,palavra,statusJogo,setStatusJogo,erros,setErros,letrasClicadas,setLetrasClicadas}) {
    

    function checkLetra(letra) {
        if (letrasClicadas.includes(letra)) return

        const letrasClicadasUpdate = letrasClicadas + letra
        setLetrasClicadas(letrasClicadasUpdate)

        if (palavra.toString().includes(letra)) {
            if (palavra.every((p)=>letrasClicadasUpdate.includes(p))){
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
                        <button 
                            data-test="letter" 
                            key={letra} 
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