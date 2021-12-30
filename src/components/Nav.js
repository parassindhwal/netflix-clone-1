import React, { useEffect, useState } from 'react';
import "./Nav.css";
import netflix__logo from "../images/netflix__logo.png";
import { useHistory } from 'react-router-dom';


function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show ? "nav__black":''}`}>
            <div className="nav__contents">
                <img 
                    onClick={() => history.push('/')}
                    className="nav__logo" 
                    src={netflix__logo} 
                    alt="" 
                />
                <img 
                    onClick={() => history.push("/profile")}
                    className="nav_avatar" 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt="" 
                />
            </div>
        </div>
    )
}

export default Nav
