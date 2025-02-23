import {use, useState} from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from "js-cookie"
import Navbar from '../navbar'
import './index.css'
const Upload = () =>{
    const [files, setFiles] = useState([]);
    const [students, setStudents] = useState([])

    const handleFile = async(event) =>{
        const file = event.target.files[0]

        setFiles(file)
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://127.0.0.1:5000/upload", {
              method: "POST",
              body: formData,
            });
      
            const data = await response.json();
            const updatedData = data.data.map(each=>(
                {
                  sNo:each["Sl.No"],
                  registerNumber:each["Registerno"],
                  name:each["Name"],
                  studentNumber:each["StudentNo"],
                  fatherNumber:each["FatherNo"]
                }
              ))
              setStudents(updatedData)
              
            localStorage.setItem("students", JSON.stringify(updatedData))

              
              
            

          } catch (error) {
            console.error("Error uploading file:", error);
          }
    }


    
    return(
        <div className="bg-home">
            <div className="main-div">
                <div className="upload-div">
                    <div className='upload-space'>
                    <div className="file-upload-container">
                        <p>Drag & Drop files here</p>
                        <p>or</p>
                    <input onChange={handleFile} type="file" multiple style={{ display: 'none' }} id="fileUploadInput" />
                    <label htmlFor="fileUploadInput" className="browse-button">Browse Files And Upload</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload