import Home from "./Home"
import Header from "./Header"
import { useEffect, useState } from "react"
import ApiPage from "./ApiPage"
import Missing from "./Missing"
import FAQ from "./FAQ"
import Title from "./Title"
import {Routes, Route, Router, useLocation} from 'react-router-dom'
import Favorites from "./Favorites"
import { createContext } from "react"
export const ItemsContext = createContext();

function App() {
  
  const [apiItems, setapiItems] = useState([
    {
    'id': '1',
    'difficulty': 'Intermediate',
    'name': 'Test-API',
    'brief_desc': 'example 1',
    'description': 'Handy API tool'
  },
  {
    'id': '2',
    'difficulty': 'Advanced',
    'name': 'Test-API 2',
    'brief_desc': 'example 2',
    'description': 'Handy API tool 2'
  },
  {
    'id': '3',
    'difficulty': 'Intermediate',
    'name': 'Test-API 3',
    'brief_desc': 'example 3',
    'description': 'Handy API tool 3'
  },
  {
    'id': '4',
    'difficulty': 'Beginner',
    'name': 'Test-API 4',
    'brief_desc': 'example 4',
    'description': 'Handy API tool 4'
  },
  {
    'id': '5',
    'difficulty': 'Advanced',
    'name': 'Test-API 5',
    'brief_desc': 'example 5',
    'description': 'Handy API tool 5'
  },
  
])

const [favorites, setFavorites] = useState([])
const [search, setSearch] = useState('')

function handleFavorite(name){
    const updatedArray = favorites.filter((n) => n != name)

    !favorites.includes(name) ? setFavorites(e => [...e, name]) :
    setFavorites(updatedArray)
}

const location = useLocation()

useEffect(() => {
  window.scrollTo(0,0)


}, [location])

const contextValue = {
  favorites,    
  setFavorites,
  handleFavorite,
  search,
  setSearch
};

  return (
    <>
    <ItemsContext.Provider value={contextValue}>

    <Title></Title>
    <Header></Header>

    <Routes>

      <Route path="/api-research/" element={ <Home apiItems={
        apiItems.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase
      ()))}></Home>}></Route>

      <Route path="/api-research/api/:name" element={<ApiPage apiItems={apiItems}></ApiPage>}></Route>

      <Route path="*" element={<Missing></Missing>}></Route>

      <Route path="/api-research/faq" element={<FAQ></FAQ>}></Route>

      <Route path="/api-research/favorites" element={<Favorites apiItems={apiItems.filter((item) => favorites.includes(item.name))}></Favorites>}></Route>

    </Routes>

    </ItemsContext.Provider>

    </>
  )
}

export default App
