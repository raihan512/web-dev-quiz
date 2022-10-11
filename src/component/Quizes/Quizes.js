import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizzes = useLoaderData().data;
    const { name, questions } = quizzes;

    return (
        <div>
            <h2 className='text-3xl font-bold my-5'>Quiz topic on {name}</h2>
            <h4 className='text-xl font-semibold'>On {quizzes.name} topics we have total {questions.length} Quizzes</h4>
            {
                questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }

        </div>
    );
};

export default Quizes;