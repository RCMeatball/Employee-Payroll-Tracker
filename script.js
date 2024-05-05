// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];
// creates the main array that will be used by all the subsequent functions


//  // Collect employee data
const collectEmployees = function() {
  let addEmp = true;
while (addEmp) {
  const addEmployees = function(){
  let firstName = prompt ("Enter first name");
  let lastName = prompt ("Enter last name");
  let salary = parseInt(prompt("Enter salary"));
    if (firstName !== "" && lastName !== "" && isNaN(salary) === false){
      // checks to make sure there was data entered and its the right type of input
  let empArray = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };
employeeArray.push(empArray) 
// pushes the newly created array in the function to the existing one
addEmp = confirm("Add another employee?")}
  else{
    addEmp = false
    alert("Invalid input, please fill out all forms correctly")
  }
  // confirming/denying that the user wants to add a new employee, and making sure the salary is filled out as a number
  employeeArray.sort;
  return employeeArray;}
  addEmployees();}
  return employeeArray;
}
        // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const sal = employeeArray.map(employeeArray =>  employeeArray.salary);
  // making sure to only look at the salary portion of the array
  const sum = sal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const average = sum / sal.length;
  // divides the sum of the salaries by the amount of employees

  console.log('The average salary between our', (employeeArray.length), 'employees is: $',average.toFixed(2))
  // // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randEmp = Math.floor(Math.random() * employeeArray.length);
  const random = employeeArray[randEmp]
  console.log('Congratulations to', random.firstName, random.lastName, 'our random drawing winner!');
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
