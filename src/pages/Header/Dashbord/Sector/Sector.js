import React, { useEffect, useState } from 'react';

const Sector = () => {
    const [sector, setSector]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/sector')
        .then(res=>res.json())
        .then(data=>setSector(data))
    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold'>Sector</h1>
        <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
            {
            sector.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.sector}</h1>)
            }
        </div>
        </div>
    );
};

export default Sector;