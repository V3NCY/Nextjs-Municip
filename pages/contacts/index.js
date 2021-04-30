
import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import ContactForm from "../contacts/ContactForm"
import FormInput from "../contacts/FormInput"

export default function Contacts(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>Контакти</title>
            </Head>

            <h1>Контакти</h1>
            <div className="row">
                <div className="col">
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <ContactForm />
                </div>
                <div className="col-md-5">
                    <FormInput />
                </div>
            </div>
        </DefaultLayout>
    )
}