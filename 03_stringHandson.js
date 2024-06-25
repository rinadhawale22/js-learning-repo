const { log } = require("console");

function stringHandson (){
    var myName= "   Hey you are doing good keep it up    ";
    console.log(`My status: "Hey you are doing good keep it up"`);
    var result= myName.length;
    console.log(`length of the is :${result}`);
    var myName=myName.trim();
    console.log(`length is before triming  :${myName} `);

    var result = myName.split(" ");
    console.log(` word availabe in the string are : ${result.length}`);

    var result=myName.indexOf("good");
    console.log(`index of word good is : ${result}`);


    var result=myName.substring(22,38);
    console.log(`starting : ${result}.`);

    var char=myName.charAt(38,39);
    console.log(`char index at 39,38 is :${char}`);

    var result=myName.charAt("Hey");
    console.log(`string of : ${result}`);
    var result=myName.trim();
    console.log(` after triming ${result}`);
}
stringHandson()
   