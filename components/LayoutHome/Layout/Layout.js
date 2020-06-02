import HeaderIndex from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {Component} from "react";
import {connect} from 'react-redux';
import SnackbarNotification from '../../SnackbarNotification';

class LayoutHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {message, variant} = this.props;

        return(
            <div className="Layout">

                {message && (
                    <SnackbarNotification
                        autoHideDuration={2000}
                        vertical="top"
                        horizontal="right"
                        message={message}
                        variant={variant}
                    />
                )}

                <HeaderIndex />
                <div className="Content">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message.error,
        variant: state.message.variant
    }
}


export default  connect(mapStateToProps, null)(LayoutHome);
