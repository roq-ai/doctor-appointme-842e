import * as yup from 'yup';

export const clinicValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  working_hours: yup.string().nullable(),
  speciality: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
