const fs = require('fs');
//writing a file
//in writing a file first we will give the path in the second paramter we will give the data that we want to put inside the txt file and then callback function 
fs.writeFile("hey.txt","hey hello",function(err){
  if(err){
    console.error(err)
  }
  else{
    console.log("done ")
  }
})
// append a file
// in this we will append text something in existing file like in this first we write file and then append file 
fs.appendFile("hey.txt"," my name is tanisha",function(err){
  if(err) console.error(err);
  else console.log("done appending file!!!");
 
})
// rename a file 
// in this first we send the path of that we have to change and then in second parameter we will send the new path of that file
fs.rename("hey.txt","hello.txt",function(err){
  if(err) console.error(err);
  else console.log("done renaming file to hello.txt");
})
// copy a file
 fs.copyFile('hello.txt','copy.txt',function(err){
  if(err)console.error(err);
  else console.log("done copying file")
 })
  //unlink file deleting a file 
 fs.unlink("hello.txt",function(err){
  if(err)console.error(err);
  else console.log("unlinking done ")
 })
 //reading a file
 fs.readFile('copy.txt','utf-8',(err,data)=>{
  if(err)console.error(err);
  else console.log(data)
 })