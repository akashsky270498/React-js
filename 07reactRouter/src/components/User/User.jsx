import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();
    return (
        <div className="bg-gray-700 text-white text-center text-3xl p-4">User Data: {id}</div>
    )
}

export default User;