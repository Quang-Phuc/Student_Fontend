import React from 'react';
import Link from "next/link";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title">
                        <a href="index.html" className="site_title"><i className="fa fa-paw"></i>
                            <span>Student Document</span></a>
                    </div>

                    <div className="clearfix"></div>

                    <div className="profile clearfix">
                        <div className="profile_pic">

                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>admin</h2>
                        </div>
                    </div>

                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <h3>General</h3>
                            <ul className="nav side-menu">
                                <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                                </li>
                                <li><a><i className="fa fa-file-text"></i> Tài liệu <span
                                    className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li>
                                            <Link href="/admin/category">
                                                <a>Chuyên mục</a>
                                            </Link></li>
                                        <li><a href="index2.html">Tài liệu</a></li>
                                        <li><a href="index2.html">Tài liệu bán chạy nhất</a></li>
                                        <li><a href="index2.html">Tài liệu mới đăng</a></li>
                                        <li><a href="index2.html">Tài liệu chờ duyệt</a></li>
                                        <li><a href="index2.html">Tài liệu vi phạm</a></li>
                                    </ul>
                                </li>
                                <li><a><i className="fa fa-edit"></i> Hệ thống <span
                                    className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li><a href="form.html">Thành viên</a></li>
                                        <li><a href="form_advanced.html">Cấu hình chung</a></li>
                                        <li><a href="form_validation.html">Cấu hình SEO</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="sidebar-footer hidden-small">
                        <a data-toggle="tooltip" data-placement="top" title="Settings">
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                            <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Lock">
                            <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                        </a>
                        <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                            <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar