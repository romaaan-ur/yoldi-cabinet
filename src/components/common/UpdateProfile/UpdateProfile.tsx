import React, { FC } from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useSWRMutation from "swr/mutation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import useAppSelector from "@/hooks/useAppSelector";
import { patchRequest } from "@/pages/api";
import { updateUser } from "@/store/slice/userSlice";
import KEYS from "@/pages/api/keys";

import { Button, HalfInput, Input } from "@/components/ui";

import { UpdateProfileSchema } from "./UpdateProfileSchema";

import { IProfile } from "@/types";
import useAppDispatch from "@/hooks/useAppDispatch";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "backgroundPrimary.main",
  p: "30px",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export const UpdateProfile: FC<Props> = ({ open, onClose }) => {
const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user.data);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: profile?.name || "",
      slug: profile?.slug || "",
      description: profile?.description || "",
    },
    resolver: yupResolver(UpdateProfileSchema),
  });

  const { data:updateProfile, trigger, isMutating } = useSWRMutation(KEYS.PROFILE, patchRequest<IProfile>, {onSuccess(profile) {
    dispatch(updateUser(profile));
        onClose();
  },});


  const onSubmit = (formValues: Omit<IProfile, "cover" | "image" | "email">) =>  trigger({ ...formValues });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="Редактировать профиль"
      sx={{
        backgroundColor: "transparent",
        ":root": {
          backgroundColor: "transparent",
        }
      }}
    >
      <Box sx={{
          position: "absolute",
          top: {xs: "80px", md: "50%"},
          left: {xs: 0, md: "50%"},
          transform: {md: "translate(-50%, -50%)"},
          maxWidth: {
            md: 600
          },
          width: "100%",
          height: {xs: "100%", md: 560},
          bgcolor: "backgroundPrimary.main",
          p: "30px",
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h1">Редактировать профиль</Typography>
          <Box my="25px">
            <Box>
              <Typography variant="button" color="gray.main" mb="5px">
                Имя
              </Typography>
              <Controller
                name="name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid },
                }) => (
                  <Input
                    value={value}
                    error={invalid}
                    disabled={isMutating}
                    onChange={onChange}
                    fullWidth
                  />
                )}
              />
            </Box>
            <Box my="15px">
              <Typography variant="button" color="gray.main" mb="5px">
                Адрес профиля
              </Typography>
              <Controller
                name="slug"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid },
                }) => (
                    <HalfInput 
                        leftLabel="example.com/"
                        value={value}
                        error={invalid}
                        disabled={isMutating}
                        onChange={onChange}
                        fullWidth
                    />
                )}
              />
            </Box>
            <Box>
              <Typography color="gray.main" mb="5px">
                Описание
              </Typography>
              <Controller
                name="description"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid },
                }) => (
                  <Input
                    value={value}
                    error={invalid}
                    disabled={isMutating}
                    onChange={onChange}
                    multiline
                    maxRows={matchesSM ? 15 : 5}
                    InputProps={{
                        sx: {
                          // maxHeight: {xs: 250},
                            height: {xs: 285, md: 150},
                        }
                    }}
                    // inputProps={{sx: {
                    inputProps={
                      {
                        style: {
                            height: matchesSM ?  250 : 130,
                        }
                    }}
                    fullWidth
                  />
                )}
              />
            </Box>
          </Box>
          <Box display="flex">
            <Box flex={1} mr="10px">
              <Button
                variant="secondary"
                onClick={onClose}
                label="Отмена"
                sx={{ width: "100%", height: 50 }}
              />
            </Box>
            <Box flex={1}>
              <Button type="submit" disabled={isMutating} label="Сохранить" sx={{ width: "100%" }}  />
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
