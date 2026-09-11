const Header = ({ course }) => {
  if (!course) {
    course = 'Default course';
  }
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

export default Header;
