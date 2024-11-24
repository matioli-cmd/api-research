import { Link } from "react-router-dom"

function Header(){

    return(

        <header className="Header-container">

             <div className="Header-links">
                        <Link className="button-link" to={'/api-research/'}><h2>Home</h2></Link>
                        <Link className="button-link" to={'/api-research/about'}><h2>About</h2></Link>
                        <Link className="button-link" to={'/api-research/favorites'}><h2>Favorites</h2></Link>
            </div>
        
        </header>


    )

}

export default Header