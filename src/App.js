import portfolioImage from './img/portfolio-background.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={portfolioImage} className="portfolio-img " alt="portfolio" />
      <div className='Home-Page'>
        <p>
         GIORGI SHUBITIDZE -
         Passionate Web Developer dedicated to  crafting clean and efficient code and  transforming complex ideas into  seamless digital experiences. With  expertise in front-end development, I  specialize in creating dynamic  websites that captivate audiences and  drive results. Let's collaborate to  turn your vision into reality and  elevate your online presence.
        </p>
        <a className="App-link"
          href="https://github.com/Shubitidzegiorgi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          Here is My Projects
        </a>
      </div>  
    </div>
  );
}

export default App;
