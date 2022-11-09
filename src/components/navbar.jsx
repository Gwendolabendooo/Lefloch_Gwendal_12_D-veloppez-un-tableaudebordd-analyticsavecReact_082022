import React, { useState, setState } from "react";

//components
import Darkmode from "./darkmode";

//img
import logo from "../img/logo.png"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            test: true
        }; 
    }

    componentDidMount() {
    }

    render() {
        return (
            <nav className="bg-dark">
                <ul className="d-flex justify-content-between align-items-center p-2 font-18 font-weight-bold">
                    <li>
                        <img src={logo} width="150px" alt="" />
                    </li>
                    <li>
                        Accueil
                    </li>
                    <li>
                        Profil
                    </li>
                    <li>
                        Réglage
                    </li>
                    <li>
                        Communauté
                    </li>
                    <Darkmode/>
                </ul>
            </nav>
        )
    }
};

export default Navbar;