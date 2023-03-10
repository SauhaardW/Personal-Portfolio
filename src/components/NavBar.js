import React from 'react'
import{ useState, useEffect} from "react";
import{ Container, Nav , Navbar } from "react-bootstrap";
import logo from '../assets/img/logoNewNew.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import Github from '../assets/img/github.svg'



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); 

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('experience')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/sauhaard/"><img src={navIcon1} alt=""/></a>
                        <a href="https://github.com/SauhaardW"><img src={Github} alt="" class="filter-white"/></a>
                    </div>
                <button className="vvd" onClick={event =>  window.location.href='/#contact'}><span>Let's Connect!</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}