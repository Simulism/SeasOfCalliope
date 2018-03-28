import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

import '../css/home.css';

//make random merchant load each time
//random backgrounds
//nav links need to be swtiched to buttons that call functions, that then
//take you to the repspective page

class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {'header': ''};
    }

    handleRouterButtons(e){
        if(e.target.name === "playnow"){
            this.props.history.push('/playnow');
        }
        else if(e.target.name === "guides"){
            this.props.history.push('/guides');
        }
        
    }

    render() {
        return (
            <div className="home__container">
                <div className="home__title">
                    Seas of Calliope
                </div>
                <div className="home__menuContainer">
                    <div className="home__menuWrapper">
                        <div className="home__menu">
                        <button name="playnow" onClick={(e) => this.handleRouterButtons(e)}>Play Now</button><br/><br />
                        <button name="guides" onClick={(e) => this.handleRouterButtons(e)}>Guides</button>
                        {/* news */}
                        <form action="http://site.com/news">
                            <input type="submit" value="News" />
                        </form>
                        {/* forums */}
                        <form action="http://site.com/forums">
                            <input type="submit" value="Forums" />
                        </form>
                        </div>
                    </div>
                    <div className="home__merchant"/>
                </div>
            </div>
            );
        }
    }
export default Home;