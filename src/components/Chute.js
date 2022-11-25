export default function Chute({ palavra, statusJogo, setStatusJogo, setErros, chute, setChute }) {
    const fatalError = 6

    function chutarPalavra() {
        const palavraString = palavra.toString().replaceAll(",", "")
        if (palavraString === chute) {
            setStatusJogo("ganhou")
        } else {
            setStatusJogo("perdeu")
            setErros(fatalError)
        }
    }


    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input"
                onChange={(e) => setChute(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" ? chutarPalavra() : null}
                type="text" value={chute}
                disabled={statusJogo !== "jogando"} />
            <button data-test="guess-button"
                onClick={chutarPalavra}
                disabled={statusJogo !== "jogando"}
            >Chutar
            </button>
        </div>
    )
}