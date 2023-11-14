import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        const credentials = {
            username,
            password,
        };
        console.log(credentials);
        event.preventDefault();
        // Handle login logic here (e.g., send the data to the server for authentication)
    }

    return (
        <div>
            <h2 className='text-orange-500 font-bold text-2xl text-center py-2'>Login</h2>
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
                <button type="submit" className='text-orange-500 font-bold text-2xl text-center py-2' onClick={handleSubmit}>Login</button>
            </form>
            <h3 >New User? <cite><a href="/register">Register</a></cite></h3>
        </div>
    );
}

export default LoginForm;
