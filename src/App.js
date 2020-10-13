import React from 'react';

import Contact from './components/Contact';
import ContactList from './components/ContactList';

import './App.css';
import { findAllByDisplayValue } from '@testing-library/react';


function App() {
  return (
    <div>
      <ContactList />
    </div>
  );
}

export default App;
