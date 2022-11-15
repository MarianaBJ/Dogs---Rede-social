import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRouter from './components/Helper/ProtectedRouter';
import Home from './components/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import { UserStorage } from './UserContext';
import Photo from './components/Photo/Photo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route path='conta/*' element={<ProtectedRouter>
              <User />
            </ProtectedRouter>
            } />
            <Route path='foto/:id' element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
