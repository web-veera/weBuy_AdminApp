import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/auth.actions';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ContactsIcon from '@mui/icons-material/Contacts';
import logo from '../logo.png'

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout())
    }

    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}><LogoutIcon /> Logout</span>
                </li>
            </Nav>
        );
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to="/Signin" className="nav-link"><LoginIcon /> Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Signup" className="nav-link"><ContactsIcon />Signup</NavLink>
                </li>
            </Nav>
        );
    }
    const logoStyle={
        width:'100%',
        height:'auto',
        maxWidth:'60px'
    }

    return (
        <>
            <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
                <Container fluid>
                    <img src={logo} style={logoStyle} alt="logo" />
                    {/* <Navbar.Brand >Admin DashBoard</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand" style={{fontWeight:'600'}}>Admin DashBoard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
