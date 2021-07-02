import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="mr-3 text-white text-decoration-none">Covid -19 </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/india" className="mr-3 text-white text-decoration-none">India</Link>
                    <Link to="/world" className="mr-3 text-white text-decoration-none">World</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default App;