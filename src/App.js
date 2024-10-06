import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import UserDashBoard from './components/UserDashBoard';
import AdminDashBoard from './components/AdminDashBoard';
import AddTurf from './components/AddTurf';
import BookingHistory from './components/BookingHistory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>
        <Route path='/UserDashBoard' element={<UserDashBoard/>}/>
        <Route path='/AdminDashBoard' element={<AdminDashBoard/>}/>
        <Route path='/addturf' element={<AddTurf/>}/>
        <Route path='/BookingHistory' element={<BookingHistory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
