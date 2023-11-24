import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

import './AssessmentTable.css'

const AssessmentTable = ({ Questions, columnHead= null, tableName}) => {

    // const [showError, setShowError] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const check = () => columnHead;

    const handleAnswerClick = (questionId, answerId) => {
        
        setSelectedAnswers((prevAnswers) => ({

            ...prevAnswers,
            [questionId]: answerId,

        }));
    };

    

    const printSelectedAnswers = () => {
        const answeredQuestions = [];
        
        Questions.forEach((category) => {
            category.questions.forEach((question) => {
                const answerId = selectedAnswers[question.id];
                    if (answerId !== undefined) {
                        answeredQuestions.push({
                        category: category.category,
                        question: question.text,
                        answer: answerId,
                        });
                    }
            });
        });
        
        // Questions.reduce((total, category) => total + category.questions.length, 0)

        if (answeredQuestions.length === Questions[Questions.length-1].questions[Questions[Questions.length-1].questions.length-1].id) {
            // setShowError(false)
            console.log('Selected Answers:', answeredQuestions);
        } else {
            // setShowError(true)
            console.log('Please answer all questions.');
        }
    };
    
    const isCalculateButtonDisabled = () => {
        return Questions.some((category) =>
            category.questions.some((question) => selectedAnswers[question.id] === undefined)
        );
    };


return (
    
    <div>

            {columnHead? 
                <table className='table table-bordered ass-table'>
                    <thead>
                        <tr>
                            <td className='position-relative W-28 W-17 W-18'> <div className='custom-th position-absolute top-50 start-50 translate-middle'>{columnHead.head}</div> </td>
                            <th rowSpan="2" className='custom-th W-60'> {columnHead.title} </th>
                                {columnHead.answers.map(({ answer }, idx) => (
                                    <td key={idx} className='text-center position-relative W-5 W-3'>
                                        <div className='position-absolute top-50 start-50 translate-middle'>
                                            {answer}
                                        </div>
                                    </td>
                                ))}
                        </tr>
                    </thead>
                    
                    <tbody>

                        {Questions.map(({ category, answers, questions }, idx) => (
                        <React.Fragment key={idx}>
                            {questions.map((question, idx) => (
                                <tr key={idx}>
                                {idx === 0 && (
                                    <td rowSpan={questions.length} className='W-28 W-17 W-18'>
                                        <div className='text-dark '>{category}</div>
                                    </td>
                                )}
                                
                                    <th className='W-60' scope="col">
                                        <div >{question.text}</div>
                                    </th>
                                
                                {[1, 2, 3, 4].map((answerId) => (
                                    <td
                                    key={answerId}
                                    onClick={() => handleAnswerClick(question.id, answerId)}
                                    className={selectedAnswers[question.id] === answerId ? 
                                        'selected text-center cursor-pointer W-5 W-3'
                                        : 'cursor-pointer W-5 W-3'
                                    }>
                                    {selectedAnswers[question.id] === answerId && (
                                        <div>
                                            <FaCheck />
                                        </div>
                                    )}
                                    
                                    </td>
                                ))}
                                </tr>
                            ))}
                        </React.Fragment>
                        ))}
                    </tbody>
                </table>
                : 
            
            <table className='table table-bordered ass-table'>
            
            {tableName&&
            <thead>
                <tr>
                    <th colSpan={Questions[0].answers.length + 1}> <div className='L-3'>{tableName.head}</div> </th>
                </tr>
            </thead>
            }

            
            {Questions.map(({category, answers, questions}, idx) =>

            <React.Fragment key={idx}>

                
                <thead >

                    <tr>

                        <th scope='col'> <div>{category}</div> </th>
                        
                        {answers.map(({answer}, idx) =>
                            <td 
                            key={idx}
                            className='text-center' 
                            >
                                {answer}
                            </td>
                        )}
                    </tr>
                </thead>

                <tbody>

                {questions.map((question, idx) => (
                    <tr key={idx}>

                        <th scope="col"> 
                            <div>{question.text}</div> 
                        </th>

                        {[1, 2, 3, 4].map((answerId) => (
                    
                        <td
                        key={answerId}
                        onClick={() => handleAnswerClick(question.id, answerId)}
                        className={selectedAnswers[question.id] === answerId ? 'selected text-center cursor-pointer' : 'cursor-pointer'}
                        >
                            {selectedAnswers[question.id] === answerId && (
                                <div>
                                    <FaCheck />
                                </div>
                        )}
                        </td>
                    ))}
                    </tr>
                ))}
                
                </tbody>
            </React.Fragment>
            )}  
            </table>
            }

        <button
        className='submit-ass' 
        onClick={printSelectedAnswers} 
        disabled={isCalculateButtonDisabled()}
        >
        Calculate
        </button>

        {/* {showError && (
        <div className="alert alert-danger error my-2 py-2">
            Please answer all questions*
        </div>
        )} */}
        
        </div>  

)
}

export default AssessmentTable