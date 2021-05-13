import React from "react"
import Head from 'next/head'
import HotelsLayout from "../../components/layouts/hotels"
import { connect } from "react-redux";
import { setHotels } from "../../components/hotels/Hotel/redux/actions"

function Hotels({ dispatch }) {
  dispatch(setHotels());

  return (
    <HotelsLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <div className="hotels"></div>
    </HotelsLayout>
  )
}

export default connect()(Hotels);



