import { Link } from "react-router-dom"


function Projects() {
    return (
        <>
        <section>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/ComingSoon">Resume</Link></li>
          </ul>
        </nav>
      </section>
        <div>
            <h1>projects.</h1>
        </div>
        </>
    )
}

export default Projects;