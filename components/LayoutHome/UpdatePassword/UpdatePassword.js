import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ButtonUpdate, style1, styleLine, lineLeft, lineRight,FormControl} from "../../../container/HomePage/styles";
// import {ErrorDiv} from "../../components/LayoutHome/Register/styles";
import {ErrorDiv} from "../Register/styles";
import {PasswordValidator} from "../../../utils/validator";
// import { PasswordValidator } from "../../../utils/validator";
import {actUpdatePassword} from "../../../actions/web/me";
import {clearSnackBar} from "../../../actions/web/message";


class UpdatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            errorsPassword: {

            },
        };
        const rules = [
            {
                field: 'oldPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu cũ.',
            },
            {
                field: 'newPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập mật khẩu mới.',
            },
            {
                field: 'newPassword',
                method: 'isLength',
                args: [{min: 6}],
                validWhen: true,
                message: 'Mật khẩu phải nhiều hơn 5 kí tự'
            },
            {
                field: 'confirmNewPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập lại mật khẩu mới.',
            }
        ];
        this.passwordValidator = new PasswordValidator(rules);
    }



    componentWillReceiveProps(nextProps) {
        var {profile} = nextProps;
        this.setState({
            email: profile.email,
            name: profile.name,
            phoneNumber: profile.phoneNumber
        })
    }



    validatePassword = () => {
        if(this.state.confirmNewPassword != this.state.newPassword) {
            this.setState({
                errorsPassword: {
                    confirmNewPassword: 'Nhập lại mật khẩu không khớp.'
                }
            })
            return false;
        }
        return true;
    }

    updatePassword = (e) => {
        this.props.clearSnackBar()
        e.preventDefault();
        var errors = this.passwordValidator.validate(this.state)
        this.setState({
            errorsPassword: errors
        })
        if (this.validatePassword() && Object.keys(errors).length === 0) {
            var user = {
                currentPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                confimrmPassword: this.state.confirmNewPassword
            }

            this.props.onUpdatePassword(user)
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        var {errorsPassword} = this.state;

        return (
            <div className="tabs-pane fades change-pass-tab" id="change-passs" role="tabpanel"
                 aria-labelledby="nav-home-tab">
                <h2 className="p-3" style={style1}>Đổi mật khẩu</h2>
                <div className="line" style={styleLine}>
                    <div className="left" style={lineLeft}></div>
                    <div className="right" style={lineRight}></div>
                </div>
                <form className="form-horizontal w-100">
                    <FormControl className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Password cũ</label>
                        <div className="col-md-6">
                            <input onChange={this.onChange} type="password" className="form-control bd-none" id="oldPassword" name="oldPassword"
                                   value={this.state.oldPassword}/>
                            {errorsPassword.oldPassword && <ErrorDiv className="validation">{errorsPassword.oldPassword}</ErrorDiv>}
                        </div>
                    </FormControl>
                    <FormControl className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Password mới</label>
                        <div className="col-md-6">
                            <input type="password" onChange={this.onChange} className="form-control bd-none" id="newPassword" name="newPassword"
                                   value={this.state.newPassword}/>
                            {errorsPassword.newPassword && <ErrorDiv className="validation">{errorsPassword.newPassword}</ErrorDiv>}
                        </div>
                    </FormControl>
                    <FormControl className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Nhập lại Password
                            mới</label>
                        <div className="col-md-6">
                            <input type="password" className="form-control bd-none" id="confirmNewPassword"
                                   name="confirmNewPassword" onChange={this.onChange} value={this.state.confirmNewPassword}/>
                            {errorsPassword.confirmNewPassword && <ErrorDiv className="validation">{errorsPassword.confirmNewPassword}</ErrorDiv>}
                        </div>
                    </FormControl>
                    <FormControl className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email"/>
                        <div className="col-md-6">
                            <ButtonUpdate className="update-profile-btn" onClick={this.updatePassword}>Cập nhật</ButtonUpdate>
                        </div>
                    </FormControl>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.me.profile
    }
}

const mapDispatchToProps = dispatch => ({
    onUpdatePassword: (user) => dispatch(actUpdatePassword(user)),
    clearSnackBar: () => {
        dispatch(clearSnackBar())
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
