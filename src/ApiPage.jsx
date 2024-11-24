import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function ApiPage({apiItems}){

    const navigate = useNavigate()

    const {name} = useParams()

    const chosenAPI = apiItems.find((api) => api.name == name)

    console.log(chosenAPI)

    useEffect(() => {
        if(!chosenAPI){
            navigate('*')
        }
    }, [chosenAPI])

    return(

        <div>
            
            {chosenAPI && 
            
            <div className="API_properties">
                
                <div className="API_title">
                    <h1>
                        {chosenAPI.name}
                    </h1>
                    <p>visit documentation <a href="/">here</a></p>
                </div>
                
                <div className="API_description">

                <h1>Description</h1>
                <p>{chosenAPI.description}</p>

                </div>

                <div class="API_example">
  
                <h1>Example API call</h1>
  
  <div class="Terminal">
    <div class="lineNumbers">
      <p class="lineNumber">1</p>
      <p class="lineNumber">2</p>
      <p class="lineNumber">3</p>
      <p class="lineNumber">4</p>
      <p class="lineNumber">5</p>
      <p class="lineNumber">6</p>
      <p class="lineNumber">7</p>
      <p class="lineNumber">8</p>
      <p class="lineNumber">9</p>
      <p class="lineNumber">10</p>
      <p class="lineNumber">11</p>
      <p class="lineNumber">12</p>
    </div>
    <div class="code-content">
      <p class="code-line"><code>const apiUrl = 'https://jsonplaceholder.typicode.com/postsssssssssssss';</code></p>
      <p class="code-line">&nbsp;</p>
      <p class="code-line"><code>fetch(apiUrl)</code></p>
      <p class="code-line"><code>&nbsp;.then(response =&gt; response.json())</code> </p>
      <p class="code-line"><code>&nbsp;.then(console.log)</code> </p>
      <p class="code-line"> </p>
    </div>
  </div>
</div>

         
            </div>
            
            }

            {!chosenAPI && <h1>404</h1>}


        </div>
    )
}

export default ApiPage