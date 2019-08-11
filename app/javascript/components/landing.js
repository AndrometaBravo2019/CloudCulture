import React from "react"

import Navbar from './nav'

class Landing extends React.Component {
  render () {
      const {logged_in, sign_in, sign_out, current_user } = this.props
    return (

  <div className = "Landing">

    <Navbar
      current_user = { current_user }
      sign_in = { sign_in }
      sign_out = { sign_out }
      logged_in = { logged_in }
    />

    <div id="top" className="intro">
      <h1>Cloud Culture</h1>
      <p className="italic">
        Cloud Culture is a collaborative networking platform for web workers.
      </p>
      <p align='right' className="italic" id = "wrt">
        'working remotely... together.'
      </p>
    </div>

    <div id="about">
      <div id = "aboutText">
        <h2 className="heading">We're All In This Together</h2>
        <hr/>
        <p>Rapid growth of online resources for students and digital professionals has led to a large population of remote web workers. Although convenient, this raises issues of social isolation, productivity management and insufficient mentoring.</p>
        <p>Cloud Culture provides location-based networking profiles, so that web workers can share their daily tasks, current progress, roadblocks, coding languages, meetups, etc ... (encouraging collaboration and new connections)</p>
      </div>
      <p id = "aboutImg">
        <img src="https://assets.reviews.com/uploads/2015/12/01011903/microsoft_onedrive_logo1.png" alt="" className=""/>
      </p>
    </div>

    <div id="services" >
      <h2 className="heading">Meet the Team</h2>
      <div className="box miles">
        <p>
          <img src="img/milesnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/>
        </p>
        <h5>Miles Shumilak</h5>
        <p>Cofounder & Web Developer</p>
      </div>
      <div className="box sebastian">
        <p>
          <img src="img/sebastiannew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/>
        </p>
        <h5>Sebastian White</h5>
        <p>Cofounder & Web Developer</p>
      </div>
      <div className="box chris">
        <p>
          <img src="img/chrisnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/>
        </p>
        <h5>Christopher Norton</h5>
        <p>Cofounder & Web Developer</p>
      </div>
      <div className="box travis">
        <p>
          <img src="img/travisnew.jpg" alt="" size='100px' className="img-fluid rounded-circle"/>
        </p>
        <h5>Travis Baker</h5>
        <p>Cofounder & Web Developer</p>
      </div>
    </div>

    <footer>
      <p className="mb-md-0 text-center text-md-left">
        &copy;2019 Team Andrometa [ a space time development ]
      </p>
      <p className="credit mb-md-0 text-center text-md-right">
        <a href="">'working remotely... together.'</a>
      </p>
    </footer>

  </div>

    );
  }
}

export default Landing
