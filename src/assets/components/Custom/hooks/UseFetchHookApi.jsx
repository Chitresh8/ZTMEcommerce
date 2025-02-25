import React from "react";
import { useFetch } from "./useFetch";

export const UseFetchHookApi=()=>{
    const {data,error,loading}=useFetch("https://jsonplaceholder.typicode.com/comments?postId=1");

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h1>Fetched Data:</h1>
            <marquee>{JSON.stringify(data,null,2)}</marquee>
            <p>Names</p>           
            {data.map((el)=>{
                return <div>
                    <marquee>{el.name}</marquee>
                </div>
            })}
        </div>
    )

};