import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, a} from 'reactstrap'
import { BrowserRouter as  Router, Route } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
      const { logged_in, sign_in, sign_out, current_user } = this.props
    return (

      <nav className="navbar">
        <a href="/" className="navbar-brand link-scroll">
          <img src="img/cloudblue.png" alt="cloud culture logo" className = "logo"/>
        </a>
        <h4 className = "CC">Cloud Culture</h4>
        <a href="/#intro" className="home">Home</a>
        <a href="/#about" className="about">About </a>
        <a href="/#services" className="team">Team</a>
        <a href="/map" className="map">Map</a>
        <a href = {logged_in && `/userprofile/${current_user.id}` || sign_in}
            className="profile">
            {logged_in && "Profile"}{!logged_in && "Sign In"}
        </a>
      </nav>
    );
     }
   }

export default Navbar
