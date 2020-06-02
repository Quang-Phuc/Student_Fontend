import React, { Component } from 'react';

class TaskControl extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="control d-flex">
                <div className="form-group has-search pr-3">
                    <span className="fa fa-search form-control-feedback" />
                    <input type="text" className="form-control" placeholder="Tìm kiếm tài liệu" />
                </div>
                <div className="dropdown show pr-2 pl-1">
                    <a className="btn btn-custom dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Chuyên ngành <i className="fa fa-angle-down pl-3" style={{ color: '#3190ff' }} aria-hidden="true" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="dropdown show pr-3">
                    <a className="btn btn-custom dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Trường ĐH <i className="fa fa-angle-down pl-3" style={{ color: '#3190ff' }} aria-hidden="true" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="pr-3 pl-1">
                    <a className="btn btn-custom" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-filter" style={{ color: '#3190ff' }} aria-hidden="true" />
                    </a>
                </div>
                <div className="pl-1">
                    <a className="btn btn-custom btn-coins" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Nạp xu
                    </a>
                </div>
                <div className="pl-2">
                    <a className="btn btn-custom btn-upload" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tải lên
                    </a>
                </div>
            </div>
        );
    }
}

export default TaskControl;