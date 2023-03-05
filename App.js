import logo from './logo.svg';
import './App.css';

import CodeforInterview from './components/Codeforinterview';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={< CodeforInterview /> } />
      <Route path="all" element={<AllUsers /> } />
      <Route path="/add" element={<AddUser />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;