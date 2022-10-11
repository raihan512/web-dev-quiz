import React from 'react';
import Option from '../Option/Option';


const Quiz = ({ quiz }) => {

    const { question, options, correctAnswer, id } = quiz;
    // console.log(quiz);
    const onlyQuestion = (question.slice(3, (question.length - 4))).split('&nbsp;').join(' ');
    const getSelectedOption = (optionId, optionName) => {
        const selectedAns = { optionId: optionName }
        const givenCorrectAns = { id: correctAnswer };
        if (selectedAns.optionId === givenCorrectAns.id) {
            alert('Your answer is right')
        } else {
            alert('Your anser is wrong')
        }
    }
    return (
        <div className='bg-slate-600 mb-5 mx-20 rounded-md py-5'>
            <div className='text-xl font-bold mb-5'>
                {
                    onlyQuestion
                }

            </div>
            <form action="" className='grid grid-cols-2 gap-5 m-5'>
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
    );
};

export default Quiz;