import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Grid2, Paper } from '@mui/material';
import Payment from './components/Payment';
import PremiumService from './components/PremiumService';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid2 container>
        <Grid2 size={4}>
          
        </Grid2>
        <Grid2 size={4}>
          <PremiumService />
          <Paper
            sx={{mt : '20px'}}
          >
            <Payment />
          </Paper>
        </Grid2>
        <Grid2 size={4}>

        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
