import React, { useEffect, useState } from 'react';
const Country = () => {
    const [country, setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/country')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold'>Country</h1>
            <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
                {
                country.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.country}</h1>)
                }
            </div>
        </div>
    );
};

export default Country;