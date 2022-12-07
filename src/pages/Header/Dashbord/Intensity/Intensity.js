import React, { useEffect, useState } from 'react';
const Intensity = () => {
    const [intensity, setIntensity]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/intensity')
        .then(res=>res.json())
        .then(data=>setIntensity(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl font-bold'>Intensity</h1>
            <div className='grid lg:grid-cols-10 lg:gap-5 mx-4 mt-4'>
                {
                intensity.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.intensity}</h1>)
                }
            </div>
        </div>
    );
};

export default Intensity;