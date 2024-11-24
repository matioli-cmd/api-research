function Filter(){
    return(
        <div className="Search-container">

        <input className="Search" placeholder="Search"></input>

        <select className="Difficulty">
            <option>All APIs</option>
            <option>Beginner APIs</option>
            <option>Intermediate APIs</option>
            <option>Advanced APIs</option>
        </select>

      </div>
    )
}

export default Filter