/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here
for(var i=1; i<=experience; i++)
{
    startingSalary = startingSalary+ (startingSalary*0.05);
}
startingSalary = startingSalary.toFixed(2);
console.log(startingSalary);