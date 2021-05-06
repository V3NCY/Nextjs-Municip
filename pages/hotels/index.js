import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"
import { connect } from "react-redux"
import { setHotels } from "../../pages/hotels/redux/actions"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HotelContainer from "../hotels/Hotel/HotelContainer"
import HotelsContainer from "../hotels/Hotel/HotelsContainer"

function Hotels({dispatch}) {
  dispatch(setHotels());

  return (
    <DefaultLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <Router>
      <main className="container">
        <Switch>
          <Route path="/hotels" exact component={HotelsContainer} />
          <Route path="/hotels/:id" component={HotelContainer} />
        </Switch>
      </main>
    </Router>
    </DefaultLayout>
  )
}

export default connect()(Hotels)

