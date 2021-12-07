/* eslint-disable no-unused-vars */

const Hello = (props) => {
  return(
    <div>
     <p>Hello {props.name} , you are {props.age} years old.</p>
    </div>
  )
}
/* eslint-disable no-unused-vars */
const App = () => {
  const name = 'Peter';
  const age = 26;
  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="George" age={26 + 10} />
      <Hello name="Allen" age={age} />
    </div>
  );
}

export default App;
