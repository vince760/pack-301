
import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

function AuthNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
 
  const toggleCollapse = () => {
    if (!collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
    setCollapseOpen(!collapseOpen);
  };
  return (
    <Navbar
      className={classnames("navbar-absolute fixed-top", color)}
      expand="lg"
    >
      <Container>
        <div className="navbar-wrapper">
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Paper Dashboard PRO React
          </NavbarBrand>
        </div>
        <button
          aria-controls="navigation-index"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </button>
        <Collapse isOpen={collapseOpen} className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/admin/dashboard" className="nav-link">
                <i className="nc-icon nc-layout-11" />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/register" className="nav-link">
                <i className="nc-icon nc-book-bookmark" />
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/login" className="nav-link">
                <i className="nc-icon nc-tap-01" />
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/user-profile" className="nav-link">
                <i className="nc-icon nc-satisfied" />
                User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/lock-screen" className="nav-link">
                <i className="nc-icon nc-key-25" />
                Lock
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default AuthNavbar;
