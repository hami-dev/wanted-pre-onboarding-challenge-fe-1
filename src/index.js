import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {ThemeProvider} from 'styled-components';
import defaultTheme from 'styles/theme';

import 'styles/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
