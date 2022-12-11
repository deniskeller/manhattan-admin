import { apiSlice as api } from '../api/reducer';
import {IFeedbackPostData} from "@store/modals/types";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postFeedback: build.mutation<
      any,
      {values: IFeedbackPostData}
      >({
      query: (queryArg) => ({
        url: `/feedback`,
        method: 'POST',
        body: queryArg.values,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as formsEndpoints };