import React from 'react';
import ActiveUser from "../container/HomePage/active_user";

const ActiveUserPage = ({query}) => {
    return <ActiveUser query={query}/>
};

ActiveUserPage.isPublic=true;

ActiveUserPage.getInitialProps = ({query}) => {
    return {query}
}

export default ActiveUserPage;
