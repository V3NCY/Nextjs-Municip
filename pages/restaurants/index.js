import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"
import RestaurantsContainer from "../../components/restaurant/RestaurantsContainer"

function Restaurants() {

  return (
    <DefaultLayout>
      <Head>
        <title>Ресторанти</title>
      </Head>
      <h1>Ресторанти</h1>
      <div className="restaurants"></div>
      <RestaurantsContainer />
    </DefaultLayout>
  )
}

export default Restaurants



