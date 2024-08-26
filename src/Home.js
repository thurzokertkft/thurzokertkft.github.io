import React from 'react';
import './Home.css';
import Main from './Pages/Main';
import Services from './Pages/Services';
import Us from './Pages/Us';
import Works from './Pages/Works';
import Support from './Pages/Support';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'



function Home() 
{
  return (
    <Routes>
      <Route path="/" element={<Main />} /> 
      <Route path="/Services" element={<Services />} />
      <Route path="/Us" element={<Us />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Support" element={<Support />} />
    </Routes>
  );
}

export default Home;
