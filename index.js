// Write your solution in this file!
let employee = {
    streetAddress: '',
    name: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const newObjects = Object.assign({},employee)
    delete newObjects[key]
    return newObjects
}