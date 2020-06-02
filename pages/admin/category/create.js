import React, {Component} from 'react';
import LayoutAdmin from "../../../components/LayoutAdmin";
import {connect} from 'react-redux';
import {actAddCategoryRequest} from  '../../../actions/admin/category';
import Router from 'next/router';


class CategoryCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtName } = this.state;
        var { history } = this.props;
        var category = {
            name : txtName,
        };

        this.props.onAddCategory(category);
        Router.push('/admin/category')
    }

    convertSlug(text) {
        return text
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav-md">
                    <div className="container body">
                        <div className="main_container">
                            <LayoutAdmin/>
                            <div className="right_col" role="male">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2><small>Tạo mới chuyên mục</small></h2>
                                                <ul className="nav navbar-right panel_toolbox">
                                                    <li><a className="collapse-link"><i
                                                        className="fa fa-chevron-up"></i></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                           role="button" aria-expanded="false"><i
                                                            className="fa fa-wrench"></i></a>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li><a href="#">Settings 1</a>
                                                            </li>
                                                            <li><a href="#">Settings 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="close-link"><i className="fa fa-close"></i></a>
                                                    </li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="x_content">
                                                <br/>
                                                <form id="demo-form2" data-parsley-validate
                                                      className="form-horizontal form-label-left">

                                                    <div className="form-group">
                                                        <label className="control-label col-md-3 col-sm-3 col-xs-12"
                                                               htmlFor="first-name">Tên chuyên mục <span
                                                            className="required">*</span>
                                                        </label>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <input type="text" id="first-name" required="required"
                                                                   className="form-control col-md-7 col-xs-12"
                                                                   name="txtName"
                                                                   onChange={this.onChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                            <button className="btn btn-primary" type="button">Cancel
                                                            </button>
                                                            <button className="btn btn-primary" type="reset">Reset
                                                            </button>
                                                            <button onClick={this.onSave} type="submit" className="btn btn-success">Submit
                                                            </button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCategory : (category) => {
            dispatch(actAddCategoryRequest(category));
        },
    }
}

CategoryCreate.isPublic = true;

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
