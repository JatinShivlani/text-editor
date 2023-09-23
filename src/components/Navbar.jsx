import React from 'react'
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-5`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Zx Text-editor</Link>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="/navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="modeSwitch" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="modeSwitch">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
