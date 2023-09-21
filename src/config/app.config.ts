interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read healthcare provider information',
    'Read appointment information',
    'Read health record information',
  ],
  ownerAbilities: ['Manage users', 'Manage clinics', 'Manage appointments', 'Manage health records'],
  getQuoteUrl: 'https://app.roq.ai/proposal/33267ae8-b62d-4ed1-8924-db196dc84506',
};
