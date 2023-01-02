import React from "react";

import { CartesianGrid, XAxis, YAxis, Tooltip, Bar, BarChart, ResponsiveContainer } from 'recharts';

/**
 * Returns the tooltip's information on user hovers
 * @function CustomTooltip
 * @param { boolean } active: is set to true on hover
 * @param { array } payload: contains datas to be displayed on hover
 * @returns { JSX }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#E60000",
            height: 100,
            border: "none",
            color: "white",
            fontSize: 15,
            textAlign: "center",
            padding: 10,
            }}
        >
            <p>{`${payload[0].value} kg`}</p>
            <p>{`${payload[1].value} kCal`}</p>
        </div>
        );
    }
    return null;
};

/**
 * Returns activity with a bar chart
 * @function render
 * @param { props } activity: data for the chart
 * @returns { JSX }
 */
function Activity ({activity}) {
    return activity.length !== 0 ? (
        <div className="w-100 h-50 d-flex flex-column bg-grey rounded pb-2">
            <div className="d-flex justify-content-between align-content-center align-items-center pt-2 pb-2 ml-3">
                <div className="font-weight-bold">
                    Activité quotidienne
                </div>
                <div className="d-flex">
                    <div className="d-flex mr-3 align-items-center">
                        <div className="dot mr-2  rounded-circle bg-dark">
                        </div>
                        <div>
                            Poids (kg)
                        </div>
                    </div>
                    <div className="d-flex mr-3 align-items-center">
                        <div className="dot mr-2 rounded-circle bg-red">
                        </div>
                        <div>
                            Calories brûlées (kcal)
                        </div>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={9000}
                    height={300}
                    barSize={10}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    data={activity}
                    >
                    <Tooltip content={CustomTooltip} offset={30} />
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <YAxis orientation="right" axisLine={false} tickLine={false} tickMargin={25}  />
                    <XAxis tickLine={false} axisLine={false} dataKey='day' tickMargin={15} tickFormatter={(day) => day.slice(-1)} />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    ) : <div>Loading</div>
};

export default Activity;