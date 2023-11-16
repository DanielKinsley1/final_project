import React, { Component } from 'react';
import { useState } from 'react';
import Middleware from './Middleware';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        event.preventDefault()
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email,
            password
        };
        //Outputs user to console
        console.log(user)
        ////Try is used to handle synchronous errors that might occur in the code within the try block
        try {
            Middleware.login(user).then(
                async (response) => {
                    console.log(response.data)
                    //Outputs the data from the response to the console.

                    // store the user in localStorage
                    localStorage.setItem('user', JSON.stringify(response.data))
                    console.log(response.data)
                    navigate("/")
                    window.location.reload();
                }

            )
        }
        catch (error) {
            console.log("Invaild Email or Password", error)
        }


        // Handle form submission here (e.g., authentication)
    }



    return (
        <div className="max-w-md mx-auto my-8">
            <h2 className="text-orange-500 font-bold text-3xl text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
