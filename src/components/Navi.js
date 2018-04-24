import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "../App.css";

class Navi extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img
            className="logo"
            src="icons/chef_big.png"
            alt="chef's hat as app logo"
          />
        </div>
        <Nav bsStyle="pills" stacked className="Navi">
          <NavItem href="#">Home</NavItem>
          <NavDropdown title="Filter" id="nav-dropdown">
            <MenuItem className="menu-item">Breakfast</MenuItem>
            <MenuItem className="menu-item">Lunch</MenuItem>
            <MenuItem className="menu-item">Dessert</MenuItem>
            <MenuItem className="menu-item">Dinner</MenuItem>
            <MenuItem className="menu-item">Snack</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default Navi;
