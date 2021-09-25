import axios from 'axios';
import React from 'react';

const EMPLOYEE_APP_BASE_URL="http://localhost:9000/api/employees";


class EmployeeService extends React.Component{

    getEmployee(){
        return axios.get(EMPLOYEE_APP_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_APP_BASE_URL, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_APP_BASE_URL, '/'+employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_APP_BASE_URL, '/'+employeeId, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_APP_BASE_URL, '/'+employeeId);
    }

}

export default EmployeeService;