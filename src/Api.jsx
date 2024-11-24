import { Link } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { ItemsContext } from './App.jsx';

function Api({api}){
    
    const context = useContext(ItemsContext)

    return(
        
        <div className="API">
        <div className="attributes">
          <h1>
            <Link to={`/api-research/api/${api.name}`} className="api-link">
              {api.name}
            </Link>
          </h1>
          <p>{api.brief_desc}</p>
          <p className={`${api.difficulty}`}>{api.difficulty}</p>
        </div>
        <div className="Favorite" onClick={() => context.handleFavorite(api.name)}>
          {context.favorites.includes(api.name) ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </div>
      </div>
  
  
      

    )
}

export default Api