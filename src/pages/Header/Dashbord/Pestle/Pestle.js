import React, { useEffect, useState } from 'react';

const Pestle = () => {
    const [pestle, setPestle]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/pestle')
        .then(res=>res.json())
        .then(data=>setPestle(data))
    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold'>Pestle</h1>
        <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
            {
            pestle.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.pestle}</h1>)
            }
        </div>
        </div>
    );
};

export default Pestle;