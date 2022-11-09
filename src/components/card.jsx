import React, { useState, setState } from "react";

import Icon from '@mdi/react';

class Card extends React.Component {

    // constructor(props) {
    //     super(props);
    
    //     }; 
    // }

    componentDidMount() {
    }

    render() {
        return (
            <div className="p-2 d-flex align-items-center bg-grey rounded card">
                <div className="rounded p-2 bg-card" style={{backgroundColor: this.props.color}}>
                    <Icon path={this.props.icon} color={this.props.color} size={2}/>
                </div>
                <div className="p-2">
                    <div className="font-weight-bold">
                        {this.props.data}
                    </div>
                    <div className="font-13">
                        {this.props.label}
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;