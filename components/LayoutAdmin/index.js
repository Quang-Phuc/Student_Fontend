import React, {Fragment} from 'react';
import Header from './Header'
import SideBar from "./SideBar";

const LayoutAdmin = () => {
    return (
        <React.Fragment>
            <SideBar/>

            <Header/>
        </React.Fragment>
    )
};


export default LayoutAdmin;
