function PkmonDisplay({pkmon}){
    console.log(pkmon)
    return(
        <div className="PkmonDisplay" key={pkmon.name}>
            <h1>{pkmon.name}</h1>
            <p>hi</p>
        </div>
    )
}
export default PkmonDisplay;