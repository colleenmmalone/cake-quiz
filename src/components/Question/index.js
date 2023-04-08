import React from 'react';

const Question = ( { q, selectAnswer, currentAnswer } ) => {

    return (
        <>


          <div>
            {/* <form> */}
            <h3 className='text-2xl font-semibold mb-4' name={`q${q.id}`} >{q.id}. {q.question}</h3>
            {q.answers.map((answer) => (
              <div>
                <label className='cursor-pointer px-5 py-2 flex space-x-3' >
                  <input
                    type="radio"
                    key={answer.value}
                    id={`q${q.id}a${answer.value}`}
                    name={`q${q.id}`}
                    onChange={() => selectAnswer(answer.value)} 
                    // onClick={() => handleAnswer(answer.value)}
                    checked={answer.value === currentAnswer}
                  />
                  <span >{answer.option}</span>
                </label>
              </div>
            ))}
            {/* </form> */}
          </div>





        </>

    )
}

export default Question;

