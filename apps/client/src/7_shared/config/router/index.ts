export const ROUTES_PATHS = {
  authentication: {
    signIn: '/authentication/sign-in',
    setNewPassword: '/authentication/set-new-password',
    forgotPassword: {
      email: '/authentication/forgot-password/email',
      confirmEmail: '/authentication/forgot-password/confirm-email',
      resetPassword: '/authentication/forgot-password/reset-password',
    },
  },
  guardian: {
    profile: {
      myProfile: '/guardian/profile/my-profile',
      studentProfile: (id: string) => `/guardian/profile/student-profile/${id}`,
    },
  },
  services: {
    root: '/services',
    service: (id: string) => `/services/${id}`,
  },
} as const;

export const UNAUTHORIZED_ROUTES_PATHS = [
  '/', // TODO: remove
  ROUTES_PATHS.authentication.signIn,
  ROUTES_PATHS.authentication.setNewPassword,
  ROUTES_PATHS.authentication.forgotPassword.email,
  ROUTES_PATHS.authentication.forgotPassword.confirmEmail,
  ROUTES_PATHS.authentication.forgotPassword.resetPassword,
];
