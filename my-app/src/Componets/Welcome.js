import '../CSS/Welcome.css'
export function Welcome() {
  const projects = [
    {
      title: 'React Reserve',
      subtitle: 'MERN Stack',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
      image: './project-1.gif',
      link: 'https://reactbootcamp.com',
    },
    {
      title: 'React Tracks',
      subtitle: 'React and Python',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
      image: './project-2.gif',
      link: 'https://reedbarger.com',
    },
    {
      title: 'DevChat',
      subtitle: 'React and Firebase',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
      image: './project-3.gif',
      link: 'https://jsbootcamp.com',
    },
    {
      title: 'Epic Todo App',
      subtitle: 'React Hooks',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
      image: './project-4.gif',
      link: 'https://pythonbootcamp.com',
    },
  ]
  return (
    <div className="container">
      {/* inizio introduzione */}
      <div className="container">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Elio .
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
      {/* fine introduzione */}
      {/* inizio progetti  */}
      <div className="container"></div>
    </div>
  )
}
