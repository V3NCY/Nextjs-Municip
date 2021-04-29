import '../styles/index.scss'
import App from "next/app"
import { wrapper } from "../redux/wrapper"
import { getCurrentUser } from '../redux/actions'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {

    const response = await ctx.store.dispatch(getCurrentUser(ctx));
    let currentUser = {};
    if (response?.input?.currentUser) {
      currentUser = response.input.currentUser;
    }
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname,
        currentUser,
      },
      props: {
        currentUser,
      }
      
    };
   
  };
  

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
    
    
  }
}

export default wrapper.withRedux(WrappedApp);