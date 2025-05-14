import { React, useState } from 'react'

function Profile() {
    const [userProfile, setUserProfile] = useState({
        name: "",
        age: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserProfile((prev) => ({
            ...prev, [name] : value
    }))
    }
  return (
    <div>
        <h1>User Profile</h1>
        <label>Name: 
            <input type="text" 
            name="name" 
            value={userProfile.name} 
            onChange={handleChange} />
        </label>
        <label>Age: 
            <input type="text" 
            name="age" 
            value={userProfile.age} 
            onChange={handleChange} />
        </label>
        <h3>Profile Information</h3>
        <p>Name: {userProfile.name}</p>
        <p>Age: {userProfile.age}</p>
    </div>
  )
}

export default Profile