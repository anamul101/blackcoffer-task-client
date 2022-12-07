
import React, { useEffect, useState } from 'react';
const Likelihood = () => {
    const [likelihood, setLikelihood]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/likelihood')
        .then(res=>res.json())
        .then(data=>setLikelihood(data))
    },[])
    return (
         <div>
         <h1 className='text-3xl font-bold'>Likelihood</h1>
         <div className='grid lg:grid-cols-10 lg:gap-5 mx-4 mt-4'>
             {
             likelihood.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.likelihood}</h1>)
             }
         </div>
        </div>
    );
};

export default Likelihood;