import React, { useState } from 'react';
import Middleware from './Middleware';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        event.preventDefault();
    }
    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Creating a user object with form input values
        const user = {
            email,
            password,
            firstName,
            lastName,
        };
        console.log(user);
        try {
            // Calling register method from Middleware to send registration to server
            Middleware.register(user).then(
                async (response) => {
                    console.log(response.data)
                    // Navigating to the home page after successful registration
                    navigate("/")

                }
            )
        }


        catch (error) {
            console.log("Error Creating Account", error)
        }
    }

    return (
        <div className="max-w-md mx-auto my-8">
            <h2 className="text-orange-500 font-bold text-3xl text-center mb-4">Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    {/* Input field for email */}
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div>
                    {/* Input field for password */}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div>
                    {/* Input field for first name */}
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <div>
                    {/* Input field for last name */}
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-bold text-xl py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange"
                >
                    Submit
                </button>
            </form>
            <div className="mt-4 text-center">
                {/* Link to the login page for users who already have an account */}
                <h3>Already have an account? <cite className="text-orange-500"><a href="/login">Login</a></cite></h3>
            </div>
        </div>
    );



}

export default RegistrationForm;
