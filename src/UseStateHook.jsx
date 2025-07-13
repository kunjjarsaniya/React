import React from 'react'
import { useState } from 'react';

const UseStateHook = () => {
    const [username, setUsername] = useState("kunj"); //array destructuring
    // username is read only variable and setUsername is changing & updating variable

    const changeHandler = () => {
        setUsername("Krish");
    }

    return (
        <div>
            <h1>Username</h1>
            <h2>{username}</h2>
            <button onClick={changeHandler}>Change Name</button>
        </div>
    )
}

export default UseStateHook