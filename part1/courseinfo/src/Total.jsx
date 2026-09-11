const Total = ({ total }) => {
  return (
    <div>
      <p>
        Number of exercises:
        {total.reduce((a, b) => a + b.exercises, 0)}
      </p>
    </div>
  );
};

export default Total;
