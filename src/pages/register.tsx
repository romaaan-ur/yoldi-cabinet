import Head from "next/head";

import { InferGetServerSidePropsType, NextPage } from "next";

import { wrapper } from "@/store/store";

import { SignUp } from "@/components/common";
import { NoAuth } from "@/components/layout";

const Register: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =() => {

  return (
    <>
      <Head>
        <title>Yoldi - Регистрация</title>
        <meta name="description" content="Yoldi - Регистрация" />
      </Head>
      <NoAuth>
        <SignUp />
      </NoAuth>
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => ({ props: {} })
);

export default Register;