import React from 'react';
import { ThemeProvider } from './ThemeContext';
import MainComponent from './MainComponent';
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;

