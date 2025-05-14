import React from 'react'

function FirstComp() {
    var users = [
        {
            id: 2,
            username: "Ram",
            email: "ram@gmail.com",
            location: "New Delhi"
        },
        {
            id: 1,
            username: "Lakan",
            email: "lakan@gmail.com",
            location: "Mumbai"
        },
        {
            id: 3,
            username: "Bharat",
            email: "bharat@gmail.com",
            location: "Bangaluru"
        },
    ]
        
  return (
    <div>
        {users.map((user) => (
            <ul key={user.id}>
                <li>Name: {user.username}</li>
                <li>email: {user.email}</li>
                <li>loacation: {user.location}</li>
            </ul>
        ))}
    </div>
  )
}

export default FirstComp