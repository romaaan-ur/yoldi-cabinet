import Head from "next/head";

import { SignIn } from "@/components/common";
import { NoAuth } from "@/components/layout";
import { wrapper } from "@/store/store";
import { InferGetServerSidePropsType } from "next";
import { NextPage } from "next";

const Login: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    return (
      <>
        <Head>
          <title>Yoldi - Вход</title>
          <meta name="description" content="Yoldi - Вход" />
        </Head>
        <NoAuth>
          <SignIn />
        </NoAuth>
      </>
    );
  };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => ({ props: {} })
);

export default Login;
