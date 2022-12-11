import React, { useState, setState, PureComponent } from "react";

//img 
import cycle from '../img/cycle.png'
import haltere from '../img/haltere.png'
import prie from '../img/prie.png'
import swim from '../img/swim.png'

//components
import Activity from "./activity";
import Session from "./session";
import Score from "./score";
import Perf from "./perf";

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
              ],
            score: [
                { value: 1, fill: "transparent" },
                { value: '', fill: "#ff0101" }
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
            this.setState({ data: user, score: [{ value: 1, fill: "transparent" },{ value: user.data.todayScore[0].todayScore, fill: "#ff0101" }] })
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
                <div className="w-100 h-100 pl-5">
                    <div className="w-100" style={{paddingBottom: 0, paddingLeft: 0, paddingTop: "1rem"}}>
                        <div className="p-3 m-3" style={{marginLeft: 0, paddingLeft: 0, paddingTop: 0}}>
                            <div className="d-flex" style={{fontSize: '40px'}}>
                                <b>Bonjour </b>
                                <div className="color-red font-weight-bold ml-1">
                                    {this.state.data.data?.userInfos.firstName}
                                </div>
                            </div>
                            <div className="mt-3">
                                <b>Félicitation ! Vous avez explosé vos objectifs hier 👏</b>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex" style={{height: "calc(100vh - 320px)", width: 'calc(100% - 160px)'}}>
                        <div className="d-flex w-100 flex-column">
                            <div className="h-100 d-flex flex-column w-100">
                                <Activity activity={this.state.activity}/>
                                <div className="p-2"></div>
                                <div className="d-flex w-100 h-50" style={{gap: '20px'}}>
                                    <div className="bg-red w-100 h-100 rounded d-flex flex-column position-relative">
                                        <div style={{color: "white", width: "180px"}} className="p-4 pb-2 font-20 position-absolute">
                                            Durée moyenne des sessions
                                        </div>
                                        <Session sessions={this.state.sessions}/>
                                    </div>
                                    <div className="bg-dark2 w-100 h-100 rounded">
                                        <Perf perf={this.state.perf}/>
                                    </div>
                                    <div className="bg-grey w-100 h-100 rounded d-flex flex-column position-relative">
                                        <div className="p-4 pb-1 font-20 position-absolute">
                                            Score
                                        </div>
                                        <div className="score-content position-absolute text-center">
                                            <strong>{100 * this.state.score[1].value}%</strong>
                                            <br />
                                            <span>
                                            de votre
                                            <br />
                                            objectif
                                            </span>
                                        </div>
                                        <Score score={this.state.score}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-3 d-flex flex-column justify-content-between" style={{width: '225px'}}>
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