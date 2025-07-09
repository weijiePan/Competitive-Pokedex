
function EndIdSlider({setPkmonObjArr, pkmonObjArr}){
    async function fetchPkmons(endId){
        const tempArr = [];
        for(let  i = pkmonObjArr.length + 1; i <= endId; i++){
            await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(resp => resp.json()).then((resp)=>{tempArr.push(resp)});

        }
        setPkmonObjArr([...pkmonObjArr, ...tempArr]);//including previous arr prevents unnecessary fetching
    }
    return(
        <>
            <input type="range" defaultValue = {0} max={1000} onChange={(rangeE) => fetchPkmons(rangeE.target.value)}></input>
            
        </>
    )
}
export default EndIdSlider;