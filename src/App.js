// import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from './auth/login';
import signup from './auth/signup';
import Navbar from './auth/navbar';

function App() {
  return (
     
   <Router>
    <Navbar />
       
    <Routes>
    
      <Route exact path={"/"} Component={login} />
      <Route exact path={'/signup'} Component={signup} />
    </Routes>
   </Router>
    
  );
}

export default App;
