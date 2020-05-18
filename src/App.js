import React from 'react';
import GlobalStyle from './styles/global';
import Converter from './components/Converter';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Converter />
    </div>
  );
}

export default App;
