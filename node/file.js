const fs=require("fs");

//sync... 
//fs.writeFileSync("./test.txt","hi how are you brother");

//async...
//fs.writeFile("./test.txt","hi how are you brother_",(err)=>{});

//const res=fs.readFileSync("./contact.txt","utf-8");
//console.log(res);

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if (err){
        console.log("Error",err);
    } else{
        console.log(result);
    }
});

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`${Date.now()} login \n`);