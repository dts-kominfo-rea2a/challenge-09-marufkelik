import React from 'react';
import './App.css';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import Header from './components/Header';

const data = require("./data/contacts.json");
// const mantu = data[0];
const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', backgroundColor:'#ffe6cc' }}>
      <header className='kepala'>
      <Header text="Call a Friend"/>
      <Header text2="your friendly contact app"/>
      </header>
      <div className='pembatas' style={{color:'red'}}>
        ********************************************************
      </div>
      
      <Contact data={data}/>
      
    </div>
  );
}

export default App;
