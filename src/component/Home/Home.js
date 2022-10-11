import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-2xl md:text-5xl font-bold text-center mx-20'>For testing yourself give test here with our quiz that will justify your expertise about web development technologies. Choose your items from below.</h1>
            </div>

            {/* Topics Container */}
            <div className='md:grid grid-cols-2 m-10'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    // handleTopic={handleTopic}
                    ></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;