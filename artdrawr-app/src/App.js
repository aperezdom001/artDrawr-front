import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>artDrawr</h1>
       <nav>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/projects'>Topics</Link>
         <Link to='/blog'>Blog</Link>
         <Link to='/contact'>Login</Link>      
        </nav>
    </div>
  );
}

export default App;
