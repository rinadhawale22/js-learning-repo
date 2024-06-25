const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
let arrayEmpSalary = arrayEmployees.map( (employee)=> {
    return employee.emp_salary;
});

console.log(arrayEmpSalary);