import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-6xl font-bold'>Questions</h2>
            <div>
                <div className='bg-cyan-600 mx-10 my-5 p-10 rounded-md text-left'>
                    <h5 className='2xl text-white font-semibold'>Question -1: What is the purpose of react router</h5>
                </div>
                <div className='bg-cyan-600 mx-10 my-5 p-10 rounded-md text-left'>
                    <h5 className='2xl text-white font-semibold'>Question -2: How does context api works</h5>
                </div>
                <div className='bg-cyan-600 mx-10 my-5 p-10 rounded-md text-left'>
                    <h5 className='2xl text-white font-semibold'>Question -3: useref hook ans</h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;