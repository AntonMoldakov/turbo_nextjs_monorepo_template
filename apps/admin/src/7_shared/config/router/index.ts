export const ROUTES_PATHS = {
  authentication: {
    signIn: '/authentication/sign-in',
    forgotPassword: {
      email: '/authentication/forgot-password/email',
      confirmEmail: '/authentication/forgot-password/confirm-email',
      resetPassword: '/authentication/forgot-password/reset-password',
    },
  },
  panel: {
    academicYears: 'panel/academic-years',
    branches: 'panel/branches',
    curriculum: {
      root: 'panel/curriculum',
      curriculum: (id: string) => ({
        active: `panel/curriculum/${id}/active`,
        archived: `panel/curriculum/${id}/archived`,
        students: `panel/curriculum/${id}/students`,
      }),
    },
    discounts: {
      active: 'panel/discounts/active',
      archived: 'panel/discounts/archived',
      combinations: 'panel/discounts/combinations',
      innerStaff: 'panel/discounts/inner-staff',
    },
    invoices: 'panel/invoices',
    levels: 'panel/levels',
    requests: {
      cancellations: 'panel/cancellations',
      services: 'panel/services',
    },
    services: {
      active: 'panel/services/active',
      archived: 'panel/services/archived',
      settings: 'panel/services/settings',
    },
    users: {
      guardians: 'panel/users/guardians',
      requests: 'panel/users/requests',
      staffTeams: 'panel/users/staff-teams',
      students: 'panel/users/students',
    },
  },
} as const;

export const UNAUTHORIZED_ROUTES_PATHS = [
  '/', // TODO: remove
  ROUTES_PATHS.authentication.signIn,
  ROUTES_PATHS.authentication.forgotPassword.email,
  ROUTES_PATHS.authentication.forgotPassword.confirmEmail,
  ROUTES_PATHS.authentication.forgotPassword.resetPassword,
];
