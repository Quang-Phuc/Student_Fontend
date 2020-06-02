import React, { Component } from 'react';
import { StudentContainer } from '../../components/common/Container'
import LayoutHome from "../../components/LayoutHome/Layout/Layout";

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <LayoutHome>
                    <StudentContainer>
                        <div className="row">
                            <div className="upload-doc col-md-12">
                                <div className="title-upload">
                                    <h2>UPLOAD TÀI LIỆU</h2>
                                </div>
                                <div className="col-md-12 title-tabs">
                                    <nav>
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Bước 1: Xác nhận thông tin</a>
                                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Bước 2: Upload tài liệu</a>
                                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Bước 3: Thông báo và quản lý</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <span className="d-flex ">
                                            <i className="fa fa-check check" aria-hidden="true" />
                                            <p className="desc-upload pl-2">Ban quản lý của website sẽ xác nhận thông tin tài liệu của bạn trước khi chia sẻ với mọi người</p>
                                        </span>
                                            <span className="d-flex">
                                            <i className="fa fa-check check" aria-hidden="true" />
                                            <p className="desc-upload pl-2">Các tài liệu cần tránh vi phạm bản quyền hoặc tránh nội dung bậy bạn, các tài liệu vi phạm sẽ bị xóa bỏ hoàn toàn</p>
                                        </span>
                                            <div className="text-center">
                                                <button className="upload-next">Tiếp theo</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <p style={{ fontSize: '23px', color: '#505050' }}>Chia sẻ tài liệu của bạn để mọi người biết đến và có thêm thu nhập</p>
                                            <span className="d-flex pt-3">
                                            <i className="fa fa-check check-img" aria-hidden="true" />
                                            <p className="desc-upload-txt pl-2">Điền các thông tin mà website yêu cầu, các trường có (*) là các trường bắt buộc</p>
                                        </span>
                                            <span className="d-flex ">
                                            <i className="fa fa-check check-img" aria-hidden="true" />
                                            <p className="desc-upload-txt pl-2">Bạn nên điền và chọn đúng thông tin để tài liệu của bạn được duyệt và được mọi người biết đến</p>
                                        </span>
                                            <span className="d-flex ">
                                            <i className="fa fa-check check-img" aria-hidden="true" />
                                            <p className="desc-upload-txt pl-2">File tài liệu hoặc demo (nếu có) có dung lượng tối đa lên tới 5GB</p>
                                        </span>
                                            <div className="w-100 upload-content">
                                                <p style={{ fontSize: '14px', color: '#ff8e33', fontWeight: 'bold' }}>Tặng thưởng ngay 1 Xu cho mỗi upload được duyệt</p>
                                                <div className="wrap-upload d-flex">
                                                    <form className="form-horizontal w-100">
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Ảnh đại diện <span className="required">*</span></label>
                                                            <div className="col-md-10">
                                                                <div style={{ width: '240px', height: '160px', float: 'left', backgroundColor: '#ff8e33' }} />
                                                                <span className="d-flex pl-3">
                                                                <i className="fa fa-check check-img" aria-hidden="true" />
                                                                <p className="desc-upload-txt pl-2">Ảnh phù hợp sẽ có nhiều lượt xem</p>
                                                            </span>
                                                                <span className="d-flex pl-3">
                                                                <i className="fa fa-check check-img" aria-hidden="true" />
                                                                <p className="desc-upload-txt pl-2">Dung lượng tối đa 2MB</p>
                                                            </span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Loại tài liệu <span className="required">*</span></label>
                                                            <div className="col-md-10">
                                                                <input type="text" className="form-control bd-none" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Trang hiển thị</label>
                                                            <div className="col-md-10">
                                                                <input type="text" className="form-control bd-none" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Trang hiển thị</label>
                                                            <div className="col-md-10 d-flex">
                                                                <input type="text" className="col-md-1 form-control bd-none w-25 mr-3" id="email" /> đến
                                                                <input type="text" className="col-md-1 form-control bd-none w-25 ml-3" id="email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">File demo, sản phẩm đính kèm</label>
                                                            <div className="col-md-10">
                                                                <button className="ul-final"><i className="fa fa-cloud-download pr-2" aria-hidden="true" />Chọn file</button>
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Tài liệu VIP</label>
                                                            <div className="col-md-10">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group d-flex">
                                                            <label className="control-label col-md-2 text-right" htmlFor="email">Mô tả chi tiết</label>
                                                            <div className="col-md-10">
                                                                <textarea style={{ resize: 'unset', height: '153px' }} type="text" className="form-control bd-none" id="email" defaultValue={" "} />
                                                                <div className="d-flex justify-content-between">
                                                                    <button className="ul-final mt-4"><i className="fa fa-paperclip pr-2" aria-hidden="true" />Chọn tài liệu</button>
                                                                    <button className="ul-final ul-btn mt-4"><i className="fa fa-upload pr-2" aria-hidden="true" />Tải lên ngay</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <span className="d-flex ">
                                            <i className="fa fa-check check" aria-hidden="true" />
                                            <p className="desc-upload pl-2">Tài liệu của bạn khi được xử lý hoặc khi có người download sẽ có thông báo về tài khoản của bạn</p>
                                        </span>
                                            <span className="d-flex">
                                            <i className="fa fa-check check" aria-hidden="true" />
                                            <p className="desc-upload pl-2">Bạn có thể theo dõi cũng như quản lý các tài liệu mà bạn đã chia sẻ lên</p>
                                        </span>
                                            <div className="text-center">
                                                <button className="upload-next">Hoàn tất</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StudentContainer>
                </LayoutHome>
            </React.Fragment>
        );
    }
}

export default Upload;