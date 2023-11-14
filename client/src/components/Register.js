import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        const state = {
            username,
            password,
            firstName,
            lastName,
        };
        console.log(state);
        event.preventDefault();
        // Handle form submission here (e.g., send the data to the server)
    }

    return (
        <div>
            <h2 className='text-orange-500 font-bold text-2xl text-center py-2'>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <button type="submit" className='text-orange-500 font-bold text-2xl text-center py-2' onClick={handleSubmit}>Submit</button>
            </form>
            <h3 >Already have an account? <cite><a href="/login">Login</a></cite></h3>
        </div>
    );
}

export default RegistrationForm;
