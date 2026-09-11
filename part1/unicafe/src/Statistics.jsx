import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine
            text='average'
            value={((good - bad) / all).toFixed(2)}
          />
          <StatisticLine
            text='positive'
            value={`${((good / all) * 100).toFixed(2)} %`}
          />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
