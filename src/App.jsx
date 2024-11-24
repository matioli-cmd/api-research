import Home from "./Home"
import Header from "./Header"
import { useState } from "react"
import ApiPage from "./ApiPage"
import Missing from "./Missing"
import FAQ from "./FAQ"
import Title from "./Title"
import {Routes, Route, Router} from 'react-router-dom'
import Favorites from "./Favorites"

function App() {
  
  const [apiItems, setapiItems] = useState([
    {
    'id': '1',
    'name': 'Test-API',
    'brief_desc': 'example 1',
    'description': 'Handy API tool'
  },
  {
    'id': '2',
    'name': 'Test-API 2',
    'brief_desc': 'example 2',
    'description': 'Handy API tool 2'
  },
  {
    'id': '3',
    'name': 'Test-API 3',
    'brief_desc': 'example 3',
    'description': 'Handy API tool 3'
  },
  {
    'id': '4',
    'name': 'Test-API 4',
    'brief_desc': 'example 4',
    'description': 'Handy API tool 4'
  },
  {
    'id': '5',
    'name': 'Test-API 5',
    'brief_desc': 'example 5',
    'description': 'Handy API tool 5'
  }
])

  return (
    <>
    <Title></Title>
    <Header></Header>

    <Routes>

      <Route path="/api-research/" element={ <Home apiItems={apiItems}></Home>}></Route>

      <Route path="/api-research/api/:name" element={<ApiPage apiItems={apiItems}></ApiPage>}></Route>

      <Route path="*" element={<Missing></Missing>}></Route>

      <Route path="/api-research/faq" element={<FAQ></FAQ>}></Route>

      <Route path="/api-research/favorites" element={<Favorites></Favorites>}></Route>

    </Routes>

    </>
  )
}

export default App
