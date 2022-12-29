import React from "react";

import { PolarAngleAxis, RadarChart, ResponsiveContainer, PolarGrid, Radar } from 'recharts';

/**
 * Returns Perf activity with a radar chart
 * @function render
 * @param { props } perf: data for the chart
 * @returns { JSX }
 */
function Session ({perf}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" width={600} data={perf.data}>
                <PolarGrid gridType="polygon"
                polarRadius={[10, 20, 40, 60, 80]}
                stroke="#fff"
                radialLines={false}
                />
                <PolarAngleAxis dataKey="kind" tickLine={false} tickMargin={30} stroke="#fff"/>
                <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    )
};

export default Session;