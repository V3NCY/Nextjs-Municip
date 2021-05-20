import React from "react"
import Head from 'next/head'
import HotelsLayout from "../../components/layouts/hotels"
import { connect } from "react-redux";
import { getHardcodedHotels } from "../../redux/actions";
import HotelsContainer from "../../components/hotels/Hotel/HotelsContainer"

function Hotels() {

  return (
    <HotelsLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <div className="hotels"></div>
      <HotelsContainer />
    </HotelsLayout>
  )
}

export default Hotels;



