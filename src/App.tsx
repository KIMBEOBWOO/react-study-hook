import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import Test from './components/Test';

function App() {
  const [state, setState] = React.useState(true);

  const handleState = () => {
    setState(!state);
  }

  return (
    <div>
      <button onClick={handleState}>show</button>
      {state ?(<ClassComp title={"클래스형 컴포넌트"}/>):(<FunctionComp title={"함수형 컴포넌트"}/>)}

      <br/><br/><br/><br/>

      <Test/>
    </div>
  );
}

export default App;
