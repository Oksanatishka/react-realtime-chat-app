import React, { Fragment } from 'react';
import Head from 'next/head'; // to add meta information to the <head> of our pages

const Layout = props => (
    <Fragment>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* to add some default styling to our app */}
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <title>{props.pageTitle || 'Realtime Chat'}</title>
        </Head>
        {props.children}
    </Fragment>
);

export default Layout;
