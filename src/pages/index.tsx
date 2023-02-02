import Head from "next/head";
import { useCallback, useState } from "react";

import { InferGetServerSidePropsType, NextPage } from "next";

import { signOutUser } from "@/store/slice/userSlice";
import { wrapper } from "@/store/store";
import { setAuthHeader } from "@/pages/api/apiClient";

import useProtected from "@/hooks/useProtected";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

import { Main, UserProfile } from "@/components/layout";
import {
  UpdateProfile,
  UserBio,
  UserCover,
  UserDescription,
} from "@/components/common";
import { Button, PenIcon, SignOutIcon } from "@/components/ui";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  () => {
    useProtected();

    const dispatch = useAppDispatch();

    const profile = useAppSelector((state) => state.user.data);

    const signOut = () => {
      dispatch(signOutUser());
      setAuthHeader("");
    };

    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(!open), [open]);

    return (
      <>
        <Head>
          <title>Yoldi - Личный кабинет</title>
          <meta name="description" content="Yoldi - Личный кабинет" />
        </Head>
        <Main>
          <UserCover />
          <UserProfile>
            <UserBio name={profile?.name || ""} email={profile?.email || ""}>
              <Button
                variant="secondary"
                label="Редактировать"
                startIcon={<PenIcon />}
                onClick={handleOpen}
                sx={{
                  width: "200px",
                }}
              />
            </UserBio>
            <UserDescription description={profile?.description || ""}>
              <Button
                variant="secondary"
                label="Выйти"
                startIcon={<SignOutIcon />}
                onClick={signOut}
              />
            </UserDescription>
          </UserProfile>

          <UpdateProfile open={open} onClose={handleOpen} />
        </Main>
      </>
    );
  };

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => ({ props: {} })
);

export default Home;
