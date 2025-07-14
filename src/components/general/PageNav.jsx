import List from "../pages/List";

function PageNav({ setPage}){
    const pages  = [{name:"list", comp:<List/>}];
    return(
        <nav className="pageNav">
            {pages.map((item)=> <div key={item.name} onClick={()=>{setPage(pages[0].comp)}}><h3>{item.name}</h3></div>)}
        </nav>
    )
}

export default PageNav