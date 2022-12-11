import { cmsEndpoints } from './reducer';

export const cmsEnhanced = cmsEndpoints.enhanceEndpoints({
  addTagTypes: ['cms'],
  endpoints: {
    cmsStorageControllerGetOneCmsObject: {
      providesTags: (_result, _error, arg) => [{ type: 'cms', id: arg.id }],
    },
    cmsStorageControllerSaveNewCmsObject: {
      invalidatesTags: ['cms'],
    },
  },
});
export const {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useLazyCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation,
} = cmsEnhanced;
export const {
  cmsStorageControllerGetOneCmsObject,
  cmsStorageControllerSaveNewCmsObject,
} = cmsEnhanced.endpoints;
