
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import UserSearched from './pages/UserSearched';


function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<UserSearched />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
