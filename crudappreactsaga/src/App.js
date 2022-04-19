import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddeditUser from './pages/AddeditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
        <Router>
        <div className="App">
          <ToastContainer></ToastContainer>
          <Header></Header>
        <Routes>
          <Route exact path = '/' element = {<Home />}></Route> 
          <Route exact path = '/addUser' element = {<AddeditUser />}></Route> 
          <Route exact path = '/editUser/:id' element = {<AddeditUser />}></Route> 
          <Route exact path = '/userInfo/:id' element = {<UserInfo />}></Route> 
          <Route exact path = '/about' element = {<About />}></Route> 

        </Routes>
    </div>

      </Router>
  );
}

export default App;
