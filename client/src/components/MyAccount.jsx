import React, { useState } from 'react';

const AccountInfoPage = () => {
    const [userInfo, setUserInfo] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        // Add more user information as needed
    });

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4 text-orange-500">Account Information</h1>
                <div className="mb-2">
                    <label className="text-gray-600">Username:</label>
                    <span className="ml-2">{userInfo.username}</span>
                </div>
                <div className="mb-2">
                    <label className="text-gray-600">Email:</label>
                    <span className="ml-2">{userInfo.email}</span>
                </div>
                <div className="mb-2">
                    <label className="text-gray-600">First Name:</label>
                    <span className="ml-2">{userInfo.firstName}</span>
                </div>
                <div className="mb-4">
                    <label className="text-gray-600">Last Name:</label>
                    <span className="ml-2">{userInfo.lastName}</span>
                </div>
                {/* Add more user information fields here */}

                {/* You can also include buttons to edit or update user information */}
                <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange"
                    onClick={() => console.log('Edit button clicked')}
                >
                    Edit
                </button>
                <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange"
                    onClick={() => console.log('Update button clicked')}
                >
                    Update
                </button>
            </div>
        </div>
    );
}

export default AccountInfoPage;
