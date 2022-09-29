import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/Exercises/Exercises';
import Personal from './components/Personal/Personal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <div className='content-container'>
        <Exercises></Exercises>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
