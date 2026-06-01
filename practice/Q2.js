const fs=require("fs");

const data="Hello Harshal";

// fs.writeFile("./text.txt",data,(err)=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("File created");
    
//   }
// })

// fs.readFile("./text.txt",(err)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());    
//   }
// })
// fs.appendFile("./text.txt"," age:21",(err)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data appended");
//   }
// })
fs.unlink("./text.txt",(err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted");
    
  }
})