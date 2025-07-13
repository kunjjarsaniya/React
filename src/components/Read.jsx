import React from 'react'

const Read = (props) => {
    const users = props.users;

    if (!users || users.length === 0) {
        return (
            <div className="no-users">
                <h1>User Data</h1>
                <p>No users found. Add some users using the Register form.</p>
            </div>
        );
    }

    const renderUsers = users.map((user) => (
        <li key={user.id} className="user-item">
            <div className="user-details">
                <span className="user-name">{user.fullname}</span>
                <span className="user-age">Age: {user.age}</span>
            </div>
        </li>
    ));

    return (
        <div className="user-list">
            <h1>User Data</h1>
            <ol className="users-container">{renderUsers}</ol>
        </div>
    )
}

export default Read