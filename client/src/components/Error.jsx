import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate(); // React Router hook for navigation

    //Rendering error page
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md bg-white rounded-md shadow-md p-6 text-center">
                {/* Error message */}
                <h1 className="text-2xl font-bold mb-4 text-red-500">Error: Not Logged In</h1>
                <p className="text-gray-600">You need to be logged in to access this page.</p>
                {/* Button to login page */}
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange" onClick={() => navigate("/Login")}>
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
