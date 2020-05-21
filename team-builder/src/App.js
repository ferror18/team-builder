import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from "./components/Form";
import { Member } from "./components/member";
import { useState } from "react";
import { v4 as getid } from "uuid";
function App() {
  const [members, setMembers] = useState([{ name:'john', lastName:'snow', email:'jhonsnow@winterfell.com'}]);
  const memberTemplate = { name:'', lastName:'', email:''};
  const [newMember, setNewMember] = useState(memberTemplate);
  const onInputChange = (event)=>{
    setNewMember({...newMember, [event.target.name]: event.target.value})
    // console.log(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    setMembers([...members, newMember]);
    setNewMember(memberTemplate);

  }
  return (
    <div className="App">
     <Form newMember={newMember} eh={onInputChange} onsub={onSubmit}/>
     {
        members.map(myMember => {
          return <Member key='getid' member={myMember}></Member>
        })
     }
    </div>
  );
}
export default App;
