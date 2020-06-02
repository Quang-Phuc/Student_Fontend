import React, { Component } from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import { connect } from 'react-redux';
import { actFetchDataProfileRequest } from "../../../actions/admin/profile";

class UsersAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.props.onGetProfile();
    }

    render() {
        const { profile_info } = this.props;
        const profile = (profile_info && profile_info.profile) ? profile_info.profile : '';
        return (
            <React.Fragment>
                <div className="nav-md">
                    <div className="container body">
                        <div className="main_container">
                            <LayoutAdmin />
                            <div className="right_col" role="male">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>THÔNG TIN NHÀ QUẢN TRỊ</h2>
                                                <ul className="nav navbar-right panel_toolbox">
                                                    <li><a className="collapse-link"><i
                                                        className="fa fa-chevron-up"></i></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                            role="button" aria-expanded="false"><i
                                                                className="fa fa-wrench"></i></a>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="#">Settings 1</a>
                                                            </li>
                                                            <li><a href="#">Settings 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                                                    </li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                                        <div className="well well-sm">
                                                            <div className="row">
                                                                <div className="col-sm-6 col-md-4">
                                                                    <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
                                                                </div>
                                                                <div className="col-sm-6 col-md-8 box-profile">
                                                                    <span className="d-flex mb-25">Tài khoản: <b>{profile.username}</b></span>
                                                                    <span className="d-flex mb-25 uppercase">Họ và tên: <b>{profile.name}</b></span>
                                                                    <span className="d-flex mb-25">Email: <b>{profile.email}</b></span>
                                                                    <span className="d-flex mb-25">Điện thoại: <b>{profile.phoneNumber}</b></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile_info: state.profile
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProfile: () => {
            dispatch(actFetchDataProfileRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAdminPage);