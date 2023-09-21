import * as yup from 'yup';

export const healthRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  prescription: yup.string().nullable(),
  notes: yup.string().nullable(),
  date_of_visit: yup.date().required(),
  user_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
});
