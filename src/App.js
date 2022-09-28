import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/Exercises/Exercises';

function App() {
  return (
    <div className="App-body">
      <div className='content-container'>
        <Header></Header>
        <Exercises></Exercises>
      </div>
      <div>
        <h2>Cart section</h2>
      </div>

    </div>
  );
}

export default App;
