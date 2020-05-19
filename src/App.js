import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Converter from './components/Converter';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
      <Converter />
    </div>
  );
}

export default App;
