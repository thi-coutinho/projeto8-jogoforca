import Underlines from "./Underlines"

export default function Jogo({statusJogo,
    setStatusJogo,erros, palavra, setPalavra, palavras,letrasCorretas }) {
    
    function escolheAleatorio(lista) {
        // retorna já uma a palavra escolhida aleatoriamente em forma de lista
        const items = lista.length
        const indice = Math.floor(Math.random() * items)
        const arrayItem = [...lista[indice]]
        return arrayItem
    }
    function escolherPalavra() {
        setStatusJogo("jogando")
        const palavraEscolhida = escolheAleatorio(palavras)
        setPalavra(palavraEscolhida)
    }
    return (
        <div className="jogo">
            <img src={`./assets/forca${erros}.png`} alt=""/>
            <div className="containerVertical">
                <button onClick={escolherPalavra}>Escolher Palavra</button>
                <Underlines palavra={palavra} letrasCorretas = {letrasCorretas} statusJogo={statusJogo}/>
                {/* one-liner for Underlines below  */}
                {/* {palavra ? <div className="underline">{palavra.map((l,i) => (
                <span key={i} > { letrasCorretas.includes(l) ? ` ${l} `:" _ "}</span>)
                )}</div> : <></>} */}
            </div>
        </div>
    )
}

