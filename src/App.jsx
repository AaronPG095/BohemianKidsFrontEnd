import React, { useState } from 'react';
import './styles/style.scss';

import NavBar from './components/main-page/NavBar';
import HomePage from './components/main-page/Home';
import Footer from './components/main-page/Footer';

function App() {
  // User Dropdown Menu Logic
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    if (event.currentTarget.className === 'user_dropdown') {
      setOpen(false);
    }
    else if (event.currentTarget.className !== 'user_dropdown') {
      setOpen(false);
    }
  };

  return (
    <div onClick={handleOpen}>
      <NavBar setOpen={setOpen} open={open} />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
