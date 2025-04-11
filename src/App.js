import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="App-header"> */}
      {/* <Navbar /> */}
      <div className='App-header'> 
        <Home />
      </div> 

      {/* </div> */}
    </div>
  );
}

export default App;
