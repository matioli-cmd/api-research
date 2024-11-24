import { Link } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

function Api({api}){

    const [heartClicked, setHeartClicked] = useState(false)

    function handleFavorite(){
        if(!heartClicked){
            setHeartClicked(true)
        }
        else{
            setHeartClicked(false)
        }
    }

    return(
        
        <div className="API">
        <div className="attributes">
          <h1>
            <Link to={`/api-research/api/${api.name}`} className="api-link">
              {api.name}
            </Link>
          </h1>
          <p>{api.brief_desc}</p>
        </div>
        <div className="Favorite" onClick={handleFavorite}>
          {heartClicked ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </div>
      </div>
  
  
      

    )
}

export default Api