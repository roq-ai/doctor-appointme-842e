import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  qualification: yup.string().required(),
  experience: yup.number().integer().nullable(),
  specialization: yup.string().required(),
  working_days: yup.string().required(),
  user_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
