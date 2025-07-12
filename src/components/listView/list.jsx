import { useEffect, useState } from "react"
import EndIdSlider from "./EndIdslider.jsx"
import PkmonDisplay from "./PkmonDisplay.jsx";
import PkmonDetailDisplay from "./PkmonDetailDisplay.jsx";
import "../../css/list.css"
import "../../css/pkmonDisplay.css"


function List(){
    let [pkmonObjArr, setPkmonObjArr] = useState([]);
    let [pkmonObj, setPkmonObj] = useState(null); //sets the pokemon used for pkmonDetailDisplay
    const pkmonDisplays = pkmonObjArr.map(pkmon =>
        <PkmonDisplay  key = {pkmon.id} pkmon = {pkmon} setPkmonObj={setPkmonObj}/>
    )
    let pkmonDetailDisplay = pkmonObj != null? <PkmonDetailDisplay pkmonObj = {pkmonObj} setPkmonObj={setPkmonObj}/>: null;
    return(
           
            <div className="pokedexListPage">
                {pkmonDetailDisplay}
                <EndIdSlider setPkmonObjArr={setPkmonObjArr} pkmonObjArr={pkmonObjArr}/>
                <div className="pkmonDisplayContainer">
                    {pkmonDisplays}
                </div>
            </div>
        
        
        
    )
    
}

export default List;