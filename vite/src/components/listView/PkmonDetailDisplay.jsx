import { useState, useEffect } from "react";

function PkmonDetailDisplay({pkmonObj, setPkmonObj}){
    
    if(pkmonObj == null){
        return(null);
    }else{
        //gather description from flavor_text key of GET https://pokeapi.co/api/v2/pokemon-species/{id or name}/
        //gather baseStats from 
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pkmonObj.id}/`;
        let [description, setDescription] = useState(null)
        let descriptionText = description != null? <p className="detailDisplayDesc">{description}</p>:null;

        useEffect( //fetches description since pkmonObj does not contain desc
            ()=>{
                const pkmonSpecies = fetch(speciesUrl);
                pkmonSpecies.then((resp) => resp.json()).then(
                    obj => {
                        setDescription(obj.flavor_text_entries[0].flavor_text)
                    }
                )
                
            }, []
        );
        return(
            <div className = "pkmonDetailDisplay">
                <div className = "heading">
                    <h3 className = "pkmonName">{pkmonObj.name}</h3>
                    <h3 className = "pkmonId">##{pkmonObj.id}</h3>
                    <svg height = "30" width = "30">
                        <circle r="10" cx ="10" cy = "10" fill="blue" onClick={()=>{setPkmonObj(null)}} ></circle>
                    </svg>
                </div>
                <div className ="body">
                    <img className = "detailPkmonImg"src={pkmonObj.sprites.front_default}></img>
                    {descriptionText}
                </div>
            </div>
        )
    }
    
}

export default PkmonDetailDisplay;