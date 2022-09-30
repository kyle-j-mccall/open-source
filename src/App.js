import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import DataTable from './components/table/DataTable';
import DataChart from './components/chart/Chart';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained"><Link to="/table" >Table</Link></Button>
        <Button variant="contained"><Link to="/charts">Charts</Link></Button>
        
      </nav>
      <Switch>
        <Route path="/table">
          <DataTable/>
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts">
          <DataChart/>
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
