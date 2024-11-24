import { BiSolidError } from "react-icons/bi"
import { Link } from "react-router-dom"
function Missing(){
    return(

        <div className="Missing-Items">
        <BiSolidError className="ErrorLogo" />
        <h1 className="Missing-Title">Looks like we ran into an error</h1>
        <h2>Please return to our <Link to="/api-research/">homepage</Link></h2>
      </div>
      
    
    )
}

export default Missing