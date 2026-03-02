import './App.css'
import Transactions from './Components/Transactions/Transactions';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import { AppBar, Box, Toolbar } from '@mui/material';

function App() {

  return (
    <>
      <AppBar position="fixed" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: "60px", px: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/statement" element={<Transactions />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
