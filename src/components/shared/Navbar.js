import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  let {pathname} = useLocation();
  const localAuth = localStorage?.getItem("auth");
  const { user, token } = JSON.parse(localAuth);
 
  console.log("pathname", pathname)

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container className='container_'> 
        <Navbar.Brand>
          <Link className='logo me-5' to="/">Tasks</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle_nav' />
 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav_link' id={pathname==="/" && "active_"}>HOME</Link>
            <Link to="/blog" className='nav_link' id={pathname==="/blog" && "active_"}>BLOG</Link>
          </Nav>
        </Navbar.Collapse>
 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_login">
            <p className='profile_name'>{user && user.displayName}</p>
            <button className="logout_button" onClick={logout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
