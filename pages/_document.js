import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        let pageContext;
        const page = ctx.renderPage(Component => {
            const WrappedComponent = props => {
                // eslint-disable-next-line prefer-destructuring
                pageContext = props.pageContext;
                return <Component {...props} />;
            };

            WrappedComponent.propTypes = {
                pageContext: PropTypes.instanceOf(Object).isRequired
            };

            return WrappedComponent;
        });

        let css;
        if (pageContext) {
            css = pageContext.sheetsRegistry.toString();
        }
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                ...page,
                pageContext,
                styles: (
                    <React.Fragment>
                        <style
                            id="jss-server-side"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{__html: css}}
                        />
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        {flush() || null}
                    </React.Fragment>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const {pageContext} = this.props;

        return (
            <html lang="en" dir="ltr">
            <Head>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="Tired of next.js toy examples that cannot be used in real, complex, business projects? This is for you"
                />
                <meta
                    name="theme-color"
                    content={
                        pageContext ? pageContext.theme.palette.primary.main : null
                    }
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Lato:400,600"
                />

                <link rel="stylesheet" href="/static/vendors/bootstrap/dist/css/bootstrap.min.css"/>
                <link href="/static/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                <link href="/static/vendors/nprogress/nprogress.css" rel="stylesheet"/>
                <link href="/static/vendors/iCheck/skins/flat/green.css" rel="stylesheet"/>
                <link href="/static/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet"/>
                <link href="/static/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
                <link href="/static/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet"/>
                <link href="/static/build/css/custom.min.css" rel="stylesheet"/>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                {/*<link rel="stylesheet" href="/static/css/bootstrap.min.css" />*/}
                <link rel="stylesheet" href="/static/css/styles.css" />
                <link rel="stylesheet" href="/static/css/upload.css" />
                <link rel="stylesheet" href="/static/css/list-document.css"></link>
                <link rel="stylesheet" href="/static/css/profile.css"></link>
                <link rel="stylesheet" href="/static/css/detail.css"></link>

            </Head>
            <body>
            <Main/>
            <NextScript/>

            <script src="/static/vendors/jquery/dist/jquery.min.js"></script>
            <script src="/static/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
            <script src="/static/vendors/fastclick/lib/fastclick.js"></script>
            <script src="/static/vendors/nprogress/nprogress.js"></script>
            <script src="/static/vendors/Chart.js/dist/Chart.min.js"></script>
            <script src="/static/vendors/gauge.js/dist/gauge.min.js"></script>
            <script src="/static/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
            <script src="/static/vendors/iCheck/icheck.min.js"></script>
            <script src="/static/vendors/skycons/skycons.js"></script>
            <script src="/static/vendors/Flot/jquery.flot.js"></script>
            <script src="/static/vendors/Flot/jquery.flot.pie.js"></script>
            <script src="/static/vendors/Flot/jquery.flot.time.js"></script>
            <script src="/static/vendors/Flot/jquery.flot.stack.js"></script>
            <script src="/static/vendors/Flot/jquery.flot.resize.js"></script>
            <script src="/static/vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
            <script src="/static/vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
            <script src="/static/vendors/flot.curvedlines/curvedLines.js"></script>
            <script src="/static/vendors/DateJS/build/date.js"></script>
            <script src="/static/vendors/jqvmap/dist/jquery.vmap.js"></script>
            <script src="/static/vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
            <script src="/static/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
            <script src="/static/vendors/moment/min/moment.min.js"></script>
            <script src="/static/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
            <script src="/static/build/js/custom.min.js"></script>

            <script src="/js/jquery.min.js"></script>
            <script src="/statid/js/popper.min.js"></script>
            <script src="/statid/js/bootstrap.min.js "></script>

            </body>
            </html>
        );
    }
}

export default MyDocument;
