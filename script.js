/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession:"developer" },
  { id: 2, name: "jack", age: "20", profession:"developer" },
  { id: 3, name: "karen", age: "19", profession:"admin" },
];
// console.log(arr[0].marks);
function PrintStudentswithMap() {
  arr.map((item)=>{
      if(item.profession=="developer"){
      console.log(item.name+" "+item.marks);
      }
  });
  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  arr.forEach((item)=>{
      if(item.profession=="developer"){
      console.log(item.name);
      }
  });
  //Write your code here , just console.log
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
console.log(arr);  
}

function removeFailedStudent() {
  arr=arr.filter((item)=>{
      if((item.profession)!="admin"){
          return item;
      }
  });
  console.log(arr); 
  //Write your code here, just console.log
}
let arr1 = [
  { id: 7, name: "ravi", age: "18", profession:"director" },
  { id: 8, name: "raj", age: "20", profession:"clerk" },
  { id: 9, name: "ram", age: "19", profession:"ceo" },
];
function concatenateArray() {
arr= arr.concat(arr1);
 console.log(arr);
  //Write your code here, just console.log
}
