import React, { Component } from 'react';

class SideBarRight extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-md-3 hidden-sm hidden-xs float-right sidebar sidebar-detail">
                <ul>
                    <li><a className="doc-list" href="#"><span className="square">1</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">2</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">3</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">4</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">5</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">6</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                    <li><a className="doc-list" href="#"><span className="square">7</span>Bộ đề thi học sinh giỏi Tiếng Anh lớp 6 năm 2017 - 2018 có đáp án</a></li>
                </ul>
                <div className="ads1">
                    <p>QUẢNG CÁO</p>
                </div>
            </div>
        );
    }
}

export default SideBarRight;