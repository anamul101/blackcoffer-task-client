import React, { useEffect, useState } from 'react';

const Topics = () => {
    const [topics, setTopics]=useState([]);
    useEffect(()=>{
        fetch('https://blackcoffer-task-server.vercel.app/topic')
        .then(res=>res.json())
        .then(data=>setTopics(data))
    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold'>Topics</h1>
        <div className='grid lg:grid-cols-5 lg:gap-5 mx-4 mt-4'>
            {
            topics.map(int=><h1 className='bg-gray-200 text-center py-4 rounded-md text-sl font-bold'>{int.topic}</h1>)
            }
        </div>
        </div>
    );
};

export default Topics;