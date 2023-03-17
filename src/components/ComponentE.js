import React, { Component } from 'react';
import UserContext from './userContext';
import ComponentF from './ComponentF';


class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                ComponentE contex {this.context}
                <ComponentF />
            </div>
        );
    }
}

ComponentE.contextType = UserContext

export default ComponentE;