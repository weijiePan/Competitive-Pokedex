import React from "react";
import List from "../pages/List";
import "@css/general/pageNav.css";
import pokdex from "@assets/pokedex-color.svg"
function PageNav({ setPage}){
    const pages  = [{name:"List", comp:<List/>}];
    return(
        <nav className="pageNav">
            <img src = {pokdex} className="logo"></img>
            {pages.map((item)=> <div key={item.name} className = "navHeading" onClick={()=>{setPage(pages[0].comp)}}><h3>{item.name}</h3></div>)}
        </nav>
    )
}

export default PageNav