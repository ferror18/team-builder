import React from "react";
export const Member = (props) => {
    // debugger
    const {name, lastName, email} = props.member
    return (
        <div>
            <h1>{name}  {lastName}</h1>
            <h3>Email: {email}</h3>
        </div>
    )
}