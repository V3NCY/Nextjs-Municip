import DefaultLayout from '../../components/layouts/default'
import Head from 'next/head'
import { wrapper } from "../../redux/wrapper"
// import ProfileContainer from "./ProfileContainer"

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, res, store }) => {
  const state = store.getState();
  const currentUser = state.currentUser
  if (!currentUser.roles || !currentUser.roles.includes("USER")) {

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



export default function UserProfile({ children }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Моят профил</title>
      </Head>
      <h1>Моят профил</h1>
      {/* <ProfileContainer /> */}
    </DefaultLayout>
  );
}