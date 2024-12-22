Passing props to multiple child
import React from 'react';

// Child component 1
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Child component 2
function Age(props) {
  return <p>Age: {props.age}</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Neha" />
      <Age age={24} />
    </div>
  );
}

export default App;
