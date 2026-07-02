import { Link } from "react-router-dom"



function ComingSoon() {
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
            <h1>Coming Soon.</h1>
        </div>
        </>
    )
}

export default ComingSoon;