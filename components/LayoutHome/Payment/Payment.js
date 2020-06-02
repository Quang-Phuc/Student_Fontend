import React, { Component } from 'react';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="modal-dialog dialog-payment" style={{ maxWidth: '1000px' }} role="document">
                <div className="modal-content">
                    <div className="modal-head">
                        NẠP XU VÀO TÀI KHOẢN
                    </div>
                    <div className="modal-body modal-body-payment">
                        <div className="payment-info row col justify-content-between">
                            <div>
                                <i className="fa fa-user" />
                                <span> Lâm Quang Phúc (Mã thành viên: 7182391)</span>
                            </div>
                            <div>
                                <i className="fa fa-envelope" />
                                <span> lamquanphuc1996@gmail.com</span>
                            </div>
                            <div>
                                <i className="fa fa-money" />
                                <span> Tài khoản: <span className="cash">0 xu</span></span>
                            </div>
                            <div>
                                <i className="fa fa-money" />
                                <span> Khả dụng: <span className="cash">0 xu</span></span>
                            </div>
                        </div>
                        <div className="payment col-md-12">
                            <div className="row title-tabs">
                                <nav className="w-100 pt-3">
                                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-phone" role="tab" aria-controls="nav-phone" aria-selected="true">Thẻ
                                            điện thoại</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-transfer" role="tab" aria-controls="nav-transfer" aria-selected="false">Chuyển khoản</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-atm" role="tab" aria-controls="nav-atm" aria-selected="false">Thẻ ATM/ Tín dụng</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-wallet" role="tab" aria-controls="nav-wallet" aria-selected="false">Ví điện tử</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-sms" role="tab" aria-controls="nav-sms" aria-selected="false">Gửi tin nhắn SMS</a>
                                    </div>
                                </nav>
                                <div className="tab-content w-100" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-phone" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="step">
                                            <h3 className="pt-2 pb-3">Bước 1: Chọn loại thẻ</h3>
                                            <div className="producer d-flex justify-content-between">
                                                <div><img src="/images/viettel.jpg" alt="" /></div>
                                                <div><img src="/images/vinaphone.jpg" alt="" /></div>
                                                <div><img src="/images/vietnamobile.jpg" alt="" /></div>
                                                <div><img src="/images/mobiphone.jpg" alt="" /></div>
                                                <div><img src="/images/g-mobile.jpg" alt="" /></div>
                                            </div>
                                            <h3 className="pt-4 pb-3">Bước 2: Thông tin thẻ cào</h3>
                                            <form className="form-horizontal">
                                                <div className="form-group d-flex">
                                                    <label className="control-label text-left" htmlFor="email">Mã thẻ</label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control bd-none" id="email" />
                                                    </div>
                                                </div>
                                                <div className="form-group d-flex">
                                                    <label className="control-label text-left" htmlFor="email">Mã seri</label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control bd-none" id="email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12 text-center">
                                                        <button className="register">Nạp thẻ</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade text-center" id="nav-transfer" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <p>Qúy khách hãy sử dụng dịch vụ Internet Banking của ngân hàng quý khách đang sử dụng, chọn vào chức năng chuyển tiền qua số thẻ và nhập dãy số ở bên dưới của quý khách để chuyển tiền vào</p>
                                        <button className="phone-momo">
                                            <span>0123.456.789</span>
                                        </button>
                                    </div>
                                    <div className="tab-pane fade" id="nav-atm" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <div className="nav nav-tabs" role="tablist">
                                            <div>
                                                <input className="pr-2" id="optDaily" defaultChecked name="intervaltype" type="radio" data-target="#scheduleDaily" />
                                                <label htmlFor="optDaily" className="mr-5 option-transfer">Thẻ thanh toán quốc tế </label>
                                            </div>
                                            <div>
                                                <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio" data-target="#scheduleWeekly" />
                                                <label htmlFor="optWeekly" className="option-transfer">Thẻ ATM nội địa</label>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div id="scheduleDaily" className="tab-pane active">
                                                <form className="form-horizontal">
                                                    <div className="form-group row">
                                                        <label className="control-label text-left" htmlFor="email">Nhập số tiền</label>
                                                        <div className="col-md-4">
                                                            <input type="text" className="form-control bd-none input-money" id="email" />
                                                        </div>
                                                        <div>
                                                            <input className="pr-2" id="optDaily" defaultChecked name="intervaltype" type="radio" data-target="#scheduleDaily" />
                                                            <label htmlFor="optDaily" className="mr-5 rcm-price ">100.000đ </label>
                                                        </div>
                                                        <div>
                                                            <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio" data-target="#scheduleWeekly" />
                                                            <label htmlFor="optWeekly" className="mr-5  rcm-price">200.000đ</label>
                                                        </div>
                                                        <div>
                                                            <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio" data-target="#scheduleWeekly" />
                                                            <label htmlFor="optWeekly" className="rcm-price">300.000đ</label>
                                                        </div>
                                                    </div>
                                                    <div className="option-card d-flex mt-3">
                                                        <div className="mr-2"><img src="/images/200px-Mastercard-logo.svg.jpg" alt="" /></div>
                                                        <div className="mr-2"><img src="/images/200px-Mastercard-logo.svg.jpg" alt="" /></div>
                                                        <div className="mr-2"><img src="/images/200px-Mastercard-logo.svg.jpg" alt="" /></div>
                                                    </div>
                                                    <div className="form-group row mt-4">
                                                        <div className="col-md-5">
                                                            <div className="form-group d-flex">
                                                                <label className="control-label text-left col-md-6" htmlFor="email">Số thẻ</label>
                                                                <div className>
                                                                    <input type="text" className="form-control bd-none" id="email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group d-flex">
                                                                <label className="control-label text-left col-md-6" htmlFor="email">Tên trên thẻ</label>
                                                                <div className>
                                                                    <input type="text" className="form-control bd-none" id="email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className=" form-group d-flex ">
                                                                <label className="control-label text-left col-md-4 " htmlFor="email ">Ngày hết hạn</label>
                                                                <div className>
                                                                    <input type="text " className="form-control bd-none " id="email " />
                                                                </div>
                                                            </div>
                                                            <div className="form-group d-flex ">
                                                                <label className="control-label text-left col-md-4" htmlFor="email ">CVV</label>
                                                                <div className>
                                                                    <input type="text " className="form-control bd-none " id="email " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <div className="col-sm-12 text-center ">
                                                            <button className="register ">Tiếp tục</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div id="scheduleWeekly" className="tab-pane">
                                                <form className="form-horizontal">
                                                    <div className="form-group row">
                                                        <label className="control-label text-left" htmlFor="email">Nhập số tiền</label>
                                                        <div className="col-md-4">
                                                            <input type="text" className="form-control bd-none input-money" id="email" />
                                                        </div>
                                                        <div>
                                                            <input className="pr-2" id="optDaily" defaultChecked name="intervaltype" type="radio" data-target="#scheduleDaily" />
                                                            <label htmlFor="optDaily" className="mr-5 rcm-price ">100.000đ </label>
                                                        </div>
                                                        <div>
                                                            <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio" data-target="#scheduleWeekly" />
                                                            <label htmlFor="optWeekly" className="mr-5  rcm-price">200.000đ</label>
                                                        </div>
                                                        <div>
                                                            <input id="optWeekly" className="pr-2 " name="intervaltype" type="radio" data-target="#scheduleWeekly" />
                                                            <label htmlFor="optWeekly" className="rcm-price">300.000đ</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row mt-4">
                                                        <div className="col-md-5">
                                                            <div className="form-group d-flex">
                                                                <label className="control-label text-left col-md-5" htmlFor="email">Ngân hàng</label>
                                                                <div className>
                                                                    <input type="text" className="form-control bd-none" id="email" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group d-flex">
                                                                <label className="control-label text-left col-md-5" htmlFor="email">Số thẻ</label>
                                                                <div className>
                                                                    <input type="text" className="form-control bd-none" id="email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className=" form-group d-flex ">
                                                                <label className="control-label text-left col-md-4 " htmlFor="email ">Tên trên thẻ</label>
                                                                <div className>
                                                                    <input type="text " className="form-control bd-none " id="email " />
                                                                </div>
                                                            </div>
                                                            <div className="form-group d-flex ">
                                                                <label className="control-label text-left col-md-4" htmlFor="email ">Ngày hết hạn</label>
                                                                <div className>
                                                                    <input type="text " className="form-control bd-none " id="email " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group ">
                                                        <div className="col-sm-12 text-center ">
                                                            <button className="register ">Tiếp tục</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-wallet" role="tabpanel " aria-labelledby="nav-contact-tab ">
                                        <div className="step ">
                                            <div className="producer d-flex justify-content-between ">
                                                <div><img src="/images/nganluong.jpg " alt=" " /></div>
                                                <div><img src="/images/nganluong.jpg " alt=" " /></div>
                                                <div><img src="/images/nganluong.jpg " alt=" " /></div>
                                                <div><img src="/images/nganluong.jpg " alt=" " /></div>
                                                <div><img src="/images/nganluong.jpg " alt=" " /></div>
                                            </div>
                                        </div>
                                        <div className="text-center ">
                                            <p className="guid-doc pt-4 ">Nếu bạn đang sử dụng MOMO, vui lòng chuyển số tiền cần nạp tới số điện thoại nhận tiền:</p>
                                            <button className="phone-momo ">
                                                <span>0123.456.789</span>
                                            </button>
                                            <p className="guid-doc pt-3 ">Và nhập tin nhắn hoặc nội dung chuyển tiền là:</p>
                                            <h2 className="code-sms ">sha 12345</h2>
                                            <p className="guid-doc ">(Trong đó 12345 là mã thành viên của bạn, hệ thống sẽ biết và cộng tiền cho bạn)</p>
                                        </div>
                                        <div className="transfer-info ">
                                            <p>Xem lịch sử nạp tiền của bạn <a href="# ">Tại đây</a> (hoặc) <a href="# ">Hướng
                                                dẫn nạp tiền qua ví điện tử: Ngân Lượng, Bảo Kim, MOMO, Banking Plus</a>
                                            </p>
                                            <p>Hệ thống sẽ tự động cộng xu vào tài khoản cho bạn ngay sau khi nhận được tiền, trường hợp sau 10 phút không nhận được tiền vui lòng gọi tới số hotline: <b>0123.456.789</b></p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-sms" role="tabpanel " aria-labelledby="nav-contact-tab ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;