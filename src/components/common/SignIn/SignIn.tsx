import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";

import { Controller, useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import useSWR from 'swr';
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { setUserToken, updateUser } from "@/store/slice/userSlice";
import { authRequest, getRequest } from "@/pages/api";
import KEYS from "@/pages/api/keys";
import useAppDispatch from "@/hooks/useAppDispatch";

import { Button, EmailIcon, Input, PasswordField } from "@/components/ui";

import { SignInSchema } from "./SingInSchema";

import { ISignIn, IProfile } from "@/types";

const defaultValues = {
  email: "",
  password: "",
};

export const SignIn: FC = () => {

  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();


  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(SignInSchema),
  });

  const { data:authData, trigger, isMutating } = useSWRMutation(KEYS.AUTH.LOGIN, authRequest, {onSuccess: (data) => {
    if(data) {
      dispatch(setUserToken(data))
    }
  }, onError(error) {
    enqueueSnackbar(error)
  },});


  const {data:profile} = useSWR(authData?.value ? KEYS.PROFILE : null, getRequest<IProfile>, {onSuccess(profile) {
    dispatch(updateUser(profile));
    router.replace("/")
  },});


  const onSubmit = (formValues: ISignIn) => trigger({ ...formValues });

  return (
    <Box
      flex={1}
      display="flex"
      justifyContent="center"
      border="1px solid"
      borderColor="strokeSecondary.main"
      sx={{
        alignItems: {
          xs: "flex-start",
          md: "center",
        },
        backgroundColor: {
          xs: "backgroundPrimary.main",
          md: "backgroundSecondary.main",
        },
      }}
    >
      <Box
        width={400}
        p="30px"
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: "backgroundPrimary.main",
        }}
      >
        <Typography variant="h1">Вход в Yoldi Agency</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" my="25px">
            <Box mb={2}>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value }, fieldState: {invalid} }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="E-mail"
                    disabled={isMutating}
                    error={invalid}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value }, fieldState: {invalid} }) => (
                <PasswordField
                  value={value}
                  onChange={onChange}
                  placeholder="Пароль"
                  error={invalid}
                  disabled={isMutating}
                />
              )}
            />
          </Box>

          <Button
            type="submit"
            label="Войти"
            disabled={isMutating}
            sx={{ width: "100%" }}
          />
        </form>
      </Box>
    </Box>
  );
};
