import { apiSlice as api } from '../api/reducer'
import {FieldsPersonal} from "../../components/RegisterSteps/Personal/Personal";
import {convertFieldsToApiValidate, FieldsStep0ApiValidate} from "@store/investors/types";
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

export const {
  useInvestorsControllerSaveFileMutation: useSaveFile,
  useLazyInvestorsControllerValidateStepQuery
} = injectedRtkApiInvestors

export { injectedRtkApiInvestors }

