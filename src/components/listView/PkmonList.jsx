import { useEffect, useState } from "react"
import EndIdSlider from "./EndIdslider.jsx"
function PkmonList(){
    let [pkmonEndId, setEndId] = useState(2);
    let pkmonObjArr = [];
    
    return(
        <>
            <EndIdSlider setEndId={setEndId} pkmonEndId={pkmonEndId} pkmonObjArr={pkmonObjArr}/>
            <div>ahhh</div>
            
        </>
        
    )
    
}

export default PkmonList;