import EmployeeList from "../EmployeeList";
import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { EMPLOYEES_URL, ROLE_URL, LOCATION_URL } from "../../api/urls";
import SearchBar from "../SearchBar";
import FilterBox from "../FilterBox";


function Home() {
    const [employees, setEmployees] = useState();
    const [filters, setFilters] = useState();
    const searchParams = ["Name","Employee Number"];

    async function getEmployees() {
        let fetchedEmployees = await fetchEmployees();
        getFilters();
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

    async function getFilters() {
        let jobRolesRes = await fetch(ROLE_URL);
        let locationsRes = await fetch(LOCATION_URL);

        let jobRoles = await jobRolesRes.json();
        let locations = await locationsRes.json();

        let filters = {
            "JobRole": jobRoles,
            "WorkLocation": locations
        }
        setFilters(filters)
    }

    function onApplyFilters(selectedFilters) {
        let filteredEmployees = employees;

        // Apply each filter
        for (const filterCategory in selectedFilters) {
            let filterValues = selectedFilters[filterCategory];
            let trueValues = Object.keys(filterValues).filter(
                (value) => filterValues[value]
            );

            filteredEmployees = filteredEmployees.filter((emp) => {
                let value = emp[filterCategory]
                let res = trueValues.includes(value)
                return res
            });

        }

        setEmployees(filteredEmployees);
      }
      

    useEffect(() => getEmployees, []);

    return(
        <>
        <SearchBar searchParams={searchParams} onSearch={onSearch} />
        <FilterBox filters={filters} onApplyFilters={onApplyFilters} />
        <EmployeeList employees={employees} filters={["jobRoles","location"]} />
        <div>Homepage</div>
        </>
    )
}

export default Home;