import { useEffect, useState } from "react"
import EndIdSlider from "./EndIdslider.jsx"
import PkmonDisplay from "./PkmonDisplay.jsx";
function PkmonList(){
    let [pkmonObjArr, setPkmonObjArr] = useState([]);
    const pkmonDisplays = pkmonObjArr.map(pkmon =>
        <PkmonDisplay pkmon={pkmon}/>
    )
    console.log(pkmonObjArr);
    return(
        <>
            <EndIdSlider setPkmonObjArr={setPkmonObjArr} pkmonObjArr={pkmonObjArr}/>
            {pkmonDisplays}
            
        </>
        
    )
    
}

export default PkmonList;