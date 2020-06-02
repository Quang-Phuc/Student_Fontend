import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import {StudentContainer} from '../../components/common/Container'
import SideBarLeft from "../../components/LayoutHome/SidebarLeft/SidebarLeft";
import styles from "../../components/MainHome/styles";
import LayoutHome from "../../components/LayoutHome/Layout/Layout";
import {connect} from 'react-redux';
import {actResetPasswordRequest} from "../../actions/user/active";
import {ErrorDiv, LabelDiv} from "../../components/LayoutHome/SignIn/styles";
import {clearSnackBar} from "../../actions/web/message";
import Validator from "../../utils/validator";



class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            errors: {}
        };

        const rules = [
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu.'
            },
            {
                field: 'confirmPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập lại mật khẩu.'
            },
            {
                field: 'password',
                method: 'isLength',
                args: [{min: 6}],
                validWhen: true,
                message: 'Mật khẩu phải nhiều hơn 6 kí tự'
            }
        ];
        this.validator = new Validator(rules)
    }

    componentWillMount() {
        const { query, onActiveUser } = this.props;
        var token = query.token;
        console.log(token)
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    validatePassword = () => {
        if(this.state.password != this.state.confirmPassword) {
            this.setState({
                errors: {
                    repassword: 'Nhập lại mật khẩu không khớp.'
                }
            })
            return false;
        }
        return true;
    }

    onResetPassord = (e) => {
        const { query, onActiveUser } = this.props;
        var token = query.token;
        this.props.clearSnackBar()
        e.preventDefault();
        var errors = this.validator.validate(this.state);
        var { password, confirmPassword } = this.state;
        if(this.validatePassword() && Object.keys(errors).length === 0) {
            var user = {
                password: password,
                confirmPassword: confirmPassword,
                token: token
            }

            this.props.onResetPassword(user);
        }
    }

    render() {
        const {classes, tokenMessage} = this.props;

        var style1 = {
            paddingTop: '50px',
            paddingBottom: '100px',
        }

        return (
            <div>
                <LayoutHome>
                    <StudentContainer>
                        <div className="slider-area">
                            <img width="100%" src="/static/images/5d16b7260b8fe.image.png" alt="slider-area"/>
                        </div>
                        <div className="content" style={style1}>
                            <div className="row">
                                <SideBarLeft/>
                                <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                                    <form className="form-horizontal">
                                        <div className="form-group d-flex">
                                            <LabelDiv className="control-label col-sm-2 text-right" htmlFor="email">Mật khẩu</LabelDiv>
                                            <div className="col-sm-8">
                                                <input value={this.state.password} name="password" type="password"
                                                       className="form-control" id="email" onChange={this.onChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group d-flex">
                                            <LabelDiv className="control-label col-sm-2 text-right" htmlFor="pass"
                                                      onChange={this.onChange}>Nhập lại Mật khẩu</LabelDiv>
                                            <div className="col-sm-8">
                                                <input type="password" name="confirmPassword" value={this.state.confirmPassword} className="form-control" id="password"
                                                       onChange={this.onChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group d-flex">
                                            <div className="col-sm-2">
                                            </div>
                                            <div className="col-sm-8 d-flex">
                                                <button type="submit" className="register" onClick={this.onResetPassord}>Đổi mật khẩu</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </StudentContainer>
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
        onResetPassword: (token) => {
            dispatch(actResetPasswordRequest(token));
        },
        clearSnackBar: () => {
            dispatch(clearSnackBar())
        },
    }
}

ResetPassword = withStyles(styles)(ResetPassword);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
