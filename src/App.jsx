import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import tempImage from './assets/tempImage.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <nav className="navbar">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="Resume">Resume</a></li>
          </ul>
        </nav>
      </section>
      <section className="intro">
      <div className="introElements">
        <div className="redRectangle1">
        <h1 className="introH1">Welcome. <br />I'm Aimun Anwer.</h1>
        <h2>I combine both design and development to create practical experiences that are intuitive for users.</h2>
        </div>
        <div className="orangeRectangle1"></div>
        <div className="yellowRectangle1"></div>
        <div className="profileContainer"><img classname="profilePic" src={tempImage} alt="temporary image of a strawberry."/></div>
        </div>
      </section>
      <section className="about">
        <div className="h1Bullet">
          <div className="rRect2"></div>
          <div className="oRect2"></div>
          <div className="yRect2"></div>
         <h1 className = "h1About">About Me.</h1>
        </div>
        <div className="aboutContent">
        <div className="aboutText">
            <p>I’m a UX designer and a Computer Science graduate with a background 
                in both graphic design and front-end development. <br /><br /><br />
                From idea to research to prototype to code to testing and launch, I 
                use my knowledge of the entire creation process to make products that are valuable and practical for users.
                I’m looking for opportunities to grow as a UX designer, work with a team, and contribute my ideas and 
                knowledge to a larger project in a way that benefits its user base.
            </p>
        </div>
        <div className="aboutPics">
          <div><img className="picOne" src={tempImage} alt="temporary image of a strawberry."/></div>
          <div><img className="picTwo" src={tempImage} alt="temporary image of a strawberry."/></div>
        </div>
        </div>
        <div className="skillsContainer">
        <div className="h2Bullet">
          <div className="oRect2"></div>
          <div className="yRect2"></div>
        <h2 className="skillToolHeader">Skills & Tools.</h2>
        </div>
        <div className="aboutSkills">
          <div className="categories">
            <div className="h3Bullet">
              <div className="yRect3"></div>
              <h3 className="h3Header">Design/Development Tools:</h3>
            </div>
            <div className="categoryText">
              <p>Figma, 
              Git, Github, <br />
              Jira, <br />
              Android Studio, <br />
              Visual Studio, <br />
              IntelliJ, <br />
              Adobe Illustrator, <br />
              Adobe InDesign, <br />
              Adobe Photoshop</p>
              </div>
          </div>
          <div className="categories">
            <div className="h3Bullet">
              <div className="yRect3"></div>
              <h3 className="h3Header">Technical Skills:</h3>
            </div>   
            <div className="categoryText">           
            <p>React, <br />
              Java, <br />
              HTML, <br />
              CSS, <br />
              Javascript, Python, <br />
              Kotlin, <br />
              C, C#, SQL, R </p>
              </div>
          </div>
          <div className="categories">
            <div className="h3Bullet">
              <div className="yRect3"></div>
              <h3 className="h3Header">Workflow:</h3>
            </div>            
            <div className="categoryText">
            <p>Agile/Scrum, <br />
            Product Ownership, <br />
            Client/Team Communication, <br />
            UX Research</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="featProjs">
        <div className="h1Bullet">
          <div className="rRect2"></div>
          <div className="oRect2"></div>
          <div className="yRect2"></div>
          <h1 className = "h1Projects">Featured Projects.</h1>
        </div>
        <div className="projects">
        <div>
        <div className="projOne"><img className="projImages" src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
        <div>
        <div className="projTwo"><img className="projImages" src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
        <div>
        <div className="projThree"><img className="projImages" src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
        </div>
      </section>

      <section className="contact">
        <div className="h1Bullet">
          <div className="rRect2"></div>
          <div className="oRect2"></div>
          <div className="yRect2"></div>
          <h1 className = "h1Projects">Contact.</h1>
        </div>
        <div className="gitHub">
          <h2>aanwer2</h2>
        </div>
        <div className="location">
          <h2>Chicago, IL</h2>
        </div>
        <div className="linkedIn">
          <h2>www.linkedin.com/in/aimunanwer</h2>
        </div>
        <div className="webLink">
          <h2>portfolio link</h2>
        </div>
      </section>
 
    </>
  )
}

export default App
