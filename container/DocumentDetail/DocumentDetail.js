import React, {Component} from 'react';
import {StudentContainer} from '../../components/common/Container'
import TaskControl from "../../components/LayoutHome/TaskControl/TaskControl";
import LayoutHome from "../../components/LayoutHome/Layout/Layout";
import SideBarRight from "../../components/LayoutHome/SidebarRight/SidebarRight";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        var style = {
            padding: '50px 0'
        }

        return (
            <div>
                <LayoutHome>
                    <StudentContainer>
                        <div className="content" style={style}>
                            <div className="col-md-9 col-sm-12 col-xs-12 float-left">
                                <div className="folder-title d-flex">
                                    <div>
                                        <a href><span>Trang chủ </span></a>
                                    </div>
                                    <div>
                                        <a href>
                                            <span> <i className="fa fa-angle-double-right pl-2" aria-hidden="true"/> Tài liệu
                                            chuyên ngành</span>
                                        </a>
                                    </div>
                                </div>
                                <div id="btnContainer" className="text-right pt-5">
                                    <div className="d-flex justify-content-between">
                                        <h2 className="doccument-title">
                                            TÀI LIỆU CHUYÊN NGÀNH
                                        </h2>
                                    </div>
                                    <div className="text-left pt-2">
                                        <span className="fa fa-star star checked"/>
                                        <span className="fa fa-star star checked"/>
                                        <span className="fa fa-star star checked"/>
                                        <span className="fa fa-star star"/>
                                        <span className="fa fa-star star"/>
                                    </div>
                                    <div className="doc-info justify-content-between d-flex pt-3">
                                        <p>Chia sẻ bởi: admin</p>
                                        <p>Ngày: 20/02/2020</p>
                                        <p>Loại: PDF</p>
                                        <p>Số tài liệu: 6</p>
                                        <p>Lượt xem: 1072</p>
                                        <p>Lượt tải: 72</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="btn-download">
                                            <button data-toggle="modal" data-target="#down-success"
                                                    className="btn-customs mr-3"><i className="fa fa-heart"/> Quan tâm
                                            </button>
                                            <button data-toggle="modal" data-target="#error" className="btn-customs"><i
                                                className="fa fa-download" aria-hidden="true"/> Tải xuống (20 xu)
                                            </button>
                                        </div>
                                        <span className="sp-warning"><i
                                            className="fa fa-warning"/> Báo cáo vi phạm</span>
                                    </div>
                                    <div className="plugin-view-doc mt-4">
                                        {/* plugin */}
                                    </div>
                                    <div className="file-download p-3 mt-4">
                                        <button data-toggle="modal" data-target="#error" className="btn-customs"><i
                                            className="fa fa-download"/>Tải xuống (20 xu)
                                        </button>
                                    </div>
                                    <div className="comment">
                                        {/* comment */}
                                    </div>
                                </div>
                            </div>
                            <SideBarRight/>
                            <div className="recommend col-md-12 pt-3 pb-3">
                                <h2>CÓ THỂ BẠN QUAN TÂM</h2>
                                <div>
                                    <div className="column">
                                        <div className="item-details">
                                            <img src="/static/images/73925_photo1.png" alt=""/>
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
                                            <img src="/static/images/73925_photo1.png" alt=""/>
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
                                            <img src="/static/images/73925_photo1.png" alt=""/>
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
                                            <img src="/static/images/73925_photo1.png" alt=""/>
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
                        </div>
                    </StudentContainer>
                </LayoutHome>
                <div className="modal fade" id="error" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog dialog-error" style={{width: '1000px'}} role="document">
                        <div className="modal-content">
                            <div className="modal-head modal-head-err text-center">
                                <h2 className="pb-3">THAO TÁC KHÔNG THÀNH CÔNG</h2>
                                <img src="/static/images/warning.PNG" alt=""/>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12 text-center">
                                            <p className="mt-1 pb-3 err-info">Thực hiện không thành công, có thể do kết
                                                nối mạng hoặc lý do khác</p>
                                            <button className=" register">Đăng ký</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="down-success" tabIndex={-1} role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog dialog-error" style={{width: '1000px'}} role="document">
                        <div className="modal-content">
                            <div className="modal-head modal-head-down-success text-center">
                                <h2 className="pb-3">THAO TÁC THÀNH CÔNG</h2>
                                <img src="/static/images/down.PNG" alt=""/>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12 text-center">
                                            <p className="mt-1 pb-3 err-info">Tài liệu đã được tải về máy của bạn</p>
                                            <button className=" register">Đóng lại</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="cash-done" tabIndex={-1} role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog dialog-error" style={{width: '1000px'}} role="document">
                        <div className="modal-content">
                            <div className="modal-head cash-done text-center">
                                <h2 className="pb-3">NẠP XU THÀNH CÔNG</h2>
                                <img src="/static/images/done.PNG" alt=""/>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <div className="col-sm-12 text-center">
                                            <h3 className="tks-for-cash pt-2 pb-3">CHÚC MỪNG BẠN ĐÃ NẠP THÀNH CÔNG 50
                                                XU</h3>
                                            <p className="mt-1 pb-3 err-info">Xu có thể dùng để tải về tài liệu, đăng
                                                quảng cáo hoặc rút về tài khoản</p>
                                            <button className=" register">Đóng lại</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="vip" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog dialog-error" style={{width: '1000px'}} role="document">
                        <div className="modal-content">
                            <div className="modal-head cash-done text-center">
                                <h2 className="pb-3">ĐĂNG KÝ TÀI LIỆU VIP</h2>
                            </div>
                            <div className="modal-body modal-vip">
                                <div className="payment-info row col justify-content-between pt-3">
                                    <div>
                                        <i className="fa fa-user"/>
                                        <span> Lâm Quang Phúc (Mã thành viên: 7182391)</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-envelope"/>
                                        <span> lamquanphuc1996@gmail.com</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-money"/>
                                        <span> Tài khoản: <span className="cash">0 xu</span></span>
                                    </div>
                                    <div>
                                        <i className="fa fa-money"/>
                                        <span> Khả dụng: <span className="cash">0 xu</span></span>
                                    </div>
                                </div>
                                <hr/>
                                <p className="p-4">Là tài liệu VIP sẽ được mọi người biết đến nhiều hơn vì thế sẽ tăng
                                    lượt tải. Tài khoản của bạn sẽ bị trừ 20 Xu khi đăng ký tài liệu là tài liệu VIP</p>
                                <div className="row">
                                    <p className="col-md-6 text-right" style={{lineHeight: 3}}>Khả dụng</p>
                                    <p className="col-md-6" style={{fontSize: '36px', color: '#3190ff'}}>40 Xu</p>
                                </div>
                                <div className="row">
                                    <p className="col-md-6 text-right">Số xu bị trừ</p>
                                    <p className="col-md-6 orange">40 Xu</p>
                                </div>
                                <div className="row">
                                    <p className="col-md-6 text-right">Tài khoản còn lại</p>
                                    <p className="col-md-6 orange">40 Xu</p>
                                </div>
                                <div className="btn-payment text-center mt-4">
                                    <button className="btn-vip mr-2 b-orange">Hủy</button>
                                    <button className="btn-vip ml-2 b-blue">Thanh toán</button>
                                </div>
                                <div className="text-center m-4">
                                    <span>Xem hướng dẫn nạp tiền <a href="#" className="orange ">Tại đây</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;