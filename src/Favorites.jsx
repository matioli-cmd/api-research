import Api from "./api"
import ApiList from "./apiList"

function Favorites({apiItems}){


    return(

        <div className="Favorites-container">

        <h1 className="favoriteTitle">Your Favorites</h1>
        
        {apiItems.length > 0 && <div>

        <ul className="favoriteItems">

        <ApiList apiItems={apiItems}></ApiList>

        </ul>

        </div>
            
        }

        {apiItems.length < 1 && <p className="unavailable">No favorites available</p>}


</div>

       
    )
}

export default Favorites