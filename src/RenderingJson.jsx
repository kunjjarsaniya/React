import React from 'react'

function RenderingJson() {

    const profile = [
        { name: "Abhi", age: 18 },
        { name: "Krish", age: 17 },
        { name: "Zeel", age: 16 },
    ];

    const updatedProfiles = profile.map((profile, index) => {
        return (
            <li key={index}>
                <span>Name: {profile.name} </span>
                <small>Age: {profile.age} </small>
            </li>
        );
    });

    return (
        <div>
            <h1>Rendering Json</h1>
            <ol>
                {updatedProfiles}
            </ol>
        </div>
    );
}

export default RenderingJson