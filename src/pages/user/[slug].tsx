import Head from "next/head";

import useProtected from "@/hooks/useProtected";
import { getRequest } from "@/pages/api";
import useSWR, { SWRConfig } from 'swr';
import KEYS from "@/pages/api/keys";

import { Main, UserProfile } from "@/components/layout";

import { IProfile } from "@/types";
import { useRouter } from "next/router";
import { UserBio, UserCover, UserDescription } from "@/components/common";
import { wrapper } from "@/store/store";
import { InferGetStaticPropsType, NextPage } from "next";
import { Loader } from "@/components/ui";
import {userSlice} from "@/store/slice/userSlice";



const UserPage:NextPage<InferGetStaticPropsType<typeof getStaticPaths>> = ({fallback}) => {
    // useProtected();
    const {query} = useRouter();

    
    const {data:profile, isLoading} = useSWR(query.slug ? `${KEYS.USER}/${query.slug}` : null, getRequest<IProfile>);
    
  return (
    <SWRConfig value={{fallback}}>
      <Head>
        <title>Yoldi - профиль</title>
        <meta name="description" content="Yoldi - профиль" />
      </Head>
      <Main>
        {!profile && isLoading && <Loader />}
        {profile && <>
        
          <UserCover data={profile} />
          <UserProfile>
            <UserBio name={profile.name} email={profile.email} />
            <UserDescription description={profile?.description||""} />
          </UserProfile>
        </>}
      </Main>
    </SWRConfig>
  );
}

export const getStaticPaths = async () => {
    const users = await getRequest<IProfile[]>(KEYS.USER);

    return {
        paths: users.map(({slug}) => ({params: {slug}})),
        fallback: false
    }
}

export const getStaticProps = wrapper.getStaticProps(
    store => async ({params}) => {
        const slug = params!.slug as string;

        const user = await getRequest(`${KEYS.USER}/${slug}`)


        return {props: {
            slug,
            fallback: {
                [`${KEYS.USER}/${slug}`] : user
            }
        }}
        
    }
)


export default UserPage;