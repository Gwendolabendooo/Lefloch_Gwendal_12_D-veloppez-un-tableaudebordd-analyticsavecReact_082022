import React from "react";

import { XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

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
            background: "white",
            fontSize: 10,
            fontWeight: 500,
            textAlign: "center",
            padding: 8,
            }}
        >
            <span>{`${payload[0].value} min`}</span>
        </div>
        );
    }
    return null;
};

/**
 * Returns a day from a week
 * @function CustomizedCursor
 * @param { integer } day: expected day of the week
 * @returns { JSX }
 */
const days = (day) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[day - 1];
};

/**
 * Returns a customized tooltip cursor
 * @function CustomizedCursor
 * @param { array } points: array of shape's points
 * @returns { JSX }
 */
const CustomizedCursor = ({ points }) => {
    const xPos = points[0].x;
    return (
        <rect x={xPos} y={0} width={"100%"} height={"100%"} fill="rgba(0, 0, 0, 0.1)" />
    );
};

/**
 * Returns session activity with a linechart
 * @function render
 * @param { props } sessions: data for the chart
 * @returns { JSX }
 */
function Session ({sessions}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={200} height={200} margin={{ top: 0, right: 10, bottom: 0, left: 10 }} data={sessions}>
                <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} activeDot={{ r: 4, onMouseEnter: () => mouseEnterHandler("ABC") }} />
                <Tooltip
                    content={CustomTooltip}
                    cursor={<CustomizedCursor />}
                    offset={20}
                />
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    mirror={true}
                    padding={{ left: 10, right: 10 }}
                    stroke="rgba(255, 255, 255, 0.7)"
                    style={{ fontSize: 12, fontWeight: 500 }}
                    tickLine={false}
                    tickMargin={15}
                    tickFormatter={days}
                />
                <YAxis
                    axisLine={false}
                    domain={["dataMin - 20", "dataMax + 40"]}
                    mirror={true}
                    tickCount={0}
                    tickLine={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default Session;