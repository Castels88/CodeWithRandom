import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'
import { IconHover } from './Componets/IconHover'
import { Footer } from './Componets/Footer'
import { LoginForm } from './Componets/LoginForm'
import { Timer } from './Componets/Timer'

export function App() {
  return (
    <div className="container_body">
      <Alert variant="success">My Exercize app</Alert>
      <nav>
        <Link to="/">Home</Link> <Link to="/notfound">Esercizio Not Found</Link>
        <Link to="/login">Login</Link>
        <IconHover />
      </nav>
      <Routes>
        <Route path="/:notFound" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Timer />
      <Footer />
    </div>
  )
}

export default App
