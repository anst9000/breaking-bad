import { useEffect, useState } from 'react';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import axios from 'axios'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      setItems(result.data)
      setCharacters(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  useEffect(() => {
    const filterCharacters = async () => {
      // const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const newItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      setCharacters(newItems)
    }

    filterCharacters()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {
        setQuery(q)
        console.log('query =', query)
      }} />
      <CharacterGrid isLoading={isLoading} items={characters} />
    </div>
  );
}

export default App;
