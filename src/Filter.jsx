import { ItemsContext } from './App.jsx';
import { useContext } from 'react';

function Filter(){ 

    const context = useContext(ItemsContext)

    return(
        <div className="Search-container">

        <input className="Search" placeholder="Search" maxLength={20} value={context.search} onChange={(e) => context.setSearch(e.target.value)}></input>

        <select className="Difficulty" onChange={(e) => context.handleDifficultyChange(e)}>
            <option value='' >All APIs</option>
            <option value='Beginner'>Beginner APIs</option>
            <option value='Intermediate'>Intermediate APIs</option>
            <option value='Advanced'>Advanced APIs</option>
        </select>

      </div>
    )
}

export default Filter