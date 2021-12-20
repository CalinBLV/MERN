import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = ({ children }) => {
  const head = () => {
    return (
      <React.Fragment>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </React.Fragment>
    );
  };

  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-white">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-white">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-white">Register</a>
        </Link>
      </li>
    </ul>
  );
  return (
    <React.Fragment>
      {" "}
      {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>{" "}
    </React.Fragment>
  );
};

export default Layout;
