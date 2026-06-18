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
        <h1>Featured Projects.</h1>
        <div>
        <div className="projOne"><img src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
        <div>
        <div className="projTwo"><img src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
        <div>
        <div className="projThree"><img src={tempImage} alt="temporary image of a strawberry."/></div>
        <p>see more...</p>
        </div>
      </section>

      <section className="contact">
        <h1>Contact.</h1>
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
     {/* 
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
     */}
    </>
  )
}

export default App
