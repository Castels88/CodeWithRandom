import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import { IconHover } from './Componets/IconHover'
import { LoginForm } from './Componets/LoginForm'
import { MyStopwatch } from './Componets/MyStopwatch'
import { Pokemon } from './Componets/Pokermon'

export function App() {
  return (
    <div className="container_body">
      <Alert variant="success">My Exercize app</Alert>
      <nav>
        <Link to="/">Home</Link> <Link to="/notfound">Not Found</Link>
        <Link to="/login">Login</Link> <Link to="/timer">Timer</Link>
        <Link to="/pokemon">Pokemon</Link>
        <IconHover />
      </nav>
      <Routes>
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/timer" element={<MyStopwatch />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
