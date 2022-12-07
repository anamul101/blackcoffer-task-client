import React, { useEffect, useState } from 'react';

const Source = () => {
    const [source, setSource]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/source')
        .then(res=>res.json())
        .then(data=>setSource(data))
    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold'>Source</h1>
        <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
            {
            source.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.source}</h1>)
            }
        </div>
        </div>

    );
};

export default Source;