import React from "react";

import Background from "../../Components/Background";
import Editor from "../Editors/Editor";
import {withRouter,useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {PostUpdatedNote} from '../Store/Actions/notesActions'

const AddNotePanel = props => {

  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id)

  const ClosePanel = () =>{
    dispatch(PostUpdatedNote(id))
    props.history.push("/User/NotesPanel");
  }

  return (
        <>
          <Background onClick={ClosePanel} />
          <Editor/>
        </>
  );
};

export default withRouter(AddNotePanel);