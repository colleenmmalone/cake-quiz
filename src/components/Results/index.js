import React from 'react';

const Results = ( { finalAnswer='', tryAgain} ) => {


  return (
    <div>
<p className='text-4xl'>
You are <span className='font-bold mb-4'>{finalAnswer.value}</span> cake!
</p>

<img src={finalAnswer.img} className='w-[500px] max-h-[50vh] mx-auto object-cover my-7' alt="cake flavor result" />

<button className='secondary mt-4' onClick={() => tryAgain(0)}>Try Again</button>
    </div>
  );
}

export default Results;

