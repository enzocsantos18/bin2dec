import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <GlobalStyle />
      <Converter />
    </div>
  );
}

export default App;
