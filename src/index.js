import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NotesProvider } from './contexts/notes.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
);
