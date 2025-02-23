import {Link} from 'react-router-dom'
import './index.css'
const Navbar = () =>{
    return(
        <div className="nav">
            <h1 className="navH1">Attendance System</h1>
            <div className="route-div">
                <Link to="/" className="navH1 nav-text">Upload</Link>
                <Link to="/attendance-report" className="navH1 nav-text">Attendance</Link>
            </div>
        </div>
    )
}

export default Navbar