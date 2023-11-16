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

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const user = {
            email,
            password,
            firstName,
            lastName,
        };
        //Outputs the user object to the console
        //Try is used to handle synchronous errors that might occur in the code within the try block
        console.log(user);
        try{
            //Initiates an asynchronous operation using the Middleware.register function. The then method is used to handle the resolved value of the promise returned by Middleware.register. Inside the then block
            Middleware.register(user).then(
            async(response) => {
                console.log(response.data)
                navigate("/")
            //Outputs the data from the response to the console then navigates back to the home page
            }
         )
        }
    
            
        // console.log(user);
        // event.preventDefault();
    
        // Handle form submission here (e.g., send the data to the server)
    

    catch (error) {
        console.log("Error Creating Account", error)
    }
    }
    
    return (
        <div className="max-w-md mx-auto my-8">
            <h2 className="text-orange-500 font-bold text-3xl text-center mb-4">Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
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
                    //onSubmit={handleSubmit}
                >
                    Submit
                </button>
            </form>
            <div className="mt-4 text-center">
                <h3>Already have an account? <cite className="text-orange-500"><a href="/login">Login</a></cite></h3>
            </div>
        </div>
    );



}

export default RegistrationForm;
