import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useProtected from "@/hooks/useProtected";
import { getRequest } from "@/pages/api";
import useSWR from 'swr';
import KEYS from "@/pages/api/keys";

import { Main } from "@/components/layout";
import { UserList } from "@/components/common";

import { IProfile } from "@/types";
import { InferGetServerSidePropsType, NextPage } from "next";
import { wrapper } from "@/store/store";

const User:NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  
  
    useProtected();

  const {data:accounts, isLoading} = useSWR(KEYS.USER, getRequest<IProfile[]>);

  return (
    <>
      <Head>
        <title>Yoldi - Список пользователей</title>
        <meta name="description" content="Yoldi - Список пользователей" />
      </Head>
      <Main>
        <Box
          maxWidth={800}
          width="100%"
          mx="auto"
          mt="50px"
          sx={{ padding: { xs: "0 20px"} }}
        >
            <Typography variant="h1" sx={{ marginBottom: "30px" }}>
                Список аккаунтов
            </Typography>
            <UserList isLoading={isLoading} list={accounts} />
        </Box>
      </Main>
    </>
  );
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => ({ props: {} })
);


export default User;