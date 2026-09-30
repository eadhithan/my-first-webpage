const read = require("readline");
const rl= read.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("enter:",function(input){let num= Number(input);
    if(num%2==0){console.log("even");}
    else{console.log("odd");}
    rl.close();
});