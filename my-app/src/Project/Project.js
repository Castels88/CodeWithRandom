import Proge1 from '../IMG/Proge1.png'
import Proge2 from '../IMG/Proge2.png'
import Proge3 from '../IMG/Proge3.png'

export function Project() {
  const projects = [
    {
      title: 'React Reserve',
      subtitle: 'MERN Stack',
      description:
        'Super practical video lessons that cut through the nonsense, make building complex apps easy, while saving you months of time.',
      image: Proge1,
      link: 'https://reactbootcamp.com',
    },
    {
      title: 'PancakeSwap',
      subtitle: '',
      description:
        'PancakeSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $3.9 billion in funds.',
      image: Proge2,
      link: 'https://pancakeswap.finance',
    },
    {
      title: 'Nintendo',
      subtitle: '',
      description:
        'Visit the official Nintendo site to shop for Nintendo Switch™ systems and video games, read the latest news, find fun gear and gifts with a Nintendo twist',
      image: Proge3,
      link: 'https://www.nintendo.it/',
    },
  ]

  return (
    <div className="container d-flex flex-column align-items-center ">
      {projects &&
        projects.map((item, index) => (
          <div key={index} className="card  ">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">{item.title}</h5>
              <img
                className="img-project"
                src={item.image}
                alt="imagine progetti"
              />
              <p className="card-text">{item.description}</p>
              <a href={item.link} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
  )
}
