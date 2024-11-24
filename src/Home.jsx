import ApiList from "./apiList"
import Filter from "./Filter"
import { ItemsContext } from './App.jsx';
import { useContext } from 'react';


function Home({apiItems}){

    const context = useContext(ItemsContext)

    return(

        <div className="Home">

            <div className="homeTitle">

            <h1>API FEED</h1>

            <Filter></Filter>
            
            </div>

            {apiItems.length > 0 &&  
            
            <div className="ApiItems-container">

            <ul className="ApiItems">

            <ApiList apiItems={apiItems}></ApiList>

            </ul>

            </div>}
            
            {apiItems.length < 1 && <p className="unavailable">No results for "{context.search}"</p>}
          
                
       

        </div>

    )
}


export default Home