import Carousel from 'react-bootstrap/Carousel'
import Proge1 from '../IMG/Proge1.png'
import Proge2 from '../IMG/Proge2.png'
import Proge3 from '../IMG/Proge3.png'

export function CarouselProject() {
  return (
    <Carousel className="carousel-card">
      <Carousel.Item>
        <img className="img-project" src={Proge1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">React Reserve</h3>
          <p className="carousel-text">
            Super practical video lessons that cut through the nonsense, make
            building complex apps easy, while saving you months of time.
          </p>
          <a href="https://reactbootcamp.com" className="btn btn-primary">
            Check the Site!!!
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-project" src={Proge2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="carousel-title">PancakeSwap</h3>
          <p className="carousel-text">
            PancakeSwap has the most users of any decentralized platform, ever.
            And those users are now entrusting the platform with over $3.9
            billion in funds.
          </p>
          <a href="https://pancakeswap.finance" className="btn btn-primary">
            Check the Site!!!
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-project" src={Proge3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="carousel-title">Nintendo</h3>
          <p className="carousel-text">
            Visit the official Nintendo site to shop for Nintendo Switch™
            systems and video games, read the latest news, find fun gear and
            gifts with a Nintendo twist.
          </p>
          <a href="https://www.nintendo.it/" className="btn btn-primary">
            Check the Site!!!
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
