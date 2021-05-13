import '../styles/index.scss'
import App from "next/app"
import { wrapper } from "../redux/wrapper"
import { getCurrentUser } from '../redux/actions'
// import HotelContainer from "../components/hotels/Hotel/HotelContainer"
// import HotelsContainer from "../components/hotels/Hotel/HotelsContainer"
// import { MemoryRouter as Router, Switch, Route } from "react-router-dom"

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
    // return <Router>
    //   <Component {...pageProps} />;
    //           <Route path="/hotels" exact component={HotelsContainer} />
    //   <Route path="/hotels/:id" component={HotelContainer} />

    // </Router>
  }
}

export default wrapper.withRedux(WrappedApp)