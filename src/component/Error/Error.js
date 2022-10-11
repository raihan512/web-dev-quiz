import React from 'react';

const Error = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
                <h2
                    className='text-8xl font-bold text-black'
                >
                    404
                </h2>

                <h5 className='text-black text-xl'>!Page Not Found</h5>
            </div>

        </div>
    );
};

export default Error;