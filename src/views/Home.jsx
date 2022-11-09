import React, { useState, setState } from "react";

// import Chart from "./Chart.js";
// import {
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     Tooltip,
//     ResponsiveContainer,
//     Legend,
//     BarChart,
//     Bar
//   } from "recharts";

import {service} from '../service.js'

//components
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";

class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        }; 
    }

    componentDidMount() {
        // service.getUser()
    }
    
    componentWillUnmount() {
        
    }

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