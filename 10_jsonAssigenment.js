const { log } = require("util");

employee={
    "name": "Aleix,Melon",
    "id":"E00245",
    "role":["dev","dba"],
    "age":24,
    "age":"11-12-2019",
    "marriage":false,
    "address":{
        "street":"32.laham st.",
        "city":"innbruck",
        "country":"Austrliya",
    },
    "Refered-by":"E0012",
}
employee = employee.name.split(''),[1];
console.log(employee);
console.log(employee.slice(6,10));
employee = employee.role.split(''),['1'];
let splitName=string2.name.split('');
console.log(`role-${splitName[splitName.lenght-1]}`);

let splitDate=string2.split("-");
console.log(`joining year - ${splitDate[splitDate.lenght-1]}`);


