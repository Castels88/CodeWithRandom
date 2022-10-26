/* eslint-disable array-callback-return */
import '../CSS/Pokemon.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Pokemon() {
  const [search, setSearch] = useState('')
  const [value, setValue] = useState([])
  const [img, setImg] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
      setValue(res.data.results)
      setImg(res.data.results.map((item) => item.url))
    })
  }, [])

  function handleInput(event) {
    setSearch(event.target.value)
  }
  function handleFetch() {
    console.log(img)
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
      <button onClick={handleFetch}>fetch</button>
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
            .map((item, index) => (
              <div key={index} className="poke-card">
                <div className="card-header">{item.name}</div>
                <div className="poke-info">
                  <img className="poke-img" src="" alt="" />
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
