import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Results from './components/Results';

const App = () => {

  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quizAnswers = {
    "A": {value:'Chocolate', img: 'https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png'},
    "B": {value:'Vanilla', img: 'https://makeitdairyfree.com/wp-content/uploads/2020/03/the-best-vegan-vanilla-cake-1-2.jpg'},
    "C": {value:'Fruity', img: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/ad18f527-ece4-409c-8fe3-580fa72ebdec.jpg'},
    "D": {value:'Caramel', img: 'https://livforcake.com/wp-content/uploads/2019/03/caramel-cake-thumb.jpg'},
  }
  const questions = [
    {
      id: 1,
      question: 'What\'s your favorite dessert flavor?',
      answers: [
        { option: 'Chocolate', value: 'A' },
        { option: 'Vanilla', value: 'B' },
        { option: 'Fruity', value: 'C' },
        { option: 'Caramel', value: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Which of these activities sounds most appealing to you?',
      answers: [
        { option: 'Reading a book in a cozy chair', value: 'A' },
        { option: 'Going on a long walk in nature', value: 'B' },
        { option: 'Attending a party with friends', value: 'C' },
        { option: 'Watching a movie at home', value: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you typically spend your weekends?',
      answers: [
        { option: 'Sleeping in and relaxing at home', value: 'A' },
        { option: 'Exploring a new city or town', value: 'B' },
        { option: 'Attending social events with friends or family', value: 'C' },
        { option: 'Trying new recipes or cooking at home', value: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you handle stressful situations?',
      answers: [
        { option: 'Take a nap or meditate to calm down', value: 'A' },
        { option: 'Go for a run or do some other physical activity', value: 'B' },
        { option: 'Talk it out with friends or family', value: 'C' },
        { option: 'Eat comfort food or indulge in a sweet treat', value: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Which of these words best describes you?',
      answers: [
        { option: 'Ambitious', value: 'A' },
        { option: 'Compassionate', value: 'B' },
        { option: 'Social', value: 'C' },
        { option: 'Indulgent', value: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Which of these qualities is most important to you in a friend?',
      answers: [
        { option: 'Loyalty', value: 'A' },
        { option: 'Honesty', value: 'B' },
        { option: 'Sense of humor', value: 'C' },
        { option: 'Kindness', value: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you feel about trying new things?',
      answers: [
        { option: 'I love trying new things and exploring new experiences.', value: 'A' },
        { option: 'I am open to trying new things, but I prefer to stick with what I know.', value: 'B' },
        { option: 'I am a bit hesitant to try new things, but I am willing to give it a shot.', value: 'C' },
        { option: "I don't like trying new things and prefer to stick with what I know.", value: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you like to express your creativity?',
      answers: [
        { option: 'Painting or drawing', value: 'A' },
        { option: 'Writing or journaling', value: 'B' },
        { option: 'Playing an instrument or singing', value: 'C' },
        { option: 'Cooking or baking', value: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Which of these is your go-to comfort food?',
      answers: [
        { option: 'Mac and cheese', value: 'A' },
        { option: 'Grilled cheese sandwich', value: 'B' },
        { option: 'Chicken noodle soup', value: 'C' },
        { option: 'Chocolate chip cookies', value: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you like to celebrate your birthday?',
      answers: [
        { option: 'A big party surrounded by friends and family.', value: 'A' },
        { option: 'A small gathering of close friends or family.', value: 'B' },
        { option: 'A special dinner or meal at a restaurant.', value: 'C' },
        { option: 'A day spent doing something I love, like going on a hike or reading a book', value: 'D' },
      ],
    },
  ];

  function handleAnswer(value) {
    setCurrentAnswer(value);
  }

  function tryAgain(value) {
    setCurrentQuestion(value);
    setAnswers([]);
  }

  const handleSubmit = (value) => {

    if (value === '') {
      setIsValid(false);
    } else {

      setIsValid(true);
      setAnswers([...answers, value]);
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer("");
    }

  };

  const answerCounts = answers.reduce((acc, curr) => {
    console.log(acc['A'])
    if (acc['A'] === undefined) {
      acc['A'] = 0
    }
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});

  const result = Object.keys(answerCounts).reduce((acc, curr) => {
    if (answerCounts[curr] > answerCounts[acc]) {
      return curr;
    }
    return acc;
  }, 'A');


  return (
    <div className='flex w-full '>
    <div className='p-7 my-3 mx-auto w-full max-w-[800px]' >

      {
        currentQuestion === questions.length
          ?
          <>
            <Results finalAnswer={quizAnswers[result]} tryAgain={tryAgain} />
          </>
          :
          <>
            <Question q={questions[currentQuestion]} length={questions.length} selectAnswer={handleAnswer} currentAnswer={currentAnswer}
            />
            <button
className='mt-4'
              onClick={() => handleSubmit(currentAnswer)}
            >
              {currentQuestion === questions.length - 1 ? "Submit Answers" : "Next"}
            </button>
          </>
      }

      <div className={`text-[#dd0000]  ${isValid ? 'hidden' : 'block'}`} >Please select an answer</div>


      {/* {console.log(answerCounts)}
      result {result} <br/>
      {
        answers.map((a) => {
          return (
            <>

              {a + ' '}
            </>
          )
        }
        )
      } */}

    </div >
    </div>
  )
}

export default App;
