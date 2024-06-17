import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Catalog } from './pages/Catalogue';
import { Home } from './pages/Home';
import { Navbar } from './layout/navbar';
import { Add } from './pages/addbook';
import { Register } from './pages/register';
import { Login } from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/catalogue' element={<Catalog/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/addbook' element={<Add/>}></Route>
        <Route path='/adduser' element={<Register/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
