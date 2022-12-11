import {useCmsStorageControllerSaveNewCmsObjectMutation,
        useCmsStorageControllerGetOneCmsObjectQuery,
        useLazyCmsStorageControllerGetOneCmsObjectQuery
} from "@store/editor/reducerEnhansed";
export const useEditor = ()=>{
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const [getEditorBlocks] = useLazyCmsStorageControllerGetOneCmsObjectQuery();
  return {saveEditor, getEditorBlocks}
}