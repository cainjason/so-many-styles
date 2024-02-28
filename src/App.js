import './App.css';
import Button from './Components/Button';
import Table from './Components/Table';

function App() {

  console.log(process.env);

  return (
    <div className="app">
      <Table />
      <Button />
    </div>
  );

  
}

export default App;

