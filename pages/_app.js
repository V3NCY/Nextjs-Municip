import '../styles/index.scss'
import App from "next/app"
import { wrapper } from "../redux/wrapper"
import { getCurrentUser } from '../redux/actions'
import { configureLanguage } from "../pages/language/language"

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {

    const response = await ctx.store.dispatch(getCurrentUser(ctx));
    let currentUser = {};
    if (response?.data?.currentUser) {
      currentUser = response.data.currentUser;
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

App.getInitialProps = async ({ Component, ctx }) => {
  const language = configureLanguage(ctx);

  console.log("language", language);

  return {
    language
  };
}

export default wrapper.withRedux(WrappedApp)