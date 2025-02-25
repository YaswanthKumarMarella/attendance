import {Link} from 'react-router-dom'
import { LuUpload } from "react-icons/lu"
import { BsClipboard2Data } from "react-icons/bs";
import './index.css'
const Navbar = () =>{
    return(
        <div className="nav">
            <h1 className="navH1">Attendance System</h1>
            <div className="route-div">
                <Link to="/" className="navH1 nav-text">Upload &nbsp; <LuUpload/></Link>
                <Link to="/attendance-report" className="navH1 nav-text">Attendance &nbsp;<BsClipboard2Data/></Link>
            </div>
        </div>
    )
}

export default Navbar