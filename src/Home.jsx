import ApiList from "./apiList"
import Filter from "./Filter"

function Home({apiItems}){

    return(

        <div className="Home">

            <Filter></Filter>

            <div className="Test">

            <div className="ApiItems-container">

                    <ul className="ApiItems">

                    <ApiList apiItems={apiItems}></ApiList>

                    </ul>


            </div>
                
            </div>

        </div>

    )
}


export default Home