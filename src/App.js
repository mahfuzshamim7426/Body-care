import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App-body">
      <div className='content-container'>
        <Header></Header>
        <h1>Here is body section</h1>
      </div>
      <div>
        <h2>Cart section</h2>
      </div>

    </div>
  );
}

export default App;
