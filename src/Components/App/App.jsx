import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MapUI from '../MapUI/MapUI'
import Options from '../Options/Options'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c158dc',
      main: '#8e24aa',
      dark: '#5c007a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function App() {
  const [saveData, setSaveData] = useState([])
  
  console.log('App saveData:', saveData)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/map/*' element={<MapUI saveData={ saveData } setSaveData={ setSaveData }/>} />
          <Route path='/map/options/*' element={<Options saveData={ saveData } setSaveData={ setSaveData }/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
