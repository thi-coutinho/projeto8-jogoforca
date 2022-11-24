export default function Jogo({ jogoIniciado, setJogoIniciado, erros, palavra, setPalavra, palavras,letrasCorretas }) {
    
    function escolheAleatorio(lista) {
        // retorna já uma a palavra escolhida aleatoriamente em forma de lista
        const items = lista.length
        const indice = Math.floor(Math.random() * items)
        const arrayItem = [...lista[indice]]
        return arrayItem
    }
    function escolherPalavra() {
        if (jogoIniciado) return
        setJogoIniciado(true)
        const palavraEscolhida = escolheAleatorio(palavras)
        setPalavra(palavraEscolhida)
        console.log(palavraEscolhida)
    }
    return (
        <div className="jogo">
            <img src={`./assets/forca${erros}.png`} alt=""/>
            <div className="containerVertical">
                <button onClick={escolherPalavra} disabled={jogoIniciado}>Escolher Palavra</button>
                {palavra ? <div className="underline">{palavra.map((l,i) => (
                <span key={i} > { letrasCorretas.includes(l) ? ` ${l} `:" _ "}</span>)
                )}</div> : <></>}
            </div>
        </div>
    )
}