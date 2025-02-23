import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from'./Components/navbar/index.js'
import Upload from'./Components/upload/index.js'
import Attendance from'./Components/attendance/index.js'

const App = () =>(
    <Router>
        <div className='appbg'>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Upload}/>
            <Route path="/attendance-report" Component={Attendance}/>
        </Routes>
        </div>
    </Router>
)

export default App;
