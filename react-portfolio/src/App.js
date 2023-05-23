import Header from './components/Header'
import Projects from './components/Project'
import Footer from './components/Footer'
import React, { useState } from 'react';

function App() {

  const [state, setState] = useState('AboutMe');

  const changeState = (state) => { setState(state); }

  return (
    <div className="container">

      <Header changeState={changeState} />

      <div className='flex-container'>
        <Projects state={state} />
        <Footer />
      </div>
    
    </div>
  );
}

export default App;
