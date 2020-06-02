import React, {Component} from 'react';
import {connect} from 'react-redux';
import Validator from "../../../utils/validator";
import {actForgetPassword} from "../../../actions/user/active";
import PropTypes from "prop-types";
import { setIsLoading} from "../../LoginBox/actions";
import {ErrorDiv, LabelDiv} from "./styles";
import {closeModal} from "../../../actions/web/modal";
import {clearSnackBar} from "../../../actions/web/message";
import ColoredLinearProgress from "../../ColoredLinearProgress/ColorLinearProgress";

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state = {
            txtEmail: '',
            errors: {
                'email': ''
            }
        };

        const rules = [
            {
                field: 'txtEmail',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập email.',
            },
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

    validatePassword = () => {
        if(this.state.password != this.state.confirmPassword) {
            this.setState(e)
        }
    }

    onForgetPassword = (e) => {
        this.props.clearSnackBar()
        e.preventDefault();
        var errors = this.validator.validate(this.state)

        this.setState({
            errors: errors
        })

        if (errors.txtEmail == null) {
            var {txtEmail} = this.state;
            var user = {
                email: txtEmail
            }
            this.props.onForgetPassword(user)
            this.props.setIsLoading({isLoading: true});
        }
    }

    closeModal = () => {
        this.props.closeModal()
    }



    render() {
        var {isLoading} = this.props;
        var {errors} = this.state;

        return (
            <div role="document">

                {isLoading && <ColoredLinearProgress/>}
                <div className="modal-content modal-login">
                    <div className="modal-head">
                        Lấy lại mật khẩu
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
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-8 d-flex">
                                    <button type="submit" className="register" onClick={this.onForgetPassword}>Lấy lại mật khẩu</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ForgetPassword.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool
};

ForgetPassword.defaultProps = {
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
        onForgetPassword: (user) => {
            dispatch(actForgetPassword(user));
        },
        setIsLoading: (loading) => {
            dispatch(setIsLoading(loading))
        },
        closeModal: () => dispatch(closeModal()),
        clearSnackBar: () => {
            dispatch(clearSnackBar())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
