import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl lg:text-6xl font-bold'>Questions</h2>
            <div>
                <div className='bg-cyan-600 mx-2 md:mx-10 my-5 p-5 md:p-10 rounded-md text-left'>
                    <h5 className='text-md md:text-2xl text-white font-bold'>Question -1: What is the purpose of react router</h5>
                    <p className='text-xl font-semibold'>
                        The main purpose of react router is to create single page application. React router allows to navigate route without refreshing the page when user navigates. It allows to route component inside a common component. For that reason an web application using react router give better user experience to the user.
                    </p>
                </div>
                <div className='bg-cyan-600 mx-2 md:mx-10 my-5 p-5 md:p-10 rounded-md text-left'>
                    <h5 className='text-md md:text-2xl text-white font-bold'>Question -2: How does context api works</h5>
                    <p className='text-xl font-semibold'>In react js data flow  one direction. Data can be flow only from upper direction to lower direction. And if any child element want to receive any data from his two level or three level upper cpmponent then his parent component have to also receive that data and have to pass it to that child element, sometimes that is boring and so much repetation. To solve this we can use context API.</p>
                </div>
                <div className='bg-cyan-600 mx-2 md:mx-10 my-5 p-5 md:p-10 rounded-md text-left'>
                    <h5 className='text-md md:text-2xl text-white font-bold'>Question -3: useref hook ans</h5>
                    <p className='text-xl font-semibold'>
                    Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn't re-render the component when it's changed. Think it like useState, but unlike useState, doesn't trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;