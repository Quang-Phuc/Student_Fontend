import {StudentContainer} from '../../components/common/Container';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import SideBarLeft from "../../components/LayoutHome/SidebarLeft/SidebarLeft";
import TaskControl from "../../components/LayoutHome/TaskControl/TaskControl";
import styles from "../../components/MainHome/styles";
import LayoutHome from "../../components/LayoutHome/Layout/Layout";



class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <LayoutHome>
                    <StudentContainer>
                        <div className="slider-area">
                            <img width="100%" src="/static/images/5d16b7260b8fe.image.png" alt="slider-area"/>
                        </div>
                        <div className="content">
                            <div className="row">
                                <SideBarLeft/>
                                <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                                    <TaskControl/>
                                    <div className="list-document">
                                        <div className="doc-items cod-md-12 cod-sm-12 cod-xs-12 mt-4">
                                            <div className="item">
                                                <div className="item-detail item-detail-title">
                                                    <h2>TÀI LIỆU NỔI BẬT</h2>
                                                    <button className="btn-view-all mt-4">Xem tất cả <i
                                                        className="fa fa-angle-right ml-1 font-weight-bold"/></button>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
                                                    <div className="doc-details">
                                                        <div>
                                                            <a href="/tai-lieu/1">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                            <i className="fa fa-angle-right fa-angle"/>
                                                        </div>
                                                        <div className="doc-details-info">
                                                            <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                                            <div>172 tài liệu</div>
                                                            <div>720 lượt tải</div>
                                                        </div>
                                                        <div className="d-flex pt-2 wrap-btn-detail">
                                                            <button className="btn-detail"><i className="fa fa-heart"
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
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
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
                                                    <div className="doc-details">
                                                        <div>
                                                            <a href="/tai-lieu/1">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                            <i className="fa fa-angle-right fa-angle"/>
                                                        </div>
                                                        <div className="doc-details-info">
                                                            <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                                            <div>172 tài liệu</div>
                                                            <div>720 lượt tải</div>
                                                        </div>
                                                        <div className="d-flex pt-2 wrap-btn-detail">
                                                            <button className="btn-detail"><i className="fa fa-heart"
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doc-items cod-md-12 cod-sm-12 cod-xs-12 mt-4">
                                            <div className="item">
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
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
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
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
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
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
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail item-detail-title">
                                                    <h2>TÀI LIỆU NỔI BẬT</h2>
                                                    <button className="btn-view-all mt-4">Xem tất cả <i
                                                        className="fa fa-angle-right ml-1 font-weight-bold"/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doc-items cod-md-12 cod-sm-12 cod-xs-12 mt-4">
                                            <div className="item">
                                                <div className="item-detail item-detail-title">
                                                    <h2>TÀI LIỆU NỔI BẬT</h2>
                                                    <button className="btn-view-all mt-4">Xem tất cả <i
                                                        className="fa fa-angle-right ml-1 font-weight-bold"/></button>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
                                                    <div className="doc-details">
                                                        <div>
                                                            <a href="/tai-lieu/1">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                            <i className="fa fa-angle-right fa-angle"/>
                                                        </div>
                                                        <div className="doc-details-info">
                                                            <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                                            <div>172 tài liệu</div>
                                                            <div>720 lượt tải</div>
                                                        </div>
                                                        <div className="d-flex pt-2 wrap-btn-detail">
                                                            <button className="btn-detail"><i className="fa fa-heart"
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
                                                    <div className="doc-details">
                                                        <div>
                                                            <a href="/tai-lieu/1">Bộ 150+ luận văn thạc sĩ quản trị nhân lực</a>
                                                            <i className="fa fa-angle-right fa-angle"/>
                                                        </div>
                                                        <div className="doc-details-info">
                                                            <div><i className="fa fa-eye" aria-hidden="true"/> 1039</div>
                                                            <div>172 tài liệu</div>
                                                            <div>720 lượt tải</div>
                                                        </div>
                                                        <div className="d-flex pt-2 wrap-btn-detail">
                                                            <button className="btn-detail"><i className="fa fa-heart"
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-detail">
                                                    <img className={classes.imgDoc} src="/static/images/73925_photo1.png"
                                                         alt=""/>
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
                                                                                              aria-hidden="true"/>
                                                                Quan tâm
                                                            </button>
                                                            <button className="btn-detail"><i className="fa fa-download"
                                                                                              aria-hidden="true"/>
                                                                Tải xuống
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StudentContainer>
                </LayoutHome>


            </div>

        );
    }
}



export default withStyles(styles)(HomePage);
