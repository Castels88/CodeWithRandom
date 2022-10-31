import { Route, Routes } from 'react-router-dom'
import NotFound from '../src/Componets/NotFound'
import { Navbar } from 'react-bootstrap'
import { LoginForm } from './Componets/LoginForm'
import { MyStopwatch } from './Componets/MyStopwatch'
import { Pokemon } from './Componets/Pokermon'
import { WeatherApp } from './Componets/WeatherApp'
import { Welcome } from './Componets/Welcome'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './CSS/index.css'

export function App() {
  return (
    <div className="container_body">
      <Navbar bg="light" variant="light">
        <div className="nav-container">
          <Navbar.Brand href="#home">My Exercize app</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/timer">Timer</Nav.Link>
            <Nav.Link href="/Pokemon">Pokemon</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/weather">Weather App</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/timer" element={<MyStopwatch />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </div>
  )
}

export default App
