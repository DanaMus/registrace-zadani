import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/Registraton';

const App = () => {
  return (
    <div className="container">
      <main>
        <Registration />
      </main>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
