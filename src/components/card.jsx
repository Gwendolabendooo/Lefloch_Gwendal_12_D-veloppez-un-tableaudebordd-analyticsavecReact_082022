import React from "react";

import Icon from '@mdi/react';

/**
 * Returns the tooltip's information on user hovers
 * @function Card
 * @param { tag } color: return the color tag of the card
 * @param { integer } data: return the number of data
 * @param { string } icon: return the path of the icon
 * @param { string } label: return the label of the card
 * @returns { JSX }
 */
function Card ({color, icon, data, label}) {
    return (
        <div className="p-3 d-flex align-items-center bg-grey rounded card">
            <div className="rounded p-1 bg-card" style={{backgroundColor: color}}>
                <Icon path={icon} color={color} size={1.5}/>
            </div>
            <div className="p-2">
                <div className="font-weight-bold">
                    {data}
                </div>
                <div className="font-13">
                    {label}
                </div>
            </div>
        </div>
    )
};

export default Card;