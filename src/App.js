import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/Exercises/Exercises';
import Personal from './components/Personal/Personal';
import Information from './components/Information/Information';

function App() {
  return (
    <div className="App-body">
      <div className='content-container'>
        <Header></Header>
        <Exercises></Exercises>
      </div>
      <div className='cart-container'>
        <Personal></Personal>
        <Information></Information>
      </div>

    </div>
  );
}

export default App;
