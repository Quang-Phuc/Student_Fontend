import React, {Component} from 'react';
import LayoutAdmin from "../../../components/LayoutAdmin";
import { connect } from 'react-redux';
import CategoryList from "../../../components/LayoutAdmin/CategoryList";
import {actFetchCategoriesRequest, actDeleteCategoryRequest, categoryEditing} from "../../../actions/admin/category";
import CategoryItem from "../../../components/LayoutAdmin/CategoryItem";
import Link from 'next/link'


class CategoryAdminPage extends Component{
    componentWillMount() {
        this.props.fetchAllCategories();
    }
    
    showCategories(categories) {
        var result = null;
        if( categories && categories.categoriesList && categories.categoriesList.length > 0) {
            result = categories.categoriesList.map((category, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={category}
                        index={index}
                        onDelete={this.onDelete}
                        onClickEdit={this.onClickEdit}
                    />
                )
            })
        }
        return result
    }

    onDelete = (id) => {
        this.props.onDeleteCategory(id);
    }

    onClickEdit = id => {
        this.props.onClickEdit(id);
    }

    render() {
        var { categories } = this.props;
        return (
            <React.Fragment>
                <div className="nav-md">
                    <div className="container body">
                        <div className="main_container">
                            <LayoutAdmin/>
                            <div className="right_col" role="male">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <Link href={`/admin/category/create`}>
                                                    <a className="btn btn-primary">Thêm mới</a>
                                                </Link>
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

                                            <CategoryList>
                                                {this.showCategories(categories)}
                                            </CategoryList>
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
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest())
        },
        onDeleteCategory : (id) => {
            dispatch(actDeleteCategoryRequest(id));
        },
        onClickEdit: category => {
            dispatch(categoryEditing(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdminPage);
