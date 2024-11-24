import { Link } from "react-router-dom"
import { LuLibrary } from "react-icons/lu";

function Title(){

    return(

        <header className="title-container">
        
        <div className="Title-Logo">
        <Link to={'/'} className="title-link">
        <h1>API Library</h1>
        </Link>
        <LuLibrary className="LibraryLogo"></LuLibrary>
       
        </div>

</header>


    )

}

export default Title