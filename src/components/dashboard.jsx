import React, { useState, setState, PureComponent } from "react";

//img 
import cycle from '../img/cycle.png'
import haltere from '../img/haltere.png'
import prie from '../img/prie.png'
import swim from '../img/swim.png'

//components
import {getUser, getUserActivity, getUserAverageSessions, getUserPerformance} from '../service.js'

import Card from './card'
import { mdiFire, mdiFoodDrumstick, mdiFoodApple, mdiHamburger } from '@mdi/js';

import { RadialBarChart, RadialBar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: null,
            data: [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2100, amt: 2800}],
            activity: [
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
              perf: [
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
            sessions: [
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
        this.getUserInfo()
        this.getUserActivitys()
        this.getUserAverageSessionss()
        this.getUserPerformances()
    }

    async getUserInfo() {
        try {
            const user = await getUser()
            user.data.todayScore = [{todayScore: user.data.todayScore}]
            console.log(user)
            this.setState({ data: user })
        } catch (error) {
            console.log(error)
        }
    }

    async getUserActivitys() {
        try {
            const user = await getUserActivity()
            this.setState({ activity: user.data.sessions })
        } catch (error) {
            console.log(error)
        }
    }

    async getUserAverageSessionss() {
        try {
            const user = await getUserAverageSessions()
            this.setState({ sessions: user.data.sessions })
        } catch (error) {
            console.log(error)
        }
    }

    async getUserPerformances() {
        try {
            const user = await getUserPerformance()
            user.data.data.map(data => {
                data.kind = user.data.kind[data.kind]
            })
            this.setState({ perf: user.data })
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
                    <div className="w-100 p-5" style={{paddingBottom: 0, paddingTop: "2rem"}}>
                        <div className="p-3 m-3">
                            <div className="d-flex" style={{fontSize: '30px'}}>
                                <b>Bonjour </b>
                                <div className="color-red font-weight-bold ml-1">
                                    {this.state.data.data?.userInfos.firstName}
                                </div>
                            </div>
                            <div className="mt-3">
                                Félicitation ! Vous avez explosé vos objectifs hier 👏
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex h-100 p-5" style={{paddingTop: 0}}>
                        <div className="d-flex w-75 flex-column">
                            <div className="h-100 d-flex flex-column w-100">
                                <div className="w-100 h-50 bg-grey rounded m-3 p-3">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={9000}
                                            height={300}
                                            barSize={10}
                                            data={this.state.activity}
                                            // margin={{
                                            //     top: 5,
                                            //     right: 30,
                                            //     left: 20,
                                            //     bottom: 5,
                                            // }}
                                            >
                                            <CartesianGrid strokeDasharray="5 5" />
                                            <YAxis />
                                            <XAxis />
                                            <Bar dataKey="kilogram" fill="#282D30" />
                                            <Bar dataKey="calories" fill="#E60000" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="d-flex w-100 h-50">
                                    <div className="bg-red w-100 h-100 m-3 p-3 rounded">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart width={600} data={this.state.sessions}>
                                                <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} />
                                                <CartesianGrid stroke="#ff000000" strokeDasharray="5 5" />
                                                <Tooltip />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="bg-dark2 w-100 h-100 p-3 m-3 rounded">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" width={600} data={this.state.perf.data}>
                                                <PolarGrid />
                                                <PolarAngleAxis dataKey="kind" stroke="#fff"/>
                                                <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    //refaire
                                    <div className="bg-grey w-100 h-100 p-3 m-3 rounded">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadialBarChart cx="50%" cy="50%" width={600} innerRadius="60%" outerRadius="80%" barSize={10} data={this.state.data.data?.todayScore}>
                                                <RadialBar
                                                    minAngle={15}
                                                    label={{ position: 'insideStart', fill: '#fff' }}
                                                    background
                                                    clockWise
                                                    dataKey="todayScore"
                                                />
                                            </RadialBarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-3 w-25 d-flex flex-column justify-content-between">
                            <Card icon={mdiFire} data={this.state.data.data?.keyData.calorieCount + "kcal"} label="Calories" color="rgb(255 0 0 / 1)"/>
                            <Card icon={mdiFoodDrumstick} data={this.state.data.data?.keyData.proteinCount + "g"} label="Proteines" color="#4AB8FF"/>
                            <Card icon={mdiFoodApple} data={this.state.data.data?.keyData.carbohydrateCount + "g"} label="Glucides" color="#FDCC0C"/>
                            <Card icon={mdiHamburger} data={this.state.data.data?.keyData.lipidCount + "g"} label="Lipides" color="#FD5181"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Navbar;