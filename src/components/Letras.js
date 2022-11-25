export default function Letras({ alfabeto, palavra, statusJogo, setStatusJogo, erros, setErros, letrasClicadas, setLetrasClicadas }) {
    const fatalError = 6

    function checkLetra(letra) {
        if (letrasClicadas.includes(letra)) {
            return
        }

        const letrasClicadasUpdate = letrasClicadas + letra
        setLetrasClicadas(letrasClicadasUpdate)
        const palavraString = palavra.toString()
            .replaceAll(",", "")
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        if (palavraString.includes(letra)) {
            if ([...palavraString].every((p) => letrasClicadasUpdate.includes(p))) {
                setStatusJogo("ganhou")
            }
        } else {
            setErros(erros + 1)
            if (erros + 1 === fatalError) {
                setStatusJogo("perdeu")
            }
        }

    }

    function desabilitaBotoes(statusJogo, letra, letrasClicadas) {
        if (statusJogo !== "jogando") {
            return true
        } else if (letrasClicadas.includes(letra)) {
            return true
        } else {
            return false
        }
    }
    return (
        <div className="letras">
            {
                alfabeto.map(
                    (letra) => (
                        <button
                            data-test="letter"
                            key={letra}
                            onClick={() => checkLetra(letra)}
                            disabled={desabilitaBotoes(statusJogo, letra, letrasClicadas)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    )
                )
            }
        </div>
    )
}