import React from "react"
import Head from 'next/head'
import DefaultLayout from "../../components/layouts/default"


function Hotels() {

  return (
    <DefaultLayout>
      <Head>
        <title>Хотели</title>
      </Head>
      <h1>Хотели</h1>
      <div className="hotels"></div>
    </DefaultLayout>
  )
}

export default Hotels


