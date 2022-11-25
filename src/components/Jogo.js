import Underlines from "./Underlines"

export default function Jogo({ statusJogo,
    setStatusJogo, erros, setErros, palavra, setPalavra, palavras, letrasClicadas, setLetrasClicadas, setChute }) {

    function escolheAleatorio(lista) {
        // retorna já uma a palavra escolhida aleatoriamente em forma de lista
        const items = lista.length
        const indice = Math.floor(Math.random() * items)
        return [...lista[indice]]
    }
    function escolherPalavra() {
        setStatusJogo("jogando")
        setLetrasClicadas("")
        setErros(0)
        setChute("")
        const palavraEscolhida = escolheAleatorio(palavras)
        setPalavra(palavraEscolhida)
    }
    return (
        <div className="jogo">
            <img data-test="game-image" src={`./assets/forca${erros}.png`} alt="" />
            <div className="containerVertical">
                <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
                <Underlines palavra={palavra} letrasClicadas={letrasClicadas} statusJogo={statusJogo} />
            </div>
        </div>
    )
}

