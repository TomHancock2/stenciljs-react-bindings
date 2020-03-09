import React from 'react';
import { MyComponentWrapper } from './MyComponentWrapper/MyComponentWrapper';

const App = () => {
  return (
    <div className="App">
      <MyComponentWrapper
        content="This is my content"
      />      
    </div>
  );
}

export default App;
