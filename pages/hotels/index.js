import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"
import { connect } from "react-redux"
import { setHotels } from "../../pages/hotels/redux/actions"

function Hotels({dispatch}) {
  dispatch(setHotels());

  return (
    <DefaultLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
    </DefaultLayout>
  )
}

export default connect()(Hotels)

