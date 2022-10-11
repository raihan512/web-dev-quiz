import React from 'react';

const Option = ({ option, getSelectedOption, quizId, message }) => {
    return (
        <div
            onClick={() => getSelectedOption(quizId, option)}
            className="bg-slate-400 border-2 rounded-md flex justify-center p-5"
        >
            <input type="radio" name={quizId} id={option} className='cursor-pointer' />
            <label className='ml-2 text-lg font-semibold cursor-pointer' htmlFor={option}>{option}</label>
        </div>
    );
};

export default Option;