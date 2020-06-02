import React, {Component} from 'react';
import {connect} from 'react-redux'
import Link from 'next/link';
import {StudentContainer} from '../../common/Container'
import {openModal, closeModal} from "../../../actions/web/modal";
import ModalRoot from "../../ModalRoot/ModalRoot";
import {AvatarWrap, UserNameWrap, MenuItemWrap} from './styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {logout} from "../../../actions/auth";

class HeaderIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: true,
            setOpen: false,
            anchorEl: null,
            setAnchorEl: null
        }
    }

    closeModal = () => {
        this.props.closeModal()
    }

    onLogout = () => {
        this.props.onLogout()
    }

    handleOpenMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleCloseMenu = () => {
        this.setState({
            anchorEl: null
        })
    };


    openSignInModal = () => {
        this.props.openModal({
            open: true,
            title: 'Alert Modal',
            message: 's',
            closeModal: this.closeModal
        }, 'signIn')
    }


    render() {
        var {user} = this.props;
        var loginInfo = null;

        var style = {
            fontSize: 16
        };


        if (user != null) {
            if (user.name != null) {
                loginInfo = <li style={style}>
                    <AvatarWrap><img src="static/images/avatar.jpg" alt=""/></AvatarWrap>
                    <UserNameWrap onClick={this.handleOpenMenu}> {user.name}</UserNameWrap>

                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleCloseMenu}
                    >
                        <MenuItem><Link href='/profile'><a><MenuItemWrap>Trang cá nhân</MenuItemWrap></a></Link></MenuItem>
                        <MenuItem onClick={this.onLogout}><MenuItemWrap>Đăng xuất</MenuItemWrap></MenuItem>
                    </Menu>

                </li>;
            } else {
                loginInfo = (<li><a href="#" data-toggle="modal" data-target="#register" onClick={this.openSignInModal}>Đăng
                    nhập/ Đăng ký</a>
                </li>
            )
                ;
            }
        } else {
            loginInfo =
                <li><a href="#" data-toggle="modal" data-target="#register" onClick={this.openSignInModal}>Đăng nhập/
                    Đăng ký</a>
                </li>;
        }
        return (
            <div className="header-area">
                <StudentContainer>
                    <div className="wrap-header col-md-4">
                        <span className="st-logo"><Link href='/'><a>SINH VIÊN VIỆT NAM</a></Link></span>
                    </div>
                    <div className="wrap-header col-md-8">
                        <div className="header-menu float-right">
                            <ul>
                                <li style={{paddingLeft: '0px'}}><Link href='/chia-se-phong-tro'><a>Chia sẻ phòng
                                    trọ</a></Link></li>
                                <li><Link href='/tai-lieu'><a>Chia sẻ tài liệu</a></Link></li>
                                <li><Link href='/viec-lam-sinh-vien'><a>Việc làm sinh viên</a></Link></li>
                                <li><Link href='/ho-tro'><a>Hỗ trợ</a></Link></li>
                                {loginInfo}
                            </ul>
                        </div>
                    </div>
                </StudentContainer>
                <ModalRoot closeModal={this.props.closeModal}/>
            </div>
        );
    }
}

HeaderIndex.defaultProps = {
    dropdownOpen: false,
    setOpen: '',
};

const mapStateToProps = state => {
    return {
        user: state.auth2.user
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modalProps, modalType) => {
        dispatch(openModal({modalProps, modalType}))
    },
    onLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderIndex);
