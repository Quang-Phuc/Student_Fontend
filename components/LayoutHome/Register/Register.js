import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeModal, openModal} from "../../../actions/web/modal";
import ReCAPTCHA from "react-grecaptcha";
import PropTypes from "prop-types";
import {actRegister} from "../../../actions/user/register";
import {setIsLoading} from "../../LoginBox/actions";
import Validator from "../../../utils/validator";
import {LabelDiv, ErrorDiv} from "./styles";
import {clearSnackBar} from "../../../actions/web/message";
import ColoredLinearProgress from "../../ColoredLinearProgress/ColorLinearProgress";

const callback = function () {
};
const expiredCallback = function () {
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            repassword: '',
            email: '',
            phone: '',
            isCheck: false,
            errors: {}
        }

        const rules = [
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập tên tên đầy đủ..'
            },
            {
                field: 'username',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu.'
            },
            {
                field: 'username',
                method: 'isLength',
                args: [{min: 6}],
                validWhen: true,
                message: 'Tên đăng nhập phải nhiều hơn 6 kí tự'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu.'
            },
            {
                field: 'repassword',
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
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập email.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'Vui lòng nhập đúng định dạng email.'
            },
            {
                field: 'phone',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập số điện thoại email.'
            },
        ];
        this.validator = new Validator(rules)
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
        if(this.state.password != this.state.repassword) {
            this.setState({
                errors: {
                    repassword: 'Nhập lại mật khẩu không khớp.'
                }
            })
            return false;
        }
        return true;
    }

    openSignInModal = () => {
        this.props.openModalSignIn({
            open: true,
            title: 'SignIn',
            message: 's',
            closeModal: this.closeModal
        }, 'signIn')
    }

    onRegister = (e) => {
        this.props.clearSnackBar();
        e.preventDefault();
        var errors = this.validator.validate(this.state);

        this.setState({
            errors: errors
        })

        if (this.validatePassword() && Object.keys(errors).length === 0 && this.state.isCheck) {
            var {username, password, name, email, phone} = this.state;
            var user = {
                username: username,
                password: password,
                name: name,
                email: email,
                phoneNumber: phone
            }
            this.props.onRegister(user)
            this.props.setIsLoading({isLoading: true});
        }
    }


    render() {
        var {isLoading} = this.props;
        var {errors} = this.state;

        return (
            <div className="modal-dialogs" role="document">
                {isLoading && <ColoredLinearProgress color="secondary"/>}
                <div className="modal-contents">
                    <div className="modal-head">
                        ĐĂNG KÝ
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-4 text-right" htmlFor="name">Họ
                                    tên:</LabelDiv>
                                <div className="col-sm-8">
                                    <input type="text"
                                           className="form-control" id="name"
                                           name="name"
                                           onChange={this.onChange}
                                           value={this.state.name}/>
                                    {errors.name && <ErrorDiv className="validation">{errors.name}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-4 text-right" htmlFor="acc">Tên đăng
                                    nhập</LabelDiv>
                                <div className="col-sm-8">
                                    <input type="text"
                                           className="form-control"
                                           id="acc"
                                           name="username"
                                           onChange={this.onChange}
                                           value={this.state.username}
                                    />
                                    {errors.username &&
                                    <ErrorDiv className="validation">{errors.username}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-4 text-right"
                                          htmlFor="pass">Password</LabelDiv>
                                <div className="col-sm-8">
                                    <input type="password"
                                           className="form-control"
                                           id="password"
                                           name="password"
                                           onChange={this.onChange}
                                           value={this.state.password}
                                    />
                                    {errors.password &&
                                    <ErrorDiv className="validation">{errors.password}</ErrorDiv>}
                                    <span toggle="#password-field"
                                          className="fa fa-fw fa-eye field-icon toggle-password"/>
                                </div>
                            </div>
                            <div className="form-group d-flex ">
                                <LabelDiv className="control-label col-sm-4 text-right " htmlFor="re-pass">Nhập lại
                                    password</LabelDiv>
                                <div className="col-sm-8 ">
                                    <input type="password"
                                           className="form-control "
                                           id="re-pass"
                                           name="repassword"
                                           onChange={this.onChange}
                                           value={this.state.repassword}
                                    />
                                    {errors.repassword &&
                                    <ErrorDiv className="validation">{errors.repassword}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <LabelDiv className="control-label col-sm-4 text-right" htmlFor="email">Email</LabelDiv>
                                <div className="col-sm-8">
                                    <input type="text"
                                           className="form-control"
                                           id="email"
                                           name="email"
                                           onChange={this.onChange}
                                           value={this.state.email}
                                    />
                                    {errors.email &&
                                    <ErrorDiv className="validation">{errors.email}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex ">
                                <LabelDiv className="control-label col-sm-4 text-right " htmlFor="phone">Di
                                    động</LabelDiv>
                                <div className="col-sm-8 ">
                                    <input type="number "
                                           className="form-control " id="phone"
                                           name="phone"
                                           onChange={this.onChange}
                                           value={this.state.phone}
                                    />
                                    {errors.phone &&
                                    <ErrorDiv className="validation">{errors.phone}</ErrorDiv>}
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-4">
                                </div>
                                {/*<div className="col-sm-8 d-flex">*/}
                                {/*    <ReCAPTCHA*/}
                                {/*        sitekey="6LeTci8UAAAAAAZV-D4OGD9x7VJvBUQ8QJDT9N4X"*/}
                                {/*        callback={callback}*/}
                                {/*        expiredCallback={expiredCallback}*/}
                                {/*        locale="en"*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-4">
                                </div>
                                <div className="custom-control custom-checkbox col-sm-8 d-flex agreeDiv">
                                    <input type="checkbox" className="custom-control-input"
                                           id="customControlAutosizing"
                                           value={this.state.isCheck}
                                           name="isCheck"
                                           onChange={this.onChange}
                                    />
                                    <label className="custom-control-label" style={{fontWeight: 'normal'}}
                                           htmlFor="customControlAutosizing">Tôi đồng ý với điều khoản sử dụng</label>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-8 d-flex">
                                    <button className="register" type="submit" onClick={this.onRegister}>Đăng ký
                                    </button>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-8 d-flex haveAcount">
                                    <span className="d-flex">Bạn đã có tài khoản? <a href="#" className="pl-1"
                                                                                     data-toggle="modal"
                                                                                     data-target="#signIn"
                                                                                     onClick={this.openSignInModal}> Đăng nhập
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

Register.propTypes = {
    isLoading: PropTypes.bool
};

Register.defaultProps = {
    isLoading: false,
};

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRegister: (user) => {
            dispatch(actRegister(user));
        },
        setIsLoading: (loading) => {
            dispatch(setIsLoading(loading))
        },
        closeModal: () => dispatch(closeModal()),
        openModalSignIn: (modalProps, modalType) => {
            dispatch(openModal({modalProps, modalType}))
        },
        clearSnackBar: () => {
            dispatch(clearSnackBar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
