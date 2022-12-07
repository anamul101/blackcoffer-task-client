import React, { useEffect, useState } from 'react';

const EndYear = () => {
    const [endyear, setEndyear]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/endyear')
        .then(res=>res.json())
        .then(data=>setEndyear(data))
    },[])
    return (
        <div>
         <h1 className='text-3xl font-bold'>End Year</h1>
         <div className='grid lg:grid-cols-10 lg:gap-5 mx-4 mt-4'>
             {
             endyear.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.end_year}</h1>)
             }
         </div>
        </div>
    );
};

export default EndYear;