import React from 'react';
import './App.css';
import gioAccount from '@/utils/config.js'

function App() {
  console.log('打印环境1',process.env,gioAccount)
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
