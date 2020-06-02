import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SideBarLeft from "../../components/LayoutHome/SidebarLeft/SidebarLeft";
import styles from "../../components/MainHome/styles";
import LayoutHome from "../../components/LayoutHome/Layout/Layout";
import {connect} from 'react-redux';
import {actActiveUserRequest} from "../../actions/user/active";
import {setIsLoading} from "../../components/LoginBox/actions";



class ActiveUser extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { query, onActiveUser } = this.props;
        var token = query.token;
        onActiveUser({token: token});
    }

    render() {
        const {classes, tokenMessage} = this.props;

        return (
            <div>
                <LayoutHome>
                    <Container maxWidth="lg">
                        <div className="slider-area">
                            <img width="100%" src="/static/images/5d16b7260b8fe.image.png" alt="slider-area"/>
                        </div>
                        <div className="content">
                            <div className="row">
                                <SideBarLeft/>
                                <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                                    <h4>
                                        {tokenMessage}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </LayoutHome>


            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        tokenMessage: state.activeUser.message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onActiveUser: (token) => {
            dispatch(actActiveUserRequest(token));
        },
        setIsLoading: (loading) => {
            dispatch(setIsLoading(loading))
        }
    }
}

ActiveUser = withStyles(styles)(ActiveUser);

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUser);
