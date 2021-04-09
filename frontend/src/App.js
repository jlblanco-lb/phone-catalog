import logo from './logo.svg';
import './App.css';
import Header from './components/nav/NavBar';
import Home from './pages/home/Home';

function App() {
  return (
      <div className="App">
          <Header/>
          <Home/>
      </div>
  );
}

export default App;
