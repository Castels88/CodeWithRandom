import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
export function App() {
  return (
    <div className="container">
      <h1>My Exercize app</h1>
      <nav>
        <Link to="/notfound">Esercizio Not Found</Link>
      </nav>

      <Routes>
        <Route path="/:notFound" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
