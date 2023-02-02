import React, { FC } from "react";

import { Controller, useForm } from "react-hook-form";
import useSWR from 'swr';
import useSWRMutation from "swr/mutation";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Button,
  Input,
  PasswordField,
  UserIcon,
  EmailIcon,
} from "@/components/ui";

import KEYS from "@/pages/api/keys";

import { IProfile, ISignUp } from "@/types";
import { authRequest, getRequest } from "@/pages/api";

import { SignUpSchema } from "./SignUpSchema";
import { useSnackbar } from "notistack";
import useAppDispatch from "@/hooks/useAppDispatch";
import { setUserToken, updateUser } from "@/store/slice/userSlice";
import { useRouter } from "next/router";

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

export const SignUp: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(SignUpSchema),
  });

  const {data:authData, trigger, isMutating } = useSWRMutation(
    KEYS.AUTH.SIGN_UP,
    authRequest,
    {
      onSuccess: (data) => {
        if (data) {
          dispatch(setUserToken(data));
        }
      },
      onError(error) {
        enqueueSnackbar(error)
      }
    }
  );

  const {data:profile} = useSWR(authData?.value ? KEYS.PROFILE : null, getRequest<IProfile>, {onSuccess(profile) {
    dispatch(updateUser(profile));
    router.replace("/")
  },});

  const onSubmit = (formValues: ISignUp) => {
    trigger({ ...formValues });
  };

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
        maxWidth={400}
        p="30px"
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: "backgroundPrimary.main",
        }}
      >
        <Typography variant="h1" paddingRight={10}>
          Регистрация в Yoldi Agency
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" my="25px">
            <Box mb={2}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Имя"
                    value={value}
                    onChange={onChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <UserIcon />
                        </InputAdornment>
                      ),
                    }}
                    disabled={isMutating}
                  />
                )}
              />
            </Box>
            <Box mb={2}>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="E-mail"
                    value={value}
                    onChange={onChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    disabled={isMutating}
                  />
                )}
              />
            </Box>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PasswordField
                  onChange={onChange}
                  value={value}
                  placeholder="Пароль"
                  fullWidth
                  disabled={isMutating}
                />
              )}
            />
          </Box>
          <Button
            type="submit"
            label="Создать аккаунт"
            disabled={isMutating}
            sx={{ width: "100%" }}
          />
        </form>
      </Box>
    </Box>
  );
};
