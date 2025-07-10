import { useEffect, useState } from "react"
import EndIdSlider from "./EndIdslider.jsx"
import PkmonDisplay from "./PkmonDisplay.jsx";
import PkmonDetailDisplay from "./PkmonDetailDisplay.jsx";
import "../../css/list.css"
import "../../css/pkmonDisplay.css"


function List(){
    let [pkmonObjArr, setPkmonObjArr] = useState([]);
    const pkmonDisplays = pkmonObjArr.map(pkmon =>
        <PkmonDisplay pkmon = {pkmon} key = {pkmon.id}/>
    )
    let pkmonDetailTest = pkmonObjArr.length > 0? <PkmonDetailDisplay pkmonObj = {pkmonObjArr[0]}/>: null;
    return(
           
            <div className="pokedexListPage">
                {pkmonDetailTest}
                <EndIdSlider setPkmonObjArr={setPkmonObjArr} pkmonObjArr={pkmonObjArr}/>
                <div className="pkmonDisplayContainer">
                    {pkmonDisplays}
                </div>
            </div>
        
        
        
    )
    
}

export default List;