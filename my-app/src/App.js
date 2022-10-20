import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
export function App() {
  return (
    <div>
      <h1>My Exercize app</h1>
      <Link to="/notfound">Esercizio Not Found</Link>
      <Routes>
        <Route path="/:notFound" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
