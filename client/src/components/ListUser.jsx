import React, { useState, useEffect } from "react";
import Middleware from "./Middleware";
const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const getAllUsers = () => {
        //use user service to retrieve data from backend
        Middleware.getAllUsers()
            .then((response) => {
                //list user data in console for testing
                console.log("All Users", response.data);
                //set user with retrived data
                setUsers(response.data);
            })
            .catch((error) => {
                //if there is an error, list it in the console
                console.log(error);
            });
    };
    useEffect(() => {
        getAllUsers();
    }, []); //dependencies array
    return (
        <div className="container">
            <h2>List Users</h2>
            <table >
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ListUsers;
