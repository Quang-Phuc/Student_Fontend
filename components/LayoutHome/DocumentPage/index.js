import Container from '@material-ui/core/Container';
import React, { Component } from 'react';
import {StudentContainer} from "../../common/Container";
import Footer from "../Footer/Footer";
import HeaderIndex from "../Header/Header";
import SideBarLeft from "../SidebarLeft/SidebarLeft";
import TaskControl from "../TaskControl/TaskControl";

class DocumentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        var container = document.getElementById("btnContainer");
        var btns = container.getElementsByClassName("btn-list-view");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }

    listView() {
        var elements = document.getElementsByClassName("column");
        var i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
        }
    }

    gridView() {
        var elements = document.getElementsByClassName("column");
        var i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.width = "25%";
        }
    }

    render() {
        return (
            <div>
                <HeaderIndex />
                <StudentContainer maxWidth="lg">
                    <div className="content">
                        <SideBarLeft />
                        <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                            <TaskControl />
                            <div className="folder-title d-flex">
                                <div>
                                    <a href><span>Trang chủ </span></a>
                                </div>
                                <div>
                                    <a href><span> <i className="fa fa-angle-double-right pl-2" aria-hidden="true" /> Tài liệu chuyên ngành</span></a>
                                </div>
                            </div>
                            <div id="btnContainer" className="text-right pt-3">
                                <div className="d-flex justify-content-between">
                                    <h2 className="doc-title">TÀI LIỆU CHUYÊN NGÀNH</h2>
                                    <div className="grid-btn">
                                        <button className="btn-list-view" onClick={this.listView.bind(this)}><i className="fa fa-list" aria-hidden="true" /></button>
                                        <button className="btn-list-view active" onClick={this.gridView.bind(this)}><i className="fa fa-th" aria-hidden="true" /></button>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="wrap-list-doc">
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item-details">
                                        <img src="/static/images/73925_photo1.png" alt="" />
                                        <div className="doc-details">
                                            <div>
                                                <a href="#">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                <i className="fa fa-angle-right fa-angle" />
                                            </div>
                                            <div className="doc-details-info">
                                                <div><i className="fa fa-eye" aria-hidden="true" /> 1039</div>
                                                <div>172 tài liệu</div>
                                                <div>720 lượt tải</div>
                                            </div>
                                            <div className="d-flex pt-2 wrap-btn-detail">
                                                <button className="btn-detail"><i className="fa fa-heart" aria-hidden="true" /> Quan
                                                    tâm</button>
                                                <button className="btn-detail"><i className="fa fa-download" aria-hidden="true" /> Tải
                                                    xuống</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example" className="float-right pt-2 pagination-custom">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </StudentContainer>
                <Footer />
            </div>
        );
    }
}

export default DocumentPage;