function PkmonDisplay({pkmon}){
    
    return(
        <div className="pkmonDisplay" >
            <div className = "pkmonNameHeading">
                <h3 className = "pkmonName">{pkmon.name}</h3>
                <h3>{pkmon.id}</h3>
            </div>
            <img src = {pkmon.sprites.front_default}></img>
            <button>Learn more</button>
        </div>
    )
}
export default PkmonDisplay;