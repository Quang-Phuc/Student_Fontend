import React, {Component} from 'react';
import {connect} from 'react-redux';
import {style1, styleLine, lineLeft, lineRight, inputHeight} from "./styles";
// import {ErrorDiv} from "../../components/LayoutHome/Register/styles";
import {ErrorDiv} from "../SignIn/styles";
import {Validator} from "../../../utils/validator";
import {clearSnackBar} from "../../../actions/web/message";
import TextField from '@material-ui/core/TextField';
import {actUpdateProfile} from "../../../actions/web/me";


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            birthday: '2020-06-10',
            phoneNumber: '',
            gender: '0',
            job: '-1',
            about: '',
            city: 'Hà Nội',
            errors: {},
        };
        const rules = [
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập họ và tên.',
            },
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập họ và tên.',
            },
            {
                field: 'birthday',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng chọn ngày sinh nhật.',
            },
            {
                field: 'job',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng chọn nghề nghiệp.',
            },
            {
                field: 'about',
                method: 'isEmpty',
                validWhen: false,
                message: 'Vui lòng nhập giới thiệu bản thân.',
            },
        ];
        this.validator = new Validator(rules);
    }


    componentWillReceiveProps(nextProps) {
        var {profile} = nextProps;
        this.setState({
            email: profile.email,
            name: profile.name,
            phoneNumber: profile.phoneNumber,
            about: profile.about,
            job: profile.job
        })
    }

    updateProfile = (e) => {
        this.props.clearSnackBar()
        e.preventDefault();
        var errors = this.validator.validate(this.state)
        this.setState({
            errors: errors
        })

        if (Object.keys(errors).length === 0) {
            var user = {
                name: this.state.name,
                birthday: this.state.birthday,
                gender: parseInt(this.state.gender),
                job: parseInt(this.state.job),
                about: this.state.about,
                avatar: ''
            }

            this.props.onUpdateProfile(user)
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
        var {errors} = this.state;
        console.log(errors)
        return (
            <div className="tabs-pane fades show active change-pass-tab" id="profiles" role="tabpanel"
                 aria-labelledby="nav-home-tab">
                <h2 className="p-3" style={style1}>Thông tin tài khoản</h2>
                <div className="line" style={styleLine}>
                    <div className="left" style={lineLeft}></div>
                    <div className="right" style={lineRight}></div>
                </div>
                <form className="form-horizontal w-100">
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Họ và tên<span
                            className="required">*</span></label>
                        <div className="col-md-6">
                            <input type="text" className="form-control bd-none" id="name" name="name"
                                   value={this.state.name}/>
                            {errors.name && <ErrorDiv className="validation"
                                                          style={{display: 'block'}}>{errors.name}</ErrorDiv>}
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Ngày sinh</label>
                        <div className="col-md-6 d-flex">
                            <TextField
                                onChange={this.onChange}
                                style={inputHeight}
                                className="form-control"
                                id="date"
                                type="date"
                                name="birthday"
                                value={this.state.birthday}
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Giới tính</label>
                        <div className="col-md-6">
                            <div className="nav nav-tabs" role="tablist" onChange={this.onChange}>
                                <div style={{display: 'inline-block'}}>
                                    <input className="pr-2" id="optDaily" defaultChecked name="gender"
                                           type="radio" data-target="#scheduleDaily" value="0"/>
                                    <label htmlFor="optDaily" className="mr-5 option-transfer">Nam </label>
                                </div>
                                <div style={{display: 'inline-block', marginLeft: '10px'}}>
                                    <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio"
                                           data-target="#scheduleWeekly" name="gender" value="1"/>
                                    <label htmlFor="optWeekly" className="option-transfer">Nữ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Nơi sinh sống</label>
                        <div className="col-md-6">
                            <div className>
                                <select className="form-control" id="exampleFormControlSelect1" name="city"
                                        value={this.state.city} onChange={this.onChange}>
                                    <option>Hà Nội</option>
                                    <option>TP Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Hải Phòng</option>
                                    <option>Huế</option>
                                    <option>Cần Thơ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Ngành nghề</label>
                        <div className="col-md-6">
                            <div>
                                <select className="form-control" id="exampleFormControlSelect1" name="job"
                                        value={this.state.job} onChange={this.onChange}>
                                    <option>Chọn nghề nghiệp</option>
                                    <option value="0">Sinh viên</option>
                                    <option value="1">Học sinh</option>
                                    <option value="2">Giáo viên</option>
                                    <option value="3">Tester</option>
                                    <option value="4">Lập trình viên</option>
                                    <option value="5">Kế toán</option>
                                    <option value="6">Bác sỹ</option>
                                    <option value="7">Kĩ sư</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Email</label>
                        <div className="col-md-6">
                            <input type="email" className="form-control bd-none" id="email" name="email"
                                   value={this.state.email} disabled/>
                        </div>
                    </div>
                    <div className="form-group d-flex">
                        <label className="control-label col-md-4 text-right" htmlFor="email">Tự giới thiệu</label>
                        <div className="col-md-6">
                                <textarea style={{resize: 'unset', height: '153px'}} type="text"
                                          className="form-control bd-none" id="email" name="about"
                                          value={this.state.about} onChange={this.onChange}/>
                            {errors.about && <ErrorDiv className="validation"
                                                          style={{display: 'block'}}>{errors.about}</ErrorDiv>}
                        </div>
                    </div>
                    <div className="form-group d-flex mt-10" style={{marginTop: '20px'}}>
                        <label className="control-label col-md-4 text-right" htmlFor="email"/>
                        <div className="col-md-6">
                            <button className="update-profile-btn" onClick={this.updateProfile}>Cập nhật</button>
                        </div>
                    </div>
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
    onUpdateProfile: (user) => {
        dispatch(actUpdateProfile(user))
    },
    clearSnackBar: () => {
        dispatch(clearSnackBar())
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
