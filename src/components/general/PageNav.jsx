import List from "../pages/List";
import "@css/general/pageNav.css";
function PageNav({ setPage}){
    const pages  = [{name:"List", comp:<List/>}];
    return(
        <nav className="pageNav">
            {pages.map((item)=> <div key={item.name} className = "navHeading" onClick={()=>{setPage(pages[0].comp)}}><h3>{item.name}</h3></div>)}
        </nav>
    )
}

export default PageNav