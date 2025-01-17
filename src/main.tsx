import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ContextWrapper } from './context/ContextWrapper';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
);
