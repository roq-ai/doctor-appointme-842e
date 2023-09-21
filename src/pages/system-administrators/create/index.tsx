import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createSystemAdministrator } from 'apiSdk/system-administrators';
import { systemAdministratorValidationSchema } from 'validationSchema/system-administrators';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { SystemAdministratorInterface } from 'interfaces/system-administrator';

function SystemAdministratorCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: SystemAdministratorInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createSystemAdministrator(values);
      resetForm();
      router.push('/system-administrators');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SystemAdministratorInterface>({
    initialValues: {
      access_level: 0,
      last_login: new Date(new Date().toDateString()),
      login_attempts: 0,
      account_status: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: systemAdministratorValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'System Administrators',
              link: '/system-administrators',
            },
            {
              label: 'Create System Administrator',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create System Administrator
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Access Level"
            formControlProps={{
              id: 'access_level',
              isInvalid: !!formik.errors?.access_level,
            }}
            name="access_level"
            error={formik.errors?.access_level}
            value={formik.values?.access_level}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('access_level', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="last_login" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Last Login
            </FormLabel>
            <DatePicker
              selected={formik.values?.last_login ? new Date(formik.values?.last_login) : null}
              onChange={(value: Date) => formik.setFieldValue('last_login', value)}
            />
          </FormControl>

          <NumberInput
            label="Login Attempts"
            formControlProps={{
              id: 'login_attempts',
              isInvalid: !!formik.errors?.login_attempts,
            }}
            name="login_attempts"
            error={formik.errors?.login_attempts}
            value={formik.values?.login_attempts}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('login_attempts', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.account_status}
            label={'Account Status'}
            props={{
              name: 'account_status',
              placeholder: 'Account Status',
              value: formik.values?.account_status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/system-administrators')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'system_administrator',
    operation: AccessOperationEnum.CREATE,
  }),
)(SystemAdministratorCreatePage);
