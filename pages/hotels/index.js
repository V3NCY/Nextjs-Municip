import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"
import { connect } from "react-redux";
import { setHotels } from "../../components/hotels/Hotel/redux/actions"
import HotelContainer from "../../components/hotels/Hotel/HotelContainer"
import HotelsContainer from "../../components/hotels/Hotel/HotelsContainer"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function Hotels({ dispatch }) {
  dispatch(setHotels());

  return (
    <DefaultLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <div className="hotels"></div>
      {/* <Router>
        <main className="container">
          <Switch>
            <Route path="/hotels" exact component={HotelsContainer} />
            <Route path="/hotels/:id" component={HotelContainer} />
          </Switch>
        </main>
      </Router> */}
    </DefaultLayout>
  )
}

export default connect()(Hotels)


