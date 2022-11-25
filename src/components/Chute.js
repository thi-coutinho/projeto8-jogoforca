export default function Chute({palavra,statusJogo,setStatusJogo,setErros,chute,setChute}) {
    

    function chutarPalavra() {
        const palavraString = palavra.toString().replaceAll(",","")
        if (palavraString === chute){
            setStatusJogo("ganhou")
        } else {
            setStatusJogo("perdeu")
            setErros(6)
        }
    }


    return(
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input onChange={(e)=>setChute(e.target.value)} type="text" value={chute}/>
            <button onClick={chutarPalavra} disabled={statusJogo!=="jogando"}>Chutar</button>
        </div>
    )
}