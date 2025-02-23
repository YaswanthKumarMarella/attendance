import { useState, useEffect, use } from 'react';
import './index.css'
const Attendance = () =>{
  const [students, setStudents] = useState([]);
  const [updatedList, setUpdatedList] = useState([])
  const [selectedList, setSelectedList] = useState([])

  useEffect(() => {
      const storedStudents = localStorage.getItem("students");
      if (storedStudents) {
        const parsedData = JSON.parse(storedStudents);
        setStudents(parsedData);
        console.log("ap",parsedData)
        setUpdatedList(parsedData)
      }
  }, []);

  const onCheck = (event) => {
    const selectedId = Number(event.target.id);  // Convert to number
    const isChecked = event.target.checked;

    setSelectedList(prevList => {
        if (isChecked) {
            // If checked, add the item (only if not already present)
            const newSelection = students.find(each => each.sNo === selectedId);
            if (newSelection && !prevList.some(item => item.sNo === selectedId)) {
                return [...prevList, newSelection];
            }
            return prevList;
        } else {
            // If unchecked, remove the item
            return prevList.filter(item => item.sNo !== selectedId);
        }
    });
};



  const onViewSelected = () =>{
    setUpdatedList(selectedList)
  }

  const onViewAll = () =>{
    setUpdatedList(students)
  }

  
      return (
        <div className="table-container">
          <div className='viewsDiv'>
            <h2 className="table-title">Student List</h2>
            <div className='allSelectedDiv'>
              <p onClick={onViewAll} className='allSelectedText'>View all</p>
              <p onClick={onViewSelected} className='allSelectedText'>View Selected</p>
            </div>
            
          </div>
          
          <table className="student-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>S.No</th>
                <th>Register No</th>
                <th>Name</th>
                <th>Student Mobile</th>
                <th>Father Mobile</th>
                <th>respond</th>
              </tr>
            </thead>
            <tbody>
              {
                updatedList.map(each=>(
                  <tr key={each["sNo"]}>
                <td><input id={each["sNo"]} className='checkbox' type="checkbox" onClick={onCheck} checked={selectedList.some(item => item.sNo === each.sNo)} /></td>
                <td>{each["sNo"]}</td>
                <td>{each["registerNumber"]}</td>
                <td>{each["name"]}</td>
                <td>{each["studentNumber"]}</td>
                <td>{each["fatherNumber"]}</td>
                <td><a href={`tel:${each["fatherNumber"]}`}>
                <button className='callButton'>Call {each["fatherNumber"]}</button>
            </a></td>
              </tr>
                ))
              }
            </tbody>
          </table>
          
        </div>
      );
}

export default Attendance