import * as React from 'react'; 
import './App.css';

function Box({Children}) {
  const style={
    border : '2px solid black',
    padding : '16px',
  };
  return <div style={style}>{Children}</div>;
}

function Greet({color, name}) {
  return <div style={{color}}>hi {name}</div>
}

function App() {
  return (
    <Box>
      <Greet name="react" color="red" />
      <Greet color="gray" />
    </Box>
  )
}

export default App;
