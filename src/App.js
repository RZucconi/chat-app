import React from 'react';

import Contact from './components/Contact';

import './App.css';
import { findAllByDisplayValue } from '@testing-library/react';

const user = [
  {
    name: 'Ava Duncan',
    avatar: 
    "https://randomuser.me/api/portraits/women/19.jpg",
    online: true
  },
  {
    name: 'Cath Myers',
    avatar: 
    "https://randomuser.me/api/portraits/women/89.jpg",
    online: false
  },
  {
    name: 'Dean Richard',
    avatar: 
    "https://randomuser.me/api/portraits/men/76.jpg",
    online: true
  }
]

function App() {
  return (
    <div>
      <Contact {...user[0]}/>
      <Contact {...user[1]}/>
      <Contact {...user[2]}/>
    </div>
  );
}

export default App;
