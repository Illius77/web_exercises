let num = 99;

num = false;
console.log(num); 
console.info(typeof num); 

num = '0';
console.log(num); 
console.info(typeof num); 

let bool = false;
console.info('typeof bool →>', typeof bool); 

bool = 0;
console.info('typeof bool →>>', typeof bool); 

let str = "hello";
console.log("typeof str -->", typeof str); 

let arr = [99, "1", true, 31];
console.log(arr); 
console.info("typeof arr →>", typeof arr); 

arr[0] = 88;
console.log("arr[0] →>", arr[0]);
console.log("arr[1] →>", arr[1]);

let obj = {
  name: "Ronald",
  age: 34
};
console.info("typeof obj →", typeof obj); 
console.log("obj.age →>>", obj.age); 
console.info("typeof obj.age →", typeof obj.age); 
console.log("obj.name →>>", obj.name); 
console.log("typeof obj.name →>>", typeof obj.name); 
console.error('ERROR IN RED')
console.warn

console.log(obj.name, obj.age);