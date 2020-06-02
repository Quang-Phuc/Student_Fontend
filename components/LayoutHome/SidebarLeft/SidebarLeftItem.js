import React, { Component } from 'react';

class SideBarLeftItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { val } = this.props;
        return (
            <li><a href="#"><span className="square">♦</span>{val.name}</a></li>
        );
    }
}

export default SideBarLeftItem;