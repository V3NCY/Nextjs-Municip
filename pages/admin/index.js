import DefaultLayout from '../../components/layouts/default'
import Head from 'next/head'
import { wrapper } from "../../redux/wrapper"
import { Alert } from 'reactstrap'
// import { Progress } from 'reactstrap'
import Dashboard from "./dashboard"
import Icons from "./icons"
import UserProfile from "./user-profile"
import Notifications from "./notifications"

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
      <Alert color="success">
        <h4 className="alert-heading">Админ панел</h4>
        <p>
          Добре дошли в Административния панел!
          </p>
        <p> Тук ще намерите най-важните инструменти за администратора...
        </p>
      </Alert>
      {/* <Progress animated value={2 * 5}> Потребители </Progress>
      <br />
      <Progress animated color="warning" value={75} > Извършена дейност </Progress> */}
      <Dashboard />
      <Icons />
      <UserProfile />
      <Notifications />
    </DefaultLayout>
  )
}