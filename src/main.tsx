import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './pages/App.tsx';

import { GlobalStyled } from './styles/global.ts';
import { defaultTheme } from './styles/themes/default.ts';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyled />
    </ThemeProvider>
  </React.StrictMode>,
);
