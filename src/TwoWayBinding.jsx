import React, { useState } from 'react'
import Creates from './components/Creates'
import Read from './components/Read'

// Two-Way Binding just for Form element.
// onchange and value both are input attribute.

// jo vadhare code hoy to tene components file me brack kari nakhay.
// components file ka hamesa capital letter se start hota hai.
// components file ko export karna padta hai.
// components file ko import karna padta hai.

// jo koy data ek thi vadhare components file ma use thato hoy to tene parant file maj rakhvo pade.
// e data ne components file ma pass karva mate props drilling no use karvo pade.
// props ka kam hota hai ki data ko parent file se child file ma pass karva pade.
// ui ni direction hai, ulta travel nahi ho sakta.

const TwoWayBinding = () => {
    const [users, setusers] = useState([
        { name: "Abhi", age: 18 },
        { name: "Krish", age: 17 },
        { name: "Zeel", age: 16 },
    ]);

    return (
        <div>
            <Creates users={users} setusers={setusers} />
            <hr />
            <Read users={users} />
        </div>
    )
}

export default TwoWayBinding