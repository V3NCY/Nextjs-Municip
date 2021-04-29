
import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export default function Information() {

    return (
        <DefaultLayout>
            <Head>
                <title>Информация</title>
            </Head>
            <h1>Информация</h1>
        </DefaultLayout>
    )
}