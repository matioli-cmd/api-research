import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5"
import { MdFavorite } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";

function HeaderLinks({barsClicked}){
    return(
        

        <>
        
        {barsClicked &&  
        
        
        <div className="headerLinks">

                    <Link className="button-link" to={'/api-research/'}><IoHome></IoHome><h2>Home</h2></Link>
                    <Link className="button-link" to={'/api-research/favorites'}><MdFavorite></MdFavorite><h2>Favorites</h2></Link>
                    <Link className="button-link" to={'/api-research/faq'}><MdQuestionAnswer></MdQuestionAnswer><h2>FAQ</h2></Link>  

        </div>
}
        
        
        </>
    )
}

export default HeaderLinks