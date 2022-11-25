export default function Underlines({palavra,letrasClicadas,statusJogo}) {
    let letrasUnderlines
    if (statusJogo==="prejogo") {
        return <></>
    } else if (statusJogo==="jogando"){
        letrasUnderlines = palavra.map((l) => letrasClicadas.includes(l) ? l:" _ ")
    } else {
        letrasUnderlines = palavra
    }

    return (
        <div className={`underline ${statusJogo}`}>{letrasUnderlines.map((l,i) => (
            <span key={i} > {l} </span>)
            )}</div>
    )
}