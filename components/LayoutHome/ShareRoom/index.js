import Container from '@material-ui/core/Container';
import React, { Component } from 'react';
import Footer from "../Footer/Footer";
import HeaderIndex from "../Header/Header";
import SideBarLeft from "../SidebarLeft/SidebarLeft";
import TaskControl from "../TaskControl/TaskControl";

class ShareRoomPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <HeaderIndex />
            <Container maxWidth="lg">
                <div className="content">
                    <SideBarLeft />
                    <div className="col-md-9 col-sm-12 col-xs-12 float-right">
                        <TaskControl />
                    </div>
                    <div id='btnContainer'>
                        chia se phong tro page
                    </div>
                </div>
            </Container>
            <Footer />
        </div>);
    }
}

export default ShareRoomPage;