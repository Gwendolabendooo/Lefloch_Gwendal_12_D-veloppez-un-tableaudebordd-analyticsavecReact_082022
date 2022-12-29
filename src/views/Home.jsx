import React, { useState, setState } from "react";

//components
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";

class Home extends React.Component {
    render() {
        return (
            <div className="h-100vh d-flex flex-column">
                <Navbar/>
                <Dashboard/>
            </div>
        )
    }
};

export default Home;