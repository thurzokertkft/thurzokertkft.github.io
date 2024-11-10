import React from 'react';
import './Home.css';
import Main from './Pages/Main';
import Services from './Pages/Services';
import Us from './Pages/Us';
import Works from './Pages/Works';
import Support from './Pages/Support';
import Protection from './Pages/Protection';
import Contract from './Pages/Contract';
import Industrial from './Pages/Industrial';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';




function Home() 
{
  return (
    <Routes>
      <Route path="/" element={<Main />} /> 
      <Route path="/Services" element={<Services />} />
      <Route path="/Us" element={<Us />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Protection" element={<Protection />} />
      <Route path="/Contract" element={<Contract />} />
      <Route path="/Industrial" element={<Industrial />} />
    </Routes>
  );
}

export default Home;
