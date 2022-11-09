import React, { useState, setState, PureComponent } from "react";

//img 
import cycle from '../img/cycle.png'
import haltere from '../img/haltere.png'
import prie from '../img/prie.png'
import swim from '../img/swim.png'

//components
import {getUser} from '../service.js'

import Card from './card'
import { mdiFire, mdiFoodDrumstick, mdiFoodApple, mdiHamburger } from '@mdi/js';

import { RadialBarChart, RadialBar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: null,
            data: [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2100, amt: 2800}],
            dataRadial: [
                {
                    name: '25-29',
                    uv: 26.69,
                    pv: 4567,
                    fill: '#83a6ed',
                },
                {
                    name: 'unknow',
                    uv: 6.67,
                    pv: 4800,
                    fill: '#ffc658',
                }
              ],
            dataRadar: [
                {
                  subject: 'Math',
                  A: 120,
                  B: 110,
                  fullMark: 150,
                },
                {
                  subject: 'Chinese',
                  A: 98,
                  B: 130,
                  fullMark: 150,
                },
                {
                  subject: 'English',
                  A: 86,
                  B: 130,
                  fullMark: 150,
                },
                {
                  subject: 'Geography',
                  A: 99,
                  B: 100,
                  fullMark: 150,
                },
                {
                  subject: 'Physics',
                  A: 85,
                  B: 90,
                  fullMark: 150,
                },
                {
                  subject: 'History',
                  A: 65,
                  B: 85,
                  fullMark: 150,
                },
              ],
            dataBar: [
                {
                  name: 'Page A',
                  uv: 4000,
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: 'Page B',
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
                },
                {
                  name: 'Page C',
                  uv: 2000,
                  pv: 9800,
                  amt: 2290,
                },
                {
                  name: 'Page D',
                  uv: 2780,
                  pv: 3908,
                  amt: 2000,
                },
                {
                  name: 'Page E',
                  uv: 1890,
                  pv: 4800,
                  amt: 2181,
                },
                {
                  name: 'Page F',
                  uv: 2390,
                  pv: 3800,
                  amt: 2500,
                },
                {
                  name: 'Page G',
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
                },
              ]
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
            <div className="w-100 d-flex flex-row" style={{height: "calc(100% - 80px)", marginTop: "80px"}}>
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
                <div className="w-100 h-100">
                    <div className="w-100">
                        <div>
                            Félicitation ! Vous avez explosé vos objectifs hier 👏
                        </div>
                    </div>
                    <div className="w-100 d-flex h-100">
                        <div className="d-flex w-75 flex-column">
                            <div className="h-100 d-flex flex-column">
                                <div className="w-100 h-50">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={9000}
                                            height={300}
                                            data={this.state.dataBar}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="#8884d8" />
                                            <Bar dataKey="uv" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="d-flex w-100 h-50">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" width={600} data={this.state.dataRadar}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis />
                                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart cx="50%" cy="50%" width={600} innerRadius="60%" outerRadius="80%" barSize={10} data={this.state.dataRadial}>
                                            <RadialBar
                                                minAngle={15}
                                                label={{ position: 'insideStart', fill: '#fff' }}
                                                background
                                                clockWise
                                                dataKey="uv"
                                            />
                                        </RadialBarChart>
                                    </ResponsiveContainer>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart width={600} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="ml-3 w-25 d-flex flex-column justify-content-between">
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