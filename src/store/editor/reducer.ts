import { apiSlice as api } from '../api/reducer';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    cmsStorageControllerGetOneCmsObject: build.query<
      CmsStorageControllerGetOneCmsObjectApiResponse,
      CmsStorageControllerGetOneCmsObjectApiArg
      >({
      query: (queryArg) => ({ url: `/cms-storage/${queryArg.id}` }),
    }),
    cmsStorageControllerSaveNewCmsObject: build.mutation<
      CmsStorageControllerSaveNewCmsObjectApiResponse,
      CmsStorageControllerSaveNewCmsObjectApiArg
      >({
      query: (queryArg) => ({
        url: `/cms-storage`,
        method: 'POST',
        body: queryArg.cmsObjectEntity,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as cmsEndpoints };
export type CmsStorageControllerGetOneCmsObjectApiResponse =
/** status 200  */ CmsObjectEntity;
export type CmsStorageControllerGetOneCmsObjectApiArg = {
  id: string;
};
export type CmsStorageControllerSaveNewCmsObjectApiResponse =
/** status 200  */ CmsObjectEntity;
export type CmsStorageControllerSaveNewCmsObjectApiArg = {
  cmsObjectEntity: CmsObjectEntity;
};
export type CmsObjectEntity = {
  key: string;
  value: any;
};
