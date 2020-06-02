import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { whoAmI } from '../components/LoginBox/actions';
import withReduxStore from '../lib/with-redux-store';
import getPageContext from '../lib/getPageContext';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/scss/main.scss'
// import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static redirectToLogin(ctx) {
    const { req, res } = ctx;
    const isServer = typeof window === 'undefined';
    const loginPageUrl = '/login';
    if (isServer) {
      res.writeHead(302, {
        Location: `${loginPageUrl}?next=${req.originalUrl}`
      });
      res.end();
    } else {
      Router.push(`${loginPageUrl}?next=${ctx.asPath}`);
    }
  }

  static redirectTo404(ctx) {
    const { req, res } = ctx;
    const isServer = typeof window === 'undefined';
    const ErrorPageUrl = '/404';
    if (isServer) {
      res.writeHead(302, {
        Location: `${ErrorPageUrl}?next=${req.originalUrl}`
      });
      res.end();
    } else {
      Router.push(`${ErrorPageUrl}?next=${ctx.asPath}`);
    }
  }

  static async getInitialProps({ Component, ctx }) {
    const { isPublic, adminRequired } = Component;
    const { reduxStore, req } = ctx;
    const isServer = typeof window === 'undefined';
    let user = null;

    if (isServer) {
      const { cookie } = req.headers;
      if (cookie) {
        user = await reduxStore.dispatch(whoAmI(cookie));
      }
    } else {
      // eslint-disable-next-line prefer-destructuring
      user = reduxStore.getState().auth2.user;
    }

    console.log(isPublic)

    if (!isPublic) {
      console.log('cuong')
      if (!user) {
        this.redirectToLogin(ctx);
      } else {
        if (adminRequired) {
          if (!user.permissions.includes('admin')) {
            this.redirectTo404(ctx);
          }
        }
      }
    }


    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Head>
          <title>Advanced real world Next Application</title>
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
          >
            <CssBaseline />
            <Provider store={reduxStore}>
              <ToastContainer />
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
