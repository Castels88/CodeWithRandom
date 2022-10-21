/* eslint-disable jsx-a11y/anchor-is-valid */
import Smile from '../IMG/Smile.svg'
import Angel from '../IMG/Angel.svg'
import '../CSS/App.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Notfound() {
  const navigate = useNavigate()

  function handleButton() {
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <h1>There is some issue</h1>
        <img src={Smile} alt="smile" />
      </header>

      <div className="content">
        <p className="testo">
          <b>Codewithrandom</b> Hope you understand our pain <br /> as our
          developer
          <img className="angel" src={Angel} alt="angel" /> thank you visit
          again
        </p>

        <div className="numbers">
          <div className="primo">4</div>
          <div className="secondo">0</div>
          <div className="terzo">4</div>
        </div>
      </div>

      <footer>
        <Button onClick={handleButton}>
          <p>Back to Homepage</p>
        </Button>
      </footer>
    </div>
  )
}
