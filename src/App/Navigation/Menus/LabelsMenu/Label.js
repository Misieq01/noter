import React,{useState} from "react";
import styled from "styled-components";

import DeleteIcon from '../../../../Icons/Labels/delete.svg'
import AcceptIcon from '../../../../Icons/Labels/accept.svg'

const Container = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
  z-index: 100;
`;

const Label = styled.p`
  width: 80%;
  font-size: 16px;
  padding: 10px 0;
`;

const LabelInput = styled.input`
  width: 80%;
  font-size: 16px;
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.75);
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
  opacity: 0.6;
  cursor: pointer;
`;

const Labels = ({value,id,editSlot,SetEditSlot,Remove,Change,...props }) => {

  const [editValue,setEditValue] = useState(value)

  const StartEditing = () =>{
    SetEditSlot(value)
  }


  const FinishEditing = () =>{
    Change(id,editValue)
    SetEditSlot('')
  }

  const PreventPropagation = event => {
    event.stopPropagation();
  };

  return (
    <Container onClick={event => PreventPropagation(event)}>
      {editSlot === value ? <>
        <LabelInput value={editValue} onChange={event=>setEditValue(event.target.value)}  autoFocus />
        <Icon src={AcceptIcon} onClick={FinishEditing} />
      </> : (
        <>
          <Label onClick={StartEditing}>{editValue}</Label>
          <Icon src={DeleteIcon} onClick={()=>Remove(id)} />
        </>
      )}
    </Container>
  );
};

export default Labels;
