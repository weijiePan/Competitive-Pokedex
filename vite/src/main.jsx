import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import List from './components/pages/List.jsx'
import "@css/listView/pkmonDetailDisplay.css"
import PageNav from "./components/general/PageNav.jsx"


function CurrentPage(){
  let [page, setPage] = useState(null);
  return(
    <>
    
        
          <PageNav setPage={setPage}/>
          {page}
        

    
      
      
      
     
    </>
  )
}
createRoot(document.getElementById("root")).render(
  <CurrentPage/>
)