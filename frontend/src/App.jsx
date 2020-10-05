import React from 'react';
import splash from './components/splash/splash'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Route path="/" component={splash}/>
    </div>
  );
}

export default App;
