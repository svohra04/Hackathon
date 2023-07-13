import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EmployeeTile.css'

function EmployeeTile({employee}) {
    return (
        <div>
        {employee && 
        <div className='tile'>
            <div className='name'>Name: {employee.Name}</div>
            <div className='email'>Email: {employee.PhoneNumber}</div>
            <div className='role'>Role: {employee.JobRole}</div>
        </div>
            }
        </div>
    )
}

export default EmployeeTile;
