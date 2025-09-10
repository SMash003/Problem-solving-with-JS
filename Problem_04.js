/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
var spl = fileName.split(".");
if(spl[1] === "img" || spl[1] === "docx")
{
    console.log("Store");
}
else if(fileName[0] === "#")
{
    console.log("Store");
}
else
    console.log("Delete");