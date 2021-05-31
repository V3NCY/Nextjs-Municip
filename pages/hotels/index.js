import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"
import HotelsContainer from "../../components/hotels/Hotel/HotelsContainer"

function Hotels() {


  return (
    <DefaultLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <div className="hotels"></div>
      <HotelsContainer />
    </DefaultLayout>
  )
}

export default Hotels;



