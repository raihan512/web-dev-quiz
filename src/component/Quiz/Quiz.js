import React, { useState } from 'react';
import Option from '../Option/Option';


const Quiz = ({ quiz }) => {

    const { question, options, correctAnswer, id } = quiz;
    const onlyQuestion = (question.slice(3, (question.length - 4))).split('&nbsp;').join(' ');
    const [message, setMessage] = useState(' ');
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
    // console.log(message);
    return (
        <div className='bg-slate-600 mb-5 mx-20 rounded-md py-5'>
            <div className='text-xl font-bold mb-5'>
                {
                    onlyQuestion
                }

            </div>
            <div>
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
                {
                    message === 'correct' && <p>Right Answer</p>
                }
                {
                    message === 'wrong' && <p>Wrong answer</p>
                }
            </div>
        </div>
    );
};

export default Quiz;