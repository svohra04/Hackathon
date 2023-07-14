import React, { useState} from "react";
import './EmployeeTile.css'
import './Modal.css'

function EmployeeTile({employee, canViewSalary}) {

    const[modal, setModal] = useState(false);
    const[salary, setSalary] = useState(false);

    const toggleModal = () => {
        if (modal === false) {
            let canView = canViewSalary(employee)
            setSalary(canView);
        }
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div onClick={toggleModal}>
            {employee && 
                <div onClick={toggleModal} className='tile'>
                    <div className='name'>Name: {employee.Name}</div>
                    <div className='phoneNum'>Phone Number: {employee.PhoneNumber}</div>
                    <div className='role'>Role: {employee.JobRole}</div>
                </div>
            }

            {modal && (
            <div className="modal-simple">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                {employee && 
                <div onClick={toggleModal} >
                    <div className='modal-data'>Name: {employee.Name}</div>
                    <div className='modal-data'>Phone Number: {employee.PhoneNumber}</div>
                    <div className='modal-data'>Job Role: {employee.JobRole}</div>
                    <div className='modal-data'>Work Location: {employee.WorkLocation}</div>
                    <div className='modal-data'>Employee Manager: {employee.EmployeeManager}</div>
                    <div className='modal-data'>Salary: {salary ? employee.Salary : <span style={{ 'font-style': "italic"}}>Locked</span>}</div>
                </div>
                }
                    <button className='close-modal' onClick={toggleModal}>Close</button>
                </div>
            </div>
            )}

        </div>
        
    )
}

export default EmployeeTile;
