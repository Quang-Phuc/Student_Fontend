import React, { Component, Children } from 'react'

class ST_Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var {popupName} = this.props;
        return (
            <div className="modal fade" id={popupName} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {this.props.children}
            </div>
        );
    }
}

export default ST_Modal;