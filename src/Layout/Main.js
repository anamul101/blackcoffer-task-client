import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                    <li className='mb-2'><Link to='/intensity'>Intensity</Link></li>
                    <li className='mb-2'><Link to='/likelihood'>Likelihood</Link></li>
                    <li className='mb-2'><Link to='/relevance'>Relevance</Link></li>
                    <li className='mb-2'><Link to='/endyear'>End Year</Link></li>
                    <li className='mb-2'><Link to='/country'>Country</Link></li>
                    <li className='mb-2'><Link to='/topics'>Topics</Link></li>
                    <li className='mb-2'><Link to='/region'>Region</Link></li>
                    <li className='mb-2'><Link to='/sector'>Sector</Link></li>
                    <li className='mb-2'><Link to='/source'>Source</Link></li>
                    <li className='mb-2'><Link to='/pestle'>Pestle</Link></li>
                    
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;