import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div
                className="h-screen bg-cover bg-no-repeat bg-center py-5 md:py-20 bg-[url('/src/images/hero.jpg')] relative"
            >
                <div className='bg-slate-600 absolute top-0 left-0 h-full w-full opacity-60'></div>
                <h1
                    className='text-lg md:text-2xl lg:text-5xl text-white font-bold text-center mx-5 md:mx-20 absolute md:inset-36'
                >For testing yourself give test here with our quiz that will justify your expertise about web development technologies. Choose your items from below.</h1>
            </div>

            {/* Topics Container */}
            <div className='md:grid grid-cols-2 m-2 md:m-10'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;