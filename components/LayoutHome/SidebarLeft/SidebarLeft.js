import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actFetchCategoriesRequestWeb} from '../../../actions/web/category';
import SideBarLeftItem from './SidebarLeftItem';

class SideBarLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllCategories();
    }

    showCategories(categories) {
        var result = null;
        if(categories && categories.length > 0) {
            result = categories.map((category, index) => {
                return <SideBarLeftItem key={index} val={category} />
            })
        }
        return result;
    }   

    render() {
        const {categories} = this.props;

        return (
            <div className="col-md-3 hidden-sm hidden-xs float-left sidebar">
                <h2 className="title-list"><span className="square">♦</span>Danh mục</h2>
                <ul>
                    {this.showCategories(categories)}
                </ul>
                <div className="ads">
                    <p>QUẢNG CÁO</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
    fetchAllCategories:() => dispatch(actFetchCategoriesRequestWeb())
})

SideBarLeft.isPublic = true;

export default connect(mapStateToProps, mapDispatchToProps)(SideBarLeft);