import React from 'react';
import './App.css';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header';

// const data = require("./data/contacts.json");
// const mantu = data[0];
const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', backgroundColor:'#ffe6cc' }}>
      
      <Header />
      
      <div className='pembatas' style={{color:'red'}}>
        ********************************************************
      </div>
  
      <Contact data={contacts[0]}/>
      <Contact data={contacts[1]}/>
      <Contact data={contacts[2]}/>
      <Contact data={contacts[3]}/>
      <Contact data={contacts[4]}/>
      <Contact data={contacts[5]}/>
      
    </div>
  );
}

export default App;
