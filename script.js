/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
        arr.map(printingThrougharr);
        function printingThrougharr(arrayItem){
            if(arrayItem.profession == "developer"){
                console.log(arrayItem)
            }
        }
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
        arr.forEach(printingThroughForEach);
        function printingThroughForEach(arrayItem){
            if(arrayItem.profession == "developer"){
                console.log(arrayItem);
            }
        }
  }
  
  function addData() {
    //Write your code here, just console.log
            let newObj = {id: 4, name: "ajay", age:"25", profession: "intern"};
            arr.push(newObj);
            console.log(arr);
        
  }
  
  function removeAdmin() {
    //Write your code here
    let filtered_arr = arr.filter(function (val) {
      if (val.profession !== "admin") {
        return val;
      }
    });
    console.log(filtered_arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
     let arr2 = [{id:5, name:"naveen", age:"27", profession: "mes_engineer"},
                 {id:6, name:"shubham", age:"26", profession: "developer"},
                 {id:7, name:"dhramendra", age:"28", profession: "boxer"}];

    let concatArray = arr.concat(arr2);
    console.log(concatArray);
  }