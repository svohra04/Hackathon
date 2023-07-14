import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EmployeeTile.css'
import Modal from './Modal'
import './Modal.css'

function EmployeeTile({employee}) {

    const[modal, setModal] = useState(false);

    const toggleModal = () => {
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
                    <div className='modal-data'>Salary: {employee.Salary}</div>
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
