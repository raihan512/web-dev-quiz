import React from 'react';

const Option = ({ option, getSelectedOption, quizId, message }) => {
    return (
        <div>
            <div
            onClick={() => getSelectedOption(quizId, option)}
            className="bg-black border-2 rounded-md flex justify-center items-center p-5"
        >
            <input type="radio" name={quizId} id={option} className='cursor-pointer' />
            <label className='ml-2 text-lg text-white font-semibold cursor-pointer' htmlFor={option}>{option}</label>
        </div>
        </div>

    );
};

export default Option;