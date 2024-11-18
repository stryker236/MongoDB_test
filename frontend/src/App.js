import './App.css';
import InputBox from './components/InputBox';
import ItemList from './components/ItemList';
import axios from 'axios';

function App() {


  return (
    <div className="App">
      <h1>React App</h1>
      <ItemList items={['Item 1', 'Item 2', 'Item 3']} />
      <InputBox />
    </div>
  );
}

export default App;
