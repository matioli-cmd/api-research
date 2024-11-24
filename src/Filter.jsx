import { ItemsContext } from './App.jsx';
import { useContext } from 'react';

function Filter(){ 

    const context = useContext(ItemsContext)

    return(
        <div className="Search-container">

        <input className="Search" placeholder="Search" value={context.search} onChange={(e) => context.setSearch(e.target.value)}></input>

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