/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
 // console.log(arr[0].marks);
  function PrintStudentswithMap() {
    arr.map((item)=>{
        if(Number(item.marks)>50){
        console.log(item.name+" "+item.marks);
        }
    });
    //Write your code here , just console.log
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach((item)=>{
        if(Number(item.marks)>50){
        console.log(item.name+" "+item.marks);
        }
    });
    //Write your code here , just console.log
  }
  
  function addData() {
    arr.push({id:4,name:"susan",age:"20",marks:45});
console.log(arr);  
}
  
  function removeFailedStudent() {
    arr=arr.filter((item)=>{
        if(Number(item.marks)>=50){
            return item;
        }
    });
    console.log(arr); 
    //Write your code here, just console.log
  }
  let arr1 = [
    { id: 7, name: "ravi", age: "18", marks: 55 },
    { id: 8, name: "raj", age: "20", marks: 41 },
    { id: 9, name: "ram", age: "19", marks: 61 },
  ];
  function concatenateArray() {
  arr= arr.concat(arr1);
   console.log(arr);
    //Write your code here, just console.log
  }
