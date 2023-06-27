import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './pages/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './pages/nav';
import Signup from './pages/signup';
import Anav from './pages/anav';
import Profile from './pages/profile';


function App() {
  
  return (
    <div className="App">
       <Login/>  
       <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes> 
    </div>
  );
}

export default App;