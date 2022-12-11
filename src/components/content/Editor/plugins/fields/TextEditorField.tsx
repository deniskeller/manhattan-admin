//@ts-nocheck
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const Wysiwyg = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
});
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connectField } from 'uniforms';

export const TextEditorField = connectField((props) => {
  const { value, onChange } = props;
  console.log('TextEditorField', props);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      //stateFromHTML(value?.length > 0 ? value : '')
      ContentState.createFromBlockArray(convertFromHTML(value?.length > 0 ? value : '')),
    ),
  );
  useEffect(() => {
    //const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log('onChange Run', value);
    onChange(value);
  }, [editorState]);

  return (
    <Wysiwyg
      editorState={editorState}
      onChange={(val) => {
        console.log('val', val);
      }}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      preserveNewlines={true}
      onEditorStateChange={(val) => {
        setEditorState(val);
      }}
      toolbar={{
        options: ['history', 'link'],
      }}
    />
  );
});
