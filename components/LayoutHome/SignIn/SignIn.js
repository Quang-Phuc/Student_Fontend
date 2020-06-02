import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Validator} from "../../../utils/validator";
import {actLogin} from "../../../actions/auth";
import PropTypes from "prop-types";
import { setIsLoading} from "../../LoginBox/actions";
import {ErrorDiv, LabelDiv} from "./styles";
import {closeModal, openModal} from "../../../actions/web/modal";
import {clearSnackBar} from "../../../actions/web/message";
import ColoredLinearProgress from "../../ColoredLinearProgress/ColorLinearProgress";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state = {
            txtEmail: '',
            txtPassword: '',
            errors: {}
        };

        const rules = [
            {
                field: 'txtEmail',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập tên tài khoản.',
            },
            {
                field: 'txtPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu.',
            }
        ];
        this.validator = new Validator(rules);
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        this.props.clearSnackBar()
        e.preventDefault();
        var errors = this.validator.validate(this.state)

        this.setState({
            errors: errors
        })

        if (errors.txtEmail == null & errors.txtPassword == null) {
            var {txtEmail, txtPassword} = this.state;
            var user = {
                email: txtEmail,
                password: txtPassword
            }
            this.props.onLogin(user)
            this.props.setIsLoading({isLoading: true});
        }
    }

    closeModal = () => {
        this.props.closeModal()
    }

    openSignUpModal = () => {
        this.props.openModalSignUp({
            open: true,
            title: 'SingUp',
            message: 's',
            closeModal: this.closeModal
        }, 'signUp')
    }

    openModalForgetPassword = () => {
        this.props.openModalSignUp({
            open: true,
            title: 'SingUp',
            message: 's',
            closeModal: this.closeModal
        }, 'forgetPassword')
    }


    render() {
        var {isLoading} = this.props;
        var {errors} = this.state;

        return (
            <div className="" role="document">

                {isLoading && <ColoredLinearProgress/>}
                <div className="modal-content modal-login">
                    <div className="modal-head">
                        ĐĂNG NHẬP
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-3 text-right" htmlFor="email">Email</LabelDiv>
                                <div className="col-sm-8">
                                    <input value={this.state.txtEmail} name="txtEmail" type="email"
                                           className="form-control" id="email" onChange={this.onChange}/>
                                    {errors.txtEmail && <ErrorDiv className="validation"
                                                                  style={{display: 'block'}}>{errors.txtEmail}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-3 text-right" htmlFor="pass"
                                       onChange={this.onChange}>Mật khẩu</LabelDiv>
                                <div className="col-sm-8">
                                    <input type="password" name="txtPassword" className="form-control" id="password"
                                           onChange={this.onChange}/>
                                    {errors.txtPassword && <ErrorDiv className="validation"
                                                                     style={{display: 'block'}}>{errors.txtPassword}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-8 d-flex forget-pass">
                                    <span className="d-flex"><a href="#" className="pl-1" onClick={this.openModalForgetPassword}> Quên mật khẩu</a></span>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-3">
                                </div>
                                <div className="custom-control custom-checkbox col-sm-8 d-flex agreeDiv">
                                    <input type="checkbox" className="custom-control-input"
                                           id="customControlAutosizing"/>
                                    <label className="custom-control-label" style={{fontWeight: 'normal'}}
                                           htmlFor="customControlAutosizing">Ghi nhớ tôi</label>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-8 d-flex">
                                    <button type="submit" className="register" onClick={this.onLogin}>Đăng nhập</button>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-8 d-flex haveAcount">
                                    <span className="d-flex">Bạn đã có tài khoản? <a href="#" className="pl-1"
                                                                                     onClick={this.openSignUpModal}> Đăng ký
                                        ngay</a></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool
};

SignIn.defaultProps = {
    isLoading: false,
    error: '',
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (user) => {
            dispatch(actLogin(user));
        },
        setIsLoading: (loading) => {
            dispatch(setIsLoading(loading))
        },
        closeModal: () => dispatch(closeModal()),
        openModalSignUp: (modalProps, modalType) => {
            dispatch(openModal({modalProps, modalType}))
        },
        clearSnackBar: () => {
            dispatch(clearSnackBar())
        },
        openModalForgetPassword: (modalProps, modalType) => {
            dispatch(openModal({modalProps, modalType}))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
