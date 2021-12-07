const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
  
}

const Content = (props) => {
  return(
    <div>
    <Part name={props.part1.name} exercise={props.part1.exercises1} /> 
    <Part name={props.part2.name} exercise={props.part2.exercises2} /> 
    <Part name={props.part3.name} exercise={props.part2.exercises3} /> 
  </div>
  )
}

const Part = (props) => {
  return(
    <div>
      {props.name} {props.exercise}
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises : {props.exo1 + props.exo2 + props.exo3}</p>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div className="App">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exo1={part1.exercises} exo2={part2.exercises} exo3={part3.exercises} />
    </div>
  );
}

export default App;
