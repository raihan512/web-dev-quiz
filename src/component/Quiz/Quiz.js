import React, { useState } from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({ quiz }) => {

    const { question, options, correctAnswer, id } = quiz;
    // Remove p and &nbsp; tag from question 
    const onlyQuestion = (question.slice(3, (question.length - 4))).split('&nbsp;').join(' ');

    // Show correct answer in a toast when click on eye icon 
    const notify = (clickedCorrecctAns) => {
        toast(`Correct answer is --- ${clickedCorrecctAns}`)
    };
    // If selected item is right or wrong show the result to the user by a toast
    const getSelectedOption = (optionId, optionName) => {
        const selectedAns = { optionId: optionName }
        const givenCorrectAns = { id: correctAnswer };

        if (selectedAns.optionId === givenCorrectAns.id) {
            toast('Your anser is Right');
        } else if (selectedAns.optionId !== givenCorrectAns.id) {
            toast('Your anser is Wrong');
        }
    }
    return (
        <div className='bg-black mb-5 mx-5 md:mx-20 rounded-md py-5 relative'>
            <button
                className='absolute top-5 right-5'
                onClick={()=> notify(correctAnswer)}
            >
                <div className='flex items-center'>
                    <span className='mr-2 text-xl text-red-700'>Show Correct Answer</span>
                    <EyeIcon className="h-6 w-6 text-red-700" />
                </div>
            </button>
            <ToastContainer />
            <div className='text-xl font-bold m-8 text-white'>
                {
                    onlyQuestion
                }
            </div>
            <div>
                <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5'>
                    {
                        options.map((option, idx) => <Option
                            quizId={id}
                            key={idx}
                            option={option}
                            getSelectedOption={getSelectedOption}
                        ></Option>)
                    }
                </form>
            </div>
        </div>
    );
};

export default Quiz;