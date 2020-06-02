import React, {Component} from 'react';
import CategoryAdminPage from "../../../container/Admin/Category/Category";


class CategoryAdmin extends Component {


    render() {
        return (
            <React.Fragment>
                <CategoryAdminPage/>
            </React.Fragment>
        )
    }
}

CategoryAdmin.isPublic = true;

export default CategoryAdmin;
