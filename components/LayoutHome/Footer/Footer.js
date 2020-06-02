import React, { Component } from 'react';
import {StudentContainer} from '../../common/Container'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer-area">
                 <StudentContainer maxWidth="lg">
                    <div className="wrap-footer">
                        <div className="col-md-3 col-sm-6 float-left">
                            <h2>Trợ giúp</h2>
                            <ul>
                                <li><a href="#">Trung tâm trợ giúp</a></li>
                                <li><a href="#">Hình thức thanh toán</a></li>
                                <li><a href="#">Hướng dẫn đăng ký</a></li>
                                <li><a href="#">Quy định sử dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 float-left">
                            <h2>Phòng trọ</h2>
                            <ul>
                                <li><a href="#">Tài liệu dành cho</a></li>
                                <li><a href="#">Hình thức thanh toán</a></li>
                                <li><a href="#">Hướng dẫn đăng ký</a></li>
                                <li><a href="#">Quy định sử dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 float-left">
                            <h2>Tài liệu</h2>
                            <ul>
                                <li><a href="#">Tài liệu dành cho</a></li>
                                <li><a href="#">Hình thức thanh toán</a></li>
                                <li><a href="#">Hướng dẫn đăng ký</a></li>
                                <li><a href="#">Quy định sử dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 float-left">
                            <h2>Việc làm sinh viên</h2>
                            <ul>
                                <li><a href="#">Tài liệu dành cho</a></li>
                                <li><a href="#">Hình thức thanh toán</a></li>
                                <li><a href="#">Hướng dẫn đăng ký</a></li>
                                <li><a href="#">Quy định sử dụng</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                    </div>
                </StudentContainer>
            </div>
        );
    }
}

export default Footer;