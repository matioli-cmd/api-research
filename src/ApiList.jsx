import Api from "./api"

function ApiList({apiItems}){
    return(

        apiItems.map((api) => <Api key={api.id} api={api}></Api>)
    )
}    

export default ApiList