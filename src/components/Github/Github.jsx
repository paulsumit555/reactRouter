import React, { useEffect, useState } from "react";
import {Link,NavLink, useLoaderData} from 'react-router-dom'
export default function Github() {

/* onst [data,setData] = useState([])

useEffect(()=>{
    fetch('https://api.github.com/users/paulsumit555')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setData(data)
    })
},[]) */

const data = useLoaderData()

return(

    <div className="bg-gray-400 text-center m-4 text-white p-4 text-3xl">Public Git Repository  {data.public_repos}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>

)
}

export const githubInfoLoader = async() => {
    const response = await  fetch('https://api.github.com/users/paulsumit555')
    return response.json()
}