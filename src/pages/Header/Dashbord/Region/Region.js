import React, { useEffect, useState } from 'react';

const Region = () => {
    const [region, setRegion]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/region')
        .then(res=>res.json())
        .then(data=>setRegion(data))
    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold'>Region</h1>
        <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
            {
            region.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.region}</h1>)
            }
        </div>
    </div>
    );
};

export default Region;