import React from "react";
export const Form = (props) => {
    return (
        <form onSubmit={props.onsub}>
       <label>Name:</label>
       <input onChange={props.eh} name='name' type='text'value={props.newMember.name}></input>
       <label>Last name:</label>
       <input onChange={props.eh} name='lastName' type='text'value={props.newMember.lastName}></input>
       <label>Email:</label>
       <input onChange={props.eh} name='email' type='email'value={props.newMember.email}></input>
       <label>Accept ToS to submit</label>
       <input onChange={props.eh} name='tos' type='checkbox'></input>
       <input name='submit' type='submit'></input>
     </form>
    )
}