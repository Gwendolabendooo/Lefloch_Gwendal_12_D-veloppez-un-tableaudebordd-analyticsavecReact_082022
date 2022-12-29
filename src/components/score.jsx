import React from "react";

import { RadialBarChart, ResponsiveContainer, RadialBar } from 'recharts';

/**
 * Returns score activity with a radialbarchart
 * @function render
 * @param { props } score: data for the chart
 * @returns { JSX }
 */
function Score ({score}) {
    return (
        <ResponsiveContainer width="100%" height="120%">
            <RadialBarChart
                width={400}
                height={400}
                startAngle={90}
                endAngle={450}
                innerRadius={200}
                outerRadius={70}
                barSize={10}
                data={score}
                >
                <RadialBar cornerRadius={50} dataKey="value" />
            </RadialBarChart>
        </ResponsiveContainer>
    )
};

export default Score;