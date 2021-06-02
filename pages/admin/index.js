import DefaultLayout from '../../components/layouts/default'
import Head from 'next/head'
import { wrapper } from "../../redux/wrapper"
import TableList from '../../components/admin/views/TableList'
import RTL from "../../components/admin/views/Rtl"

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store }) => {
  const state = store.getState();
  const currentUser = state.currentUser
  if (!currentUser.roles || !currentUser.roles.includes("ADMIN")) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      currentUser,
    },
  };
});


export default function Admin({ children }) {

  return (
    <DefaultLayout>
      <Head>
        <title>Админ панел</title>

      </Head>
      <h1 >Админ панел</h1>

      <RTL />
      <TableList />
    </DefaultLayout>

  )
}