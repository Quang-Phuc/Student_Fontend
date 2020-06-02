import React, {Component} from 'react';
import UsersAdminPage from "../../../container/Admin/Users";


class UserInfoAdmin extends Component {


    render() {
        return (
            <React.Fragment>
                <UsersAdminPage/>
            </React.Fragment>
        )
    }
}

UserInfoAdmin.isPublic = true;

export default UserInfoAdmin;
