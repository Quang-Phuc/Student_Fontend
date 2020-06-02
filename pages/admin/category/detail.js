import Router from 'next/router';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actEditCategory, actFetchCategoriesRequestById } from '../../../actions/admin/category';
import LayoutAdmin from "../../../components/LayoutAdmin";

class CategoryDetail extends Component {

    static getInitialProps({ query }) {
        return {
            categoryId: query.id
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            txtName: this.props.categoryEditting ? this.props.categoryEditting : '',
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSave = (e) => {
        e.preventDefault();
        var { txtName } = this.state;
        var { history } = this.props;
        var category = {
            name : txtName
        };
        var id = this.props.categoryId;
        this.props.onEditCategory(id, category);
        Router.push('/admin/category')
    }

    componentDidMount() {
        const { categoryId } = this.props;
        if(categoryId && categoryId != null) {
            this.props.fetchCategoryById(categoryId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.categoryEditting) {
            this.setState({
                txtName: nextProps.categoryEditting.name
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav-md">
                    <div className="container body">
                        <div className="main_container">
                            <LayoutAdmin />
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
                                                <br />
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
                                                                value={this.state.txtName}
                                                                onChange={(e) => this.onChange(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                                            <button className="btn btn-primary" type="button">Cancel
                                                            </button>
                                                            {/* <button className="btn btn-primary" type="reset">Reset
                                                            </button> */}
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
        );
    }
}

CategoryDetail.isPublic = true;

const mapStateToProps = state => {
    return {
        categoryEditting: state.categories.categoryEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCategoryById: (id) => {
            dispatch(actFetchCategoriesRequestById(id));
        },
        onEditCategory: (id, category) => {
            dispatch(actEditCategory(id, category));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
