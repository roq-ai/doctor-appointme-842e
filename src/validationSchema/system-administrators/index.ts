import * as yup from 'yup';

export const systemAdministratorValidationSchema = yup.object().shape({
  access_level: yup.number().integer().required(),
  last_login: yup.date().nullable(),
  login_attempts: yup.number().integer().nullable(),
  account_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
