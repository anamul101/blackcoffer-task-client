import React, { useEffect, useState } from 'react';
const Relevance = () => {
    const [relevance, setRelevance]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/relevance')
        .then(res=>res.json())
        .then(data=>setRelevance(data))
    },[])
    return (
        <div>
         <h1 className='text-3xl font-bold'>Relevance</h1>
         <div className='grid lg:grid-cols-10 lg:gap-5 mx-4 mt-4'>
             {
             relevance.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.relevance}</h1>)
             }
         </div>
        </div>
    );
};

export default Relevance;