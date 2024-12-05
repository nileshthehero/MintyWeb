import { React } from 'react';
import './MyNavbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import logo from '../../Images/logo.png';

const handleProducts = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
        element.scrollIntoView();
    }
}

const MyNavbar = () => {
 
    return (
        <Navbar expand="lg" collapseOnSelects>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} /> */}
                </Navbar.Brand>
 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className='myNavbar'>

                    <Nav navbarScroll>
                        
                            <Nav.Link href='#home' onClick={() => handleProducts('mainpage')}>Home</Nav.Link>
                            <Nav.Link href='#products' onClick={() => handleProducts('ourproducts')}>Products</Nav.Link>
                            <Nav.Link href='#services' onClick={() => handleProducts('service')}>Services</Nav.Link>
                            <Nav.Link href='#contact' onClick={() => handleProducts('contactform')}>Contact</Nav.Link>

                            <button className='navbutton'><a href='#'>Get A Quote</a></button>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default MyNavbar;