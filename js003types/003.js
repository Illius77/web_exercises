// changing the object type
let num = 99;

num = false;
console.log(num); // false
console.info(typeof num); // boolean

num = '0';
console.log(num); // '0'
console.info(typeof num); // string

let bool = false;
console.info('typeof bool →>', typeof bool); // boolean

bool = 0;
console.info('typeof bool →>>', typeof bool); // number

let str = "hello";
console.log("typeof str -->", typeof str); // string

let arr = [99, "1", true, 31];
console.log(arr); // [99, "1", true, 31]
console.info("typeof arr →>", typeof arr); // object

arr[0] = 88;
console.log("arr[0] →>", arr[0]);
console.log("arr[1] →>", arr[1]);