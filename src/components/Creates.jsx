import React, { useState } from 'react';

// Generate a unique ID
let nextId = 1;

const Creates = (props) => {
    const users = props.users;
    const setusers = props.setusers;

    const [fullname, setfullname] = useState('');
    const [age, setage] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!fullname || !age) {
            alert('Please fill in all fields');
            return;
        }

        const newuser = {
            id: nextId++,
            fullname,
            age: parseInt(age)
        };

        setusers([...users, newuser]);
        setfullname('');
        setage('');
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={SubmitHandler} className="register-form">
                <div className="form-group">
                    <input
                        onChange={(e) => setfullname(e.target.value)}
                        value={fullname}
                        type="text"
                        placeholder='Full Name'
                        required
                    />
                </div>
                <br />
                <br />
                <div className="form-group">
                    <input
                        onChange={(e) => setage(e.target.value)}
                        value={age}
                        type="number"
                        placeholder='Age'
                        required
                    />
                </div>
                <br />
                <br />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Creates