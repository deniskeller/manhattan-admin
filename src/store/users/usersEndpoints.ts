import { apiSlice as api } from '../api/reducer'
const injectedRtkApiAuth = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerLogin: build.query<
      UserControllerLoginApiResponse,
      UserControllerLoginApiArg
      >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: 'POST',
        body: queryArg.authDto,
      }),
    }),
    userControllerResetPassword: build.query<
      UserControllerResetPasswordApiResponse,
      UserControllerResetPasswordApiArg
      >({
      query: (queryArg) => ({
        url: `/users/reset-password/${queryArg.email}`,
      }),
    }),

    userControllerChangePassword: build.query<
      UserControllerSetPasswordApiResponse,
      UserControllerSetPasswordApiArg
      >({
      query: (queryArg) => ({
        url: `/users/set-new-password/${queryArg.id}`,
        method: 'POST',
        body: queryArg.setNewPasswordDto
      }),
    }),

    userControllerRegister: build.mutation<
      UserControllerRegisterApiResponse,
      UserControllerRegisterApiArg
      >({
      query: (queryArg) => ({
        url: `/users/registration`,
        method: 'POST',
        body: queryArg.registerDto,
      }),
    }),
  }),
  overrideExisting: false,
})

export type UserControllerLoginApiResponse = /** status 200  */ LoginResponse
export type UserControllerRegisterApiResponse = {email: string}
export type UserControllerLoginApiArg = {
  authDto: AuthDto
}
export type UserControllerResetPasswordApiArg = {
  email: string
}
export type UserControllerRegisterApiArg = {
  registerDto: any
}
export type UserControllerSetPasswordApiArg = {
  id: string;
  setNewPasswordDto: SetNewPasswordDto
}

export type LoginResponse = {
  accessToken: string | null
}
export type AuthDto = {
  username: string
  password: string
}
export type SetNewPasswordDto = {
  password:	string;
  confirmPassword:	string;
};
export type UserControllerResetPasswordApiResponse = any;
export type UserControllerSetPasswordApiResponse = any;
export const {
  useUserControllerLoginQuery, useUserControllerRegisterMutation, useLazyUserControllerLoginQuery,
  useLazyUserControllerResetPasswordQuery, useLazyUserControllerChangePasswordQuery
} = injectedRtkApiAuth

export { injectedRtkApiAuth as authEndpoints }

