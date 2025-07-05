
function EndIdSlider({setEndId, pkmonEndId, pkmonObjArr}){
    async function endIdChange(endId){
        for(let  i = pkmonObjArr.length + 1; i <= endId; i++){
            await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(resp => resp.json()).then((resp)=>{pkmonObjArr.push(resp)});
        }
        setEndId(endId);
        
    }
    return(
        <>
            <input type="range" defaultValue = {0} max={200} onChange={(rangeE) => endIdChange(rangeE.target.value)}></input>
            <p>{pkmonEndId}</p>
        </>
    )
}
export default EndIdSlider;