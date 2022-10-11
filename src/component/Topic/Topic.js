import React from 'react';

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className='bg-slate-500 sm:flex justify-between items-center m-5 rounded-md p-5'>
            <img className='sm:w-3/12' src={logo} alt="" />
            <div className='text-left'>
                <h4 className='text-2xl text-white font-bold'>{name}</h4>
                <p className='text-white text-xl mb-2 font-semibold'>Total quiz items {total}</p>
                <button
                    className='bg-cyan-400 py-2 px-10 rounded-md text-white font-semibold text-lg'
                >Test</button>
            </div>
        </div>
    );
};

export default Topic;