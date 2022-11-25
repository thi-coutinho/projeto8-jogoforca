import Underlines from "./Underlines"

export default function Jogo({statusJogo,
    setStatusJogo,erros, setErros, palavra, setPalavra, palavras,letrasClicadas,setLetrasClicadas,setChute }) {
    
    function escolheAleatorio(lista) {
        // retorna já uma a palavra escolhida aleatoriamente em forma de lista
        const items = lista.length
        const indice = Math.floor(Math.random() * items)
        const arrayItem = [...lista[indice]]
        return arrayItem
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
            <img data-test="game-image" src={`./assets/forca${erros}.png`} alt=""/>
            <div className="containerVertical">
                <button data-test="choose-word" onClick={escolherPalavra}>Escolher Palavra</button>
                <Underlines palavra={palavra} letrasClicadas = {letrasClicadas} statusJogo={statusJogo}/>
                {/* one-liner for Underlines below  */}
                {/* {palavra ? <div className="underline">{palavra.map((l,i) => (
                <span key={i} > { letrasClicadas.includes(l) ? ` ${l} `:" _ "}</span>)
                )}</div> : <></>} */}
            </div>
        </div>
    )
}

