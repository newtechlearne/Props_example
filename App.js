Passing props to single child
import React from 'react';

function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard name="Neha" age={24} location="Mumbai" />
      <ProfileCard name="Amit" age={28} location="Pune" />
    </div>
  );
}

export default App;
