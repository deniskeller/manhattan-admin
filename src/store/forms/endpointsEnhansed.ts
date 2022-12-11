import { formsEndpoints } from './endpoints';

export const formsEnhansed = formsEndpoints.enhanceEndpoints({
  addTagTypes: ['form'],

});
export const {
  usePostFeedbackMutation
} = formsEnhansed