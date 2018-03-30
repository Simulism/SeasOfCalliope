import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    componentDidMount(){

    }

    handleRouterButtons(e){
        if(e.target.name === "playnow"){
            this.props.history.push('/playnow');
        }
        else if(e.target.name === "guides"){
            this.props.history.push('/guides');
        }
        else if(e.target.name === "news"){
            window.open("https://www.youraddress.com","_self")
        }
        else if(e.target.name === "forums"){
            window.open("https://www.youraddress.com","_self")
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
                        <Button className="home__buttons home__buttons__playNow" color="warning" size="lg" block name="playnow" onClick={(e) => this.handleRouterButtons(e)}>Play Now</Button>
                        <Button className="home__buttons" color="primary" size="lg" block name="guides" onClick={(e) => this.handleRouterButtons(e)}>Guides</Button>

                        <Button className="home__buttons" color="primary" size="lg" block name="news" onClick={(e) => this.handleRouterButtons(e)}>News</Button>
                        <Button className="home__buttons" color="primary" size="lg" block name="forums" onClick={(e) => this.handleRouterButtons(e)}>Forums</Button>
                        </div>
                    </div>
                    <div className="home__merchant"/>
                </div>
            </div>
            );
        }
    }
export default Home;