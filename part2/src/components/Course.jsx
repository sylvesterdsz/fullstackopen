const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((p) => (
      <Part key={p.id} part={p} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = (props) => <h3>total of {props.total} exercises</h3>;

const Course = ({ course }) => {
  //already used reduce in exercise 2.2 - adding this comment to put a commit for exercise 2.3
  const calculatedTotal = course.parts
    .map((p) => p.exercises)
    .reduce((sum, exercises) => sum + exercises, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={calculatedTotal} />
    </div>
  );
};

export default Course;
