import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
// import '../css/app.css';

//new structure
//Play Now!
//Guides
//News
//community or Forum


const Navigation = () => {
    return (
        <div>
            <Nav className="topNavigation">
                {/* <div className="topNavigation__items"><Link to="/" className="Nav-link">Home</Link></div> */}
                <div className="topNavigation__items"><button><Link to="/playnow/" className="Nav-link">Play Now</Link></button></div>
                <div className="topNavigation__items"><button><Link to="/guides/" className="Nav-link">Guides</Link></button></div>
                {/* news */}
                <form action="http://site.com/news">
                    <input type="submit" value="News" />
                </form>
                {/* forums */}
                <form action="http://site.com/forums">
                    <input type="submit" value="Forums" />
                </form>
            </Nav>
        </div>
    );
};
export default Navigation;