import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import App from './App';
import { Route,BrowserRouter,Routes } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ChakraProvider><App /></ChakraProvider>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  
);


