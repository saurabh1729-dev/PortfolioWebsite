import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
function Navbar() {
    return (
        <div className="n-wrapper" id="Navbar">
          {/* left */}
          <div className="n-left">
            <div className="n-name">Saurabh</div>
          </div>
          {/* right */}
          <div className="n-right">
            <div className="n-list">
              <ul style={{ listStyleType: "none" }}>
                  <Link to="Projects" spy={true} smooth={true}>
                    <li>
                      Projects
                    </li>
                  </Link>
                  <Link to="Skills" spy={true} smooth={true}>
                    <li>
                      Skills
                    </li>
                  </Link>                
                <li className='Download'>
                  <a href={require('../../data/resume.pdf')} download >
                    Download Resume</a>
                </li>
              </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
            </Link>
          </div>
        </div>
      );
}

export default Navbar