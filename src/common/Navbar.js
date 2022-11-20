import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/About/About';
import Gallery from '../components/gallery/Gallery';
import Destinations from '../components/Destinations/Home';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Footer from './Footer/Footer';
import SinglePage from '../SinglePage/Singlepage'
import Blogsingle from '../components/Blog/Blog-single-page/BlogSingle'
import './Navbar.css';
function Navb(){
    return(
        <>
<BrowserRouter>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="nav-bar">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="nav-l" as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/about"}>About us</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/gallery"}>Gallery</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/destination"}>Destinations</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/blog"}>Blogs</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/contact"}>Contact us</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link className="nav-l" as={Link} to={"/sign"}> Sign In</Nav.Link>
            <Nav.Link className="nav-l" as={Link} to={"/register"}>Register</Nav.Link>
 
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/destination" element={<Destinations/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/sign" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/singlepage/:id' element={<SinglePage/>}></Route>
        <Route path='/Blogsingle/:id' element={<Blogsingle/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

</>
    )
};

export default Navb;