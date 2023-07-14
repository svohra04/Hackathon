import EmployeeList from "../EmployeeList";
import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { EMPLOYEES_URL } from "../../api/urls";
import SearchBar from "../SearchBar";
import FilterBox from "../FilterBox";


function Home() {
    const [employees, setEmployees] = useState();
    const searchParams = ["Name","Employee Number"];
    const filters = { "JobRoles": [1,2,3], "Location": [2,3,4]}

    async function getEmployees() {
        let fetchedEmployees = await fetchEmployees();
        setEmployees(fetchedEmployees);
      }

    async function fetchEmployees(body={}) {
        let result = await fetch(EMPLOYEES_URL, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return result.json();
    }

    async function onSearch(searchQuery, selectedSearch) {
        searchQuery = searchQuery.trim()
        let body = {}

        if (searchQuery !== "") {
            if (selectedSearch === "Name") {
                body["Name"] = searchQuery;
            }
            else if (selectedSearch === "Employee Number") {
                body["EmployeeNumber"] = parseInt(searchQuery);
            }
        }

        let fetchedEmployees = await fetchEmployees(body);
        setEmployees(fetchedEmployees);
    }

    useEffect(() => getEmployees, []);

    return(
        <>
        <SearchBar searchParams={searchParams} onSearch={onSearch}/>
        <FilterBox filters={filters}/>
        <EmployeeList employees={employees} filters={["jobRoles","location"]}/>
        <div>Homepage</div>
        </>
    )
}

export default Home;