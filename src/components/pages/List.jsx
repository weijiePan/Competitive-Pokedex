import { useEffect, useState } from "react"
import EndIdSlider from "../listView/EndIdslider.jsx"
import PkmonDisplay from "../listView/PkmonDisplay.jsx";
import PkmonDetailDisplay from "../listView/PkmonDetailDisplay.jsx";
import "@css/pages/list.css"
import "@css/listView/pkmonDisplay.css"


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
                <div className="pkmonList">
                    {pkmonDisplays}
                </div>
            </div>
        
        
        
    )
    
}

export default List;