import { useEffect, useState } from "react"
import EndIdSlider from "./EndIdslider.jsx"
import PkmonDisplay from "./PkmonDisplay.jsx";
function PkmonList(){
    let [pkmonEndId, setEndId] = useState(2);
    let pkmonObjArr = [];
    
    return(
        <>
            <EndIdSlider setEndId={setEndId} pkmonObjArr={pkmonObjArr}/>
            {pkmonObjArr.map((item)=>{
                <PkmonDisplay pkmon={item}/>
            })}
        </>
        
    )
    
}

export default PkmonList;