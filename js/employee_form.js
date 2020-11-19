window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            new EmployeePayrollData().name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function() {
        output.textContent = salary.value;
    });

    const date = document.querySelector('#startdate');
    const dateError = document.querySelector(".date-error");
    date.addEventListener('input', function() {
        const startdate = new Date(Date.parse(getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year')));
        try {
            (new EmployeePayrollData()).startDate = startdate;
            dateError.textContent = " ";

            // setTextValue('.date-error',"");
        } catch (e) {
            // setTextValue('.date-error', e);
            dateError.textContent = e;

        }
    });

});

const save = (event) => {
    let employeePayrollData;
    try {
        employeePayrollData = createEmployeePayroll();
    } catch (e) {
        console.log(e);
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    // let employeePayrollData = new EmployeePayRollData();
    // employeePayrollData.name = getInputValueById('#name');
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    // alert("Welcome");
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selItems.push(item.value);
    });
    return selItems;
}

/* 1: querySelector is the newer feature. 
 2: The querySelector method can be used when selecting by element name,
 nesting, or class name.
 3: querySelector lets you dind elements with rules that can't be expressed with
getElementById */

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/*1: getElementById is better supported than querySelector in older versions of
the browsers.
 2 : The Thing with getElementById is that it only allows to select an element by it's id.
  */
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}