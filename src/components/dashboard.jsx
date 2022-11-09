import React, { useState, setState } from "react";

//img 
import cycle from '../img/cycle.png'
import haltere from '../img/haltere.png'
import prie from '../img/prie.png'
import swim from '../img/swim.png'

//components
import {getUser} from '../service.js'

import Card from './card'
import { mdiFire, mdiFoodDrumstick, mdiFoodApple, mdiHamburger } from '@mdi/js';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: null
        }; 

        
    }

    componentDidMount() {
        this.getAll()
    }

    async getAll() {
        try {
            const user = await getUser()
            console.log(user)   
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="w-100 d-flex flex-row h-100">
                <div className="bg-dark p-2 d-flex flex-column">
                    <div className="h-100 d-flex flex-column justify-content-center">
                        <img className="p-1 rounded bg-white mb-2 btn-side" src={prie} alt="" />
                        <img className="p-1 rounded bg-white mb-2 btn-side" src={swim} alt="" />
                        <img className="p-1 rounded bg-white mb-2 btn-side" src={cycle} alt="" />
                        <img className="p-1 rounded bg-white btn-side" src={haltere} alt="" />
                    </div>
                    <div className="copyright d-flex align-items-center">
                        Copyright, SportSee 2020
                    </div>
                </div>
                <div className="w-100">
                    <div>
                        {/* Bonjour {this.state.user.userInfos.firstName} */}
                    </div>
                    <div>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </div>
                    <div className="d-flex">
                        <div>

                        </div>
                        <div className="ml-3">
                            <Card icon={mdiFire} data="1,930kCal" label="Calories" color="rgb(255 0 0 / 1)"/>
                            <Card icon={mdiFoodDrumstick} data="155g" label="Proteines" color="#4AB8FF"/>
                            <Card icon={mdiFoodApple} data="290g" label="Glucides" color="#FDCC0C"/>
                            <Card icon={mdiHamburger} data="50g" label="Lipides" color="#FD5181"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Navbar;