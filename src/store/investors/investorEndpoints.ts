import { apiSlice as api } from '../api/reducer'
import {ApplicationData, convertFieldsToApiValidate, TOrder} from "@store/investors/types";
const injectedRtkApiInvestors = api.injectEndpoints({
  endpoints: (build) => ({

    investorsControllerSaveFile: build.mutation<
      InvestorsControllerSaveFileApiResponse,
      InvestorsControllerSaveFileApiArg
      >({
      query: (queryArg) => {
        const formData = new FormData();
        formData.append("file", queryArg.file);
        return{
          url: `/investors/save-file`,
          method: 'POST',
          body: formData,
      }},
    }),
    investorsControllerValidateStep: build.query<
      InvestorsControllerValidateStepApiResponse,
      InvestorsControllerValidateStepApiArg
      >({
      query: (queryArg) => {
        const body = convertFieldsToApiValidate(queryArg.step, queryArg.fields);
        console.log("hhhhhh", body)
        return{
          url: `/investors/validation/step${queryArg.step + 1}`,
          method: 'POST',
          body: body,
      }},
    }),

    investorsControllerGetAllApps: build.query<
      ResponseWithPaginationApplications,
      QueryApplicationsArg
      >({
      query: (queryArg) => {
        return{
          url: `/investors/applications`,
          params: queryArg,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }},
      keepUnusedDataFor: 5,
    }),

    investorsControllerGetDetailApp: build.query<
      ResponseApplicationDetail,
      QueryApplicationArg
      >({
      query: (queryArg) => {
        return{
          url: `/investors/applications/${queryArg.id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }},
      keepUnusedDataFor: 5,
    }),
    investorsControllerApproveDetailApp: build.query<
      ResponseApplicationDetailApprove,
      QueryApplicationArg
      >({
      query: (queryArg) => {
        return{
          url: `/investors/applications/${queryArg.id}/approve`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }},
    }),
    investorsControllerDeclineDetailApp: build.query<
      ResponseApplicationDetailApprove,
      QueryApplicationArg
      >({
      query: (queryArg) => {
        return{
          url: `/investors/applications/${queryArg.id}/decline`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }},
    }),
  }),
  overrideExisting: false,
})

export type InvestorsControllerSaveFileApiResponse = SaveFileResponse;

export type InvestorsControllerSaveFileApiArg = {
  file: File
}
export type InvestorsControllerValidateStepApiArg = {
  fields: any,
  step: number
}
export type InvestorsControllerValidateStepApiResponse = {

}

export type SaveFileResponse = {
  url: string;
  fileName: string;
}
export type QueryApplicationsArg = {
  page:  number;
  limit:  number;
  order?:  TOrder;
  field?:  string;
  search: string;
  findBy: "email" | "companyName" | "firstName" | "lastName"
}
export type QueryApplicationArg = {
  id: string;
}

export type ResponseWithPaginationApplications =
  {
    page: number;
    limit: number;
    totalPage: number;
    order?: TOrder;
    field?: string;
    count: number;
    unreaded: number;
    data: ApplicationData
  }

export type ResponseApplicationDetail = ApplicationData;
export type ResponseApplicationDetailApprove = {

}

export const {
  useInvestorsControllerSaveFileMutation: useSaveFile,
  useLazyInvestorsControllerValidateStepQuery,
  useLazyInvestorsControllerGetAllAppsQuery: useGetAllApps,
  useInvestorsControllerGetDetailAppQuery: useGetAppDetail,
  useLazyInvestorsControllerApproveDetailAppQuery: useAppDetailApprove,
  useLazyInvestorsControllerDeclineDetailAppQuery: useAppDetailDecline
} = injectedRtkApiInvestors

export { injectedRtkApiInvestors }

