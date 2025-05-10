import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // std way but it is unoptimized

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akashsky270498')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])
    return (
        <div className="text-center m-4 text-white p-4 bg-gray-700 text-3xl">Github followers: {data.followers}
            <img src={data.avatar_url} alt="github profile picture" width={200} /></div>
    )
}


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/akashsky270498');
    return response.json();
}


export default Github;