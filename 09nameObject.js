const { Certificate } = require("crypto");

const professor= {
       collegeName:'DSG',
       department: 'cse' ,
       university: 'amravati',
       degrees:{
        engineering:"cse",
        PHD:"Adv computing",
        totalExperience:"14 years",
        Certificate:["certificate,Hacker rank paratication,Certificate in IFE ,certigicate Adv programming"],

    },
};
console.log(professor);


professor.degrees=["Oracel certificate"];
console.log(professor.degrees.splice(2,0));
console.log(professor.degrees);

professor.degrees.Certificate=array.splice(3,4);
console.log(professor.degrees.Certificate);



