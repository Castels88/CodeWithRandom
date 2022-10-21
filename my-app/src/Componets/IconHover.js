import '../CSS/IconHover.css'
import Instagram from '../IMG/Instagram.svg'
import Facebook from '../IMG/Facebook.svg'
import Twitter from '../IMG/Twitter.svg'
import Whatsapp from '../IMG/Whatsapp.svg'

export function IconHover() {
  return (
    <div className="SocialContainer">
      <div className="box">
        <img src={Instagram} alt="insta" />
        <p>Instagram</p>
      </div>
      <div className="box">
        <img src={Facebook} alt="FB" />
        <p>Facebook</p>
      </div>
      <div className="box">
        <img src={Twitter} alt="TW" />
        <p>Twitter</p>
      </div>
      <div className="box">
        <img src={Whatsapp} alt="Wp" />
        <p>Whatsapp</p>
      </div>
    </div>
  )
}
