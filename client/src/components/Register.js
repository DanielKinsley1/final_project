import React, { Component } from 'react';
import { useState } from 'react';
function LoginForm() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()



    const handleInputChange = (event) => {
        event.preventDefault()
    }

    const handleSubmit = (event) => {
        const state = {
            username,
            password
        };
        console.log(state)
        event.preventDefault();
        // Handle form submission here (e.g., authentication)
    }

    return (
        <div>
            <h2 className='text-orange-500 font-bold text-2xl text-center py-2'>Register</h2>
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
                <button type="submit" className='text-orange-500 font-bold text-2xl text-center py-2' onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    );
}
export default LoginForm;