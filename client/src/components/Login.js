import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        <div className="max-w-md mx-auto my-8">
            <h2 className="text-orange-500 font-bold text-3xl text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-bold text-xl py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
            <div className="mt-4 text-center">
                <h3>New User? <cite className="text-orange-500"><a href="/register">Register</a></cite></h3>
            </div>
        </div>
    );
}

export default LoginForm;
