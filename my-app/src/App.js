import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import { IconHover } from './Componets/IconHover'

export function App() {
  return (
    <div className="container">
      <Alert variant="success">My Exercize app</Alert>
      <nav>
        <Link to="/">Home</Link> <Link to="/notfound">Esercizio Not Found</Link>
        <IconHover />
      </nav>
      <Routes>
        <Route path="/:notFound" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
