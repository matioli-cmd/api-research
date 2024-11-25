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
import js from "@eslint/js"
export const ItemsContext = createContext();

function App() {
  
  const apiItems = [
    {
      'id': '1',
      'url': 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key_here&units=metric',
      'documentation_url': 'https://openweathermap.org/api',
      'difficulty': 'Beginner',
      'name': 'OpenWeatherMap API',
      'brief_desc': 'Weather data for any location',
      'description': 'Provides current weather, forecasts, and historical data for cities around the world.'
    },
    {
      'id': '2',
      'url': 'https://api.themoviedb.org/3/movie/popular?api_key=your_api_key_here',
      'documentation_url': 'https://www.themoviedb.org/documentation/api',
      'difficulty': 'Intermediate',
      'name': 'The Movie Database (TMDb) API',
      'brief_desc': 'Popular movies and TV shows data',
      'description': 'Offers access to a wide range of movie and TV show data, including ratings, cast info, and release dates.'
    },
    {
      'id': '3',
      'url': 'https://newsapi.org/v2/top-headlines?apiKey=your_api_key_here',
      'documentation_url': 'https://newsapi.org/docs/endpoints/top-headlines',
      'difficulty': 'Beginner',
      'name': 'NewsAPI',
      'brief_desc': 'News headlines from multiple sources',
      'description': 'Fetches top headlines from news sources worldwide, including popular outlets like BBC, CNN, etc.'
    },
    {
      'id': '4',
      'url': 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
      'documentation_url': 'https://www.coindesk.com/coindesk-api',
      'difficulty': 'Intermediate',
      'name': 'CoinDesk API',
      'brief_desc': 'Bitcoin price index',
      'description': 'Provides real-time Bitcoin price data and historical data in various currencies.'
    },
    {
      'id': '5',
      'url': 'https://dog.ceo/dog-api/breeds/image/random',
      'documentation_url': 'https://dog.ceo/dog-api/documentation/breeds',
      'difficulty': 'Beginner',
      'name': 'Dog CEO\'s Dog API',
      'brief_desc': 'Random dog images and breed data',
      'description': 'Provides random dog images, breed information, and a variety of dog-related data.'
    },
    {
      'id': '7',
      'url': 'https://api.github.com/users/{username}',
      'documentation_url': 'https://docs.github.com/en/rest',
      'difficulty': 'Intermediate',
      'name': 'GitHub API',
      'brief_desc': 'GitHub user profile and repositories',
      'description': 'Access user profile data, repositories, and much more from GitHub.'
    },
    {
      'id': '8',
      'url': 'https://api.spacexdata.com/v4/launches',
      'documentation_url': 'https://github.com/r-spacex/SpaceX-API',
      'difficulty': 'Advanced',
      'name': 'SpaceX API',
      'brief_desc': 'SpaceX launch data',
      'description': 'Provides information about SpaceX launches, rockets, missions, and more.'
    },
    {
      'id': '9',
      'url': 'https://api.unsplash.com/photos?client_id=your_api_key_here',
      'documentation_url': 'https://unsplash.com/documentation',
      'difficulty': 'Beginner',
      'name': 'Unsplash API',
      'brief_desc': 'Free high-quality images',
      'description': 'Gives access to a collection of high-quality photos that are free to use for any project.'
    },
    {
      'id': '10',
      'url': 'https://api.openai.com/v1/completions',
      'documentation_url': 'https://beta.openai.com/docs/',
      'difficulty': 'Advanced',
      'name': 'OpenAI API',
      'brief_desc': 'Natural language processing (NLP) and AI models',
      'description': 'Provides access to GPT models for generating text, completing prompts, and more.'
    },
    {
      'id': '11',
      'url': 'https://api.nasa.gov/planetary/apod?api_key=your_api_key_here',
      'documentation_url': 'https://api.nasa.gov/',
      'difficulty': 'Beginner',
      'name': 'NASA Astronomy Picture of the Day API',
      'brief_desc': 'Astronomy-related images and descriptions',
      'description': 'Provides daily astronomy pictures along with a description and metadata.'
    },
    {
      'id': '12',
      'url': 'https://api.thedogapi.com/v1/images/search',
      'documentation_url': 'https://thedogapi.com/',
      'difficulty': 'Beginner',
      'name': 'The Dog API',
      'brief_desc': 'Dog images and breed information',
      'description': 'Fetches random dog images, breed info, and other dog-related data.'
    },
    {
      'id': '13',
      'url': 'https://api.spotify.com/v1/me/top/artists',
      'documentation_url': 'https://developer.spotify.com/documentation/web-api/',
      'difficulty': 'Intermediate',
      'name': 'Spotify API',
      'brief_desc': 'Access to Spotify user data and playlists',
      'description': 'Allows fetching user playlists, top tracks, and other data from Spotify.'
    },
    {
      'id': '14',
      'url': 'https://api.adviceslip.com/advice',
      'documentation_url': 'https://api.adviceslip.com/',
      'difficulty': 'Beginner',
      'name': 'Advice Slip API',
      'brief_desc': 'Random advice generator',
      'description': 'Provides random pieces of advice that can be used in apps and websites.'
    },
    {
      'id': '15',
      'url': 'https://api.punkapi.com/v2/beers',
      'documentation_url': 'https://punkapi.com/',
      'difficulty': 'Beginner',
      'name': 'Punk API',
      'brief_desc': 'Beer-related data',
      'description': 'Provides information about different beers, including their names, descriptions, and ingredients.'
    },
    {
      'id': '16',
      'url': 'https://api.vk.com/method/users.get?access_token=your_access_token&v=5.131',
      'documentation_url': 'https://vk.com/dev/methods',
      'difficulty': 'Intermediate',
      'name': 'VK API',
      'brief_desc': 'Social network data',
      'description': 'Fetches user data, friends, posts, and other data from VK social network.'
    },
    {
      'id': '17',
      'url': 'https://api.exchangeratesapi.io/latest',
      'documentation_url': 'https://exchangeratesapi.io/',
      'difficulty': 'Beginner',
      'name': 'ExchangeRatesAPI',
      'brief_desc': 'Currency conversion and exchange rates',
      'description': 'Provides exchange rates for multiple currencies and allows currency conversion.'
    },
    {
      'id': '18',
      'url': 'https://api.coinpaprika.com/v1/coins',
      'documentation_url': 'https://coinpaprika.com/docs/',
      'difficulty': 'Intermediate',
      'name': 'CoinPaprika API',
      'brief_desc': 'Cryptocurrency data',
      'description': 'Provides data for various cryptocurrencies, including historical data, prices, and more.'
    },
    {
      'id': '19',
      'url': 'https://api.weatherbit.io/v2.0/current?city=London&key=your_api_key_here',
      'documentation_url': 'https://weatherbit.io/api',
      'difficulty': 'Beginner',
      'name': 'Weatherbit API',
      'brief_desc': 'Weather data',
      'description': 'Fetches weather data such as temperature, humidity, and more for any city.'
    },
    {
      'id': '20',
      'url': 'https://api.footballdata.org/v4/matches',
      'documentation_url': 'https://www.football-data.org/documentation/api',
      'difficulty': 'Intermediate',
      'name': 'Football Data API',
      'brief_desc': 'Football/soccer data',
      'description': 'Provides football match data, teams, and competitions for popular leagues.'
    },
    {
      'id': '21',
      'url': 'https://api.openaq.org/v1/measurements',
      'documentation_url': 'https://docs.openaq.org/',
      'difficulty': 'Beginner',
      'name': 'OpenAQ API',
      'brief_desc': 'Air quality data',
      'description': 'Fetches real-time air quality measurements for different locations around the world.'
    },
    {
      'id': '22',
      'url': 'https://api.github.com/repos/{owner}/{repo}/issues',
      'documentation_url': 'https://docs.github.com/en/rest',
      'difficulty': 'Intermediate',
      'name': 'GitHub Issues API',
      'brief_desc': 'GitHub issues',
      'description': 'Provides access to issues in a GitHub repository, including details like title, description, and status.'
    },
    {
      'id': '23',
      'url': 'https://api.giphy.com/v1/gifs/search?api_key=your_api_key_here&q=cat',
      'documentation_url': 'https://developers.giphy.com/docs/',
      'difficulty': 'Beginner',
      'name': 'Giphy API',
      'brief_desc': 'GIF search engine',
      'description': 'Fetches GIFs based on search queries, tags, and more.'
    },
    {
      'id': '24',
      'url': 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=your_api_key_here&tags=cat',
      'documentation_url': 'https://www.flickr.com/services/api/',
      'difficulty': 'Intermediate',
      'name': 'Flickr API',
      'brief_desc': 'Search and access photos',
      'description': 'Search for photos by tags, location, and more from the Flickr photo-sharing platform.'
    },
    {
      'id': '25',
      'url': 'https://api.github.com/search/repositories?q=react',
      'documentation_url': 'https://docs.github.com/en/rest',
      'difficulty': 'Intermediate',
      'name': 'GitHub Repository Search API',
      'brief_desc': 'Search GitHub repositories',
      'description': 'Search for repositories on GitHub using various criteria such as stars, language, etc.'
    },
    {
      'id': '26',
      'url': 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=VIDEO_ID&key=your_api_key_here',
      'documentation_url': 'https://developers.google.com/youtube/v3/docs',
      'difficulty': 'Intermediate',
      'name': 'YouTube API',
      'brief_desc': 'YouTube video data',
      'description': 'Fetches video data including metadata like title, description, and views for a given YouTube video.'
    },
    {
      'id': '27',
      'url': 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=your_api_key_here',
      'documentation_url': 'https://developers.google.com/books',
      'difficulty': 'Beginner',
      'name': 'Google Books API',
      'brief_desc': 'Search for books',
      'description': 'Searches Google Books for books by title, author, or other criteria.'
    },
    {
      'id': '28',
      'url': 'https://api.coinlore.net/api/tickers/',
      'documentation_url': 'https://www.coinlore.com/cryptocurrency-data-api',
      'difficulty': 'Intermediate',
      'name': 'CoinLore API',
      'brief_desc': 'Cryptocurrency market data',
      'description': 'Provides real-time cryptocurrency market data including prices, market cap, and volume.'
    },
    {
      'id': '29',
      'url': 'https://api.openai.com/v1/engines/davinci-codex/completions',
      'documentation_url': 'https://beta.openai.com/docs/api-reference/completions/create',
      'difficulty': 'Advanced',
      'name': 'OpenAI Codex API',
      'brief_desc': 'Code generation and completion',
      'description': 'Generate code using the Codex model, specifically designed for code-related tasks.'
    },
    {
      'id': '30',
      'url': 'https://api.exchangerate-api.com/v4/latest/GBP',
      'documentation_url': 'https://www.exchangerate-api.com/',
      'difficulty': 'Beginner',
      'name': 'ExchangeRate-API',
      'brief_desc': 'Currency exchange rates',
      'description': 'Fetches real-time exchange rates for various currencies, including GBP.'
    },
    {
      'id': '31',
      'url': 'https://api.airtable.com/v0/app1234567890/Table?api_key=your_api_key_here',
      'documentation_url': 'https://airtable.com/api',
      'difficulty': 'Intermediate',
      'name': 'Airtable API',
      'brief_desc': 'Database management and storage',
      'description': 'Allows you to interact with Airtable databases, retrieve records, and more.'
    },
    {
      'id': '32',
      'url': 'https://api.teleport.org/api/urban_areas/slug:london/scores/',
      'documentation_url': 'https://developers.teleport.org/docs/',
      'difficulty': 'Intermediate',
      'name': 'Teleport API',
      'brief_desc': 'City scores and rankings',
      'description': 'Provides city ratings and data on quality of life, cost of living, and more.'
    },
    {
      'id': '33',
      'url': 'https://api.currentsapi.services/v1/latest-news?apiKey=your_api_key_here',
      'documentation_url': 'https://currentsapi.services/en/docs/',
      'difficulty': 'Beginner',
      'name': 'Currents API',
      'brief_desc': 'Latest news articles',
      'description': 'Fetches the latest news articles from a wide range of sources around the world.'
    },
    {
      'id': '34',
      'url': 'https://api.meetup.com/find/groups?key=your_api_key_here',
      'documentation_url': 'https://www.meetup.com/api/guide/',
      'difficulty': 'Intermediate',
      'name': 'Meetup API',
      'brief_desc': 'Find Meetup groups',
      'description': 'Allows users to find Meetup groups by location, interest, and more.'
    },
    {
      'id': '35',
      'url': 'https://api.chucknorris.io/jokes/random',
      'documentation_url': 'https://api.chucknorris.io/',
      'difficulty': 'Beginner',
      'name': 'Chuck Norris Jokes API',
      'brief_desc': 'Random Chuck Norris jokes',
      'description': 'Fetches random jokes about Chuck Norris.'
    },
    {
      'id': '36',
      'url': 'https://api.publicapis.org/entries',
      'documentation_url': 'https://publicapis.org/docs',
      'difficulty': 'Beginner',
      'name': 'Public APIs API',
      'brief_desc': 'Public APIs directory',
      'description': 'Provides a list of publicly available APIs for developers to use.'
    },
    {
      'id': '37',
      'url': 'https://api.jikan.moe/v3/anime/1',
      'documentation_url': 'https://docs.api.jikan.moe/',
      'difficulty': 'Intermediate',
      'name': 'Jikan API',
      'brief_desc': 'Anime data',
      'description': 'Fetches anime information, such as episode details, ratings, and more.'
    },
    {
      'id': '38',
      'url': 'https://api.champion.gg/v2/stats/lanes',
      'documentation_url': 'https://developer.champion.gg/',
      'difficulty': 'Intermediate',
      'name': 'Champion.gg API',
      'brief_desc': 'League of Legends data',
      'description': 'Provides statistics and data about League of Legends champions and their performance.'
    },
    {
      'id': '39',
      'url': 'https://api.duckduckgo.com/?q=API&format=json',
      'documentation_url': 'https://duckduckgo.com/api',
      'difficulty': 'Beginner',
      'name': 'DuckDuckGo API',
      'brief_desc': 'Search engine results',
      'description': 'Fetches search results from DuckDuckGo without tracking user data.'
    }
  ];

const jsonFavorites = localStorage.getItem('favorites')
const [favorites, setFavorites] = useState(jsonFavorites ? JSON.parse(jsonFavorites) : [])
const [search, setSearch] = useState('')
const [difficultyChosen, setDifficultyChosen] = useState('')
const [barsClicked, setBarsClicked] = useState(false)

function handleDifficultyChange(e){
  setDifficultyChosen(e.target.value)
  console.log(e.target.value)
}

function handleFavorite(name){
    const updatedArray = favorites.filter((n) => n != name)

    !favorites.includes(name) ? setFavorites(e => [...e, name]) :
    setFavorites(updatedArray)
}

const location = useLocation()

useEffect(() => {
  window.scrollTo(0,0)
  setBarsClicked(false)

}, [location])

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}, [favorites])

const contextValue = {
  favorites,    
  setFavorites,
  handleFavorite,
  search,
  setSearch,
  handleDifficultyChange
};

  return (
    <>
    <ItemsContext.Provider value={contextValue}>

    <Title></Title>
    <Header setBarsClicked={setBarsClicked} barsClicked={barsClicked}></Header>

    <Routes>

      <Route path="/api-research/" element={ <Home apiItems={
        apiItems.filter((item) => 
          
          item.name.toLowerCase().includes(search.trim().toLowerCase()) && item.difficulty.toLowerCase().includes(difficultyChosen.toLowerCase())
        
        )
          
          }></Home>}></Route>

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
