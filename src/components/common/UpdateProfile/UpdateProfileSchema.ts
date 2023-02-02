import * as yup from "yup";

export const UpdateProfileSchema = yup.object().shape({
  name: yup.string().required(),
  slug: yup.string().required(),
  description: yup.string().nullable(),
});
