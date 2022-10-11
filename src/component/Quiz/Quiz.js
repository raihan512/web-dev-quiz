import React, { useState } from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'



const Quiz = ({ quiz }) => {

    const { question, options, correctAnswer, id } = quiz;
    const onlyQuestion = (question.slice(3, (question.length - 4))).split('&nbsp;').join(' ');
    const [message, setMessage] = useState(' ');
    const [correctAns, setCorrectAns] = useState(' ')
    const showCorrectAns = (clickedCorrecctAns) => {
        setCorrectAns(clickedCorrecctAns)
    }

    const getSelectedOption = (optionId, optionName) => {
        // const selectedAnsArray = []
        const selectedAns = { optionId: optionName }
        const givenCorrectAns = { id: correctAnswer };
        // selectedAnsArray.push(selectedAns);

        if (selectedAns.optionId === givenCorrectAns.id) {
            // alert('Your answer is right')
            setMessage('correct')
        } else if (selectedAns.optionId !== givenCorrectAns.id) {
            setMessage('wrong')
            // alert('Your anser is wrong')
        }
        else {
            setMessage(' ')
        }
        return message

    }
    return (
        <div className='bg-black mb-5 mx-5 md:mx-20 rounded-md py-5 relative'>
            <button
                className='absolute top-5 right-5'
                onClick={() => showCorrectAns(correctAnswer)}
            >
                <div className='flex items-center'>
                    <span className='mr-2 text-xl text-red-700'>Show Correct Answer</span>
                    <EyeIcon className="h-6 w-6 text-red-700" />
                </div>
            </button>
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
                <p className='text-green-600 text-xl font-semibold'>{correctAns}</p>
                {
                    message === 'correct' && <p className='text-lime-500 text-2xl font-semibold'>Right Answer</p>
                }
                {
                    message === 'wrong' && <p className='text-red-700 text-2xl font-semibold'>Wrong answer</p>
                }
            </div>
        </div>
    );
};

export default Quiz;