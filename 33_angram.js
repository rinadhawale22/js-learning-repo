function isAngram(str1,str2){
    const result=str1.split("").join("");
    const result1=str2.split("").join("");
    console.log(`"${result}":with"${result1}"=>Anagram `);
    


}
isAngram("vile","evil");
isAngram("silent","listen");
isAngram("gram","aram");
isAngram("mom","tom");