import '../CSS/Pokemon.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Pokemon() {
  const [search, setSearch] = useState('')
  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
      setValue(response.data.results)
    })
  }, [])

  function handleInput(event) {
    setSearch(event.target.value)
  }

  return (
    <div className="poke-body">
      <input
        onChange={handleInput}
        type="text"
        name="search-poke"
        id="search"
        placeholder="search your pokemon"
      />
      <div>Non ho trovato un' API con le immagini </div>
      <div className="poke-container-card">
        {value &&
          value
            .filter((item) => {
              if (setSearch === '') {
                return item
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item
              }
            })
            .map((item) => (
              <div className="poke-card">
                <div className="card-header">{item.name}</div>
                <div className="poke-info">
                  <a href="/">{item.url}</a>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
