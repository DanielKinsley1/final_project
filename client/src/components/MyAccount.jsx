import React from 'react'

import { useState } from 'react';


const AccountInfoPage = () => {
    const [userInfo, setUserInfo] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        // Add more user information as needed
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1>Account Information</h1>
                <div>
                    <label>Username: </label>
                    <span>{userInfo.username}</span>
                </div>
                <div>
                    <label>Email: </label>
                    <span>{userInfo.email}</span>
                </div>
                {/* Add more user information fields here */}

                {/* You can also include buttons to edit or update user information */}
                <button onClick={() => console.log('Edit button clicked')}>Edit</button>
                <button onClick={() => console.log('Update button clicked')}>Update</button>
            </header>
        </div>
    );
}

export default AccountInfoPage;
