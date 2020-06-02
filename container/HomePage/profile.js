import {withStyles} from '@material-ui/styles';
import React, {Component} from 'react';
import styles from "../../components/MainHome/styles";
import LayoutHome from "../../components/LayoutHome/Layout/Layout";
import {connect} from 'react-redux';
import {StudentContainer} from '../../components/common/Container'
import {actGetUserInfoRequest} from "../../actions/web/me";
import {ButtonUpdate, style1, style2, styleLine, styleLine2, lineLeft, lineRight, TabText, DocumentInput, FormControl, inputHeight} from "./styles";
import {ErrorDiv} from "../../components/LayoutHome/Register/styles";
import { Validator, PasswordValidator } from "../../utils/validator";
import {actUpdatePassword} from '../../actions/web/me';
import {clearSnackBar} from "../../actions/web/message";
import TextField from '@material-ui/core/TextField';
import UpdatePassword from "../../components/LayoutHome/UpdatePassword/UpdatePassword";
import UserProfile from "../../components/LayoutHome/UserProfile/UserProfile";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabShow: 'profile',
            username: '',
            name: '',
            email: '',
            birthday: '',
            phoneNumber: '',
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            errorsPassword: {

            },
            errors: {},
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


    componentDidMount() {
        this.onGetProfile()

    }


    componentWillReceiveProps(nextProps) {
        var {profile} = nextProps;
        this.setState({
            email: profile.email,
            name: profile.name,
            phoneNumber: profile.phoneNumber
        })
    }

    changeTab = (tab) => {
        this.setState({
            tabShow: tab
        })
    }

    onGetProfile = () => {
        this.props.onGetUserInfo()
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
        var {tabShow, errorsPassword} = this.state;


        var tabContent = '';

        if (tabShow == 'profile') {
            tabContent = (
                <UserProfile/>
            );
        } else if (tabShow == 'document') {
            tabContent = (
                <div className="tabs-pane fades my-document" id="my-documenst" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <h2 className="p-3" style={style2}>Tài liệu của tôi</h2>
                    <div className="line" style={styleLine2}>
                        <div className="left" style={lineLeft}></div>
                        <div className="right" style={lineRight}></div>
                    </div>
                    <div className="wrap-list-doc">
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="item-details">
                                <img src="static/images/73925_photo1.png" alt=""/>
                                <div className="doc-details">
                                    <div>
                                        <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                        <i className="fa fa-angle-right fa-angle"/>
                                    </div>
                                    <div className="doc-details-info">
                                        <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                        <div>172 tài liệu</div>
                                        <div>720 lượt tải</div>
                                    </div>
                                    <div className="d-flex pt-2 wrap-btn-detail">
                                        <button className="btn-detail"><i className="fa fa-heart"
                                                                          aria-hidden="true"/> Quan
                                            tâm
                                        </button>
                                        <button className="btn-detail"><i className="fa fa-download"
                                                                          aria-hidden="true"/> Tải
                                            xuống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            tabContent = (
                <UpdatePassword/>
            );
        }

        return (
            <div>
                <LayoutHome>
                    <StudentContainer>
                        <div className="content" style={{paddingTop: '40px', paddingBottom: '80px'}}>
                            <div className="row">
                                <div className="col-md-3 hidden-sm hidden-xs float-left sidebar">
                                    <div className="ads1">
                                        <a href="#">Ảnh đại diện</a>
                                    </div>
                                    <h2 className="title-list"/>
                                    <ul className="user-tabs nav nav-tabss nav-fill" id="nav-tab" role="tablist">
                                        <li onClick={() => this.changeTab('profile')}
                                            className={tabShow == 'profile' ? 'user-tab active' : 'user-tab'}>
                                            <TabText
                                                data-toggle="tab" role="tab"
                                                aria-controls="profile"
                                                aria-selected="true"><span
                                                className="square">♦</span>Thông tin tài khoản
                                            </TabText>
                                        </li>
                                        <li onClick={() => this.changeTab('document')}
                                            className={tabShow == 'document' ? 'user-tab active' : 'user-tab'}>
                                            <TabText
                                                data-toggle="tab" role="tab"
                                                aria-controls="my-document"
                                                aria-selected="false"><span
                                                className="square">♦</span>Tài liệu của
                                                tôi
                                            </TabText>
                                        </li>
                                        <li onClick={() => this.changeTab('password')}
                                            className={tabShow == 'password' ? 'user-tab active' : 'user-tab'}>
                                            <TabText data-toggle="tab" role="tab"
                                                     aria-controls="change-pass"
                                                     aria-selected="false"><span
                                                className="square">♦</span>Đổi mật khẩu
                                            </TabText>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                                    <div className="tab-content" id="nav-tabContent">
                                        {tabContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StudentContainer>
                </LayoutHome>


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
    onGetUserInfo: () => dispatch(actGetUserInfoRequest()),
    onUpdatePassword: (user) => dispatch(actUpdatePassword(user)),
    clearSnackBar: () => {
        dispatch(clearSnackBar())
    },
})

Profile = withStyles(styles)(Profile);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
