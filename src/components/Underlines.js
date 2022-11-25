export default function Underlines({ palavra, letrasClicadas, statusJogo }) {
    let letrasUnderlines
    const palavraString = palavra.toString().replaceAll(",", "")
    if (statusJogo === "prejogo") {
        return <></>
    } else if (statusJogo === "jogando") {

        letrasUnderlines = palavra.map((l) => (
            letrasClicadas.includes(l.normalize('NFD').replace(/[\u0300-\u036f]/g, '')) ? l : " _ "))
        letrasUnderlines = letrasUnderlines.toString().replaceAll(",", "")
    } else {
        letrasUnderlines = palavraString
    }


    return (
        <div data-test="word" data-answer={statusJogo !== "prejogo" ? `${palavraString}` : ""} className={`underline ${statusJogo}`}>{letrasUnderlines}</div>
    )
}