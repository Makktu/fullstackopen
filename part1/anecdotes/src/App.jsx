import { useState } from 'react';
import Button from './Button';
import anecdotes from './anecdotes';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0));

  const getRandomInt = (max = 1) => {
    return Math.floor(Math.random() * max);
  };

  const handleVote = () => {
    const copy = [...voted];
    copy[selected] += 1;
    setVoted(copy);
  };
  const handleNext = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Button text='vote' handleClick={handleVote} />
      <Button text='next anecdote' handleClick={handleNext} />
      {Math.max(...voted) > 0 && (
        <div>
          <h1>Anecdote with most votes</h1>
          {anecdotes[voted.indexOf(Math.max(...voted))]} <br /> - has{' '}
          {voted[voted.indexOf(Math.max(...voted))]} votes
        </div>
      )}
    </>
  );
};

export default App;
