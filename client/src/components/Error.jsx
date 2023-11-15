import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import LoginForm from "./Login";
const ErrorPage = () => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     // Check if the user is logged in
    //     const user = JSON.parse(localStorage.getItem('user'));

    //     // If the user is logged in, redirect to the Login page
    //     if (user) {
    //         return <Navigate to="/" />;
    //     } else {
    //         return <Navigate to="/Login" />;

    //     }
    // }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md bg-white rounded-md shadow-md p-6 text-center">
                <h1 className="text-2xl font-bold mb-4 text-red-500">Error: Not Logged In</h1>
                <p className="text-gray-600">You need to be logged in to access this page.</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange" onClick={() => navigate("/Login")}>
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
