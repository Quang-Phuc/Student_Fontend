import React from 'react';
import ResetPassword from "../container/ResetPassword/ResetPassword";

const ForgetPasswordPage = ({query}) => {
    return <ResetPassword query={query}/>
};

ForgetPasswordPage.getInitialProps = ({query}) => {
    return {query}
}

ForgetPasswordPage.isPublic=true;

export default ForgetPasswordPage;
