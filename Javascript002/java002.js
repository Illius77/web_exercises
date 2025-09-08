let course = "JavaScript Basics";
console.log("Welcome to " + course);

// Old JS
var myNameScript = "Illia VAR";

// NEW JS
let myNewNameScript = "Illia LET";

try {
  if (true) {
    let myScopedVariable = "I am in scope";
    var myGlobalVariable = "I am global";

    console.log(myNameScript, myNewNameScript);
    console.log("myScopedVariable declared inside a block:", myScopedVariable);
    console.log("myGlobalVariable declared inside a block:", myGlobalVariable);
  }

} catch (error) {
  console.error("error:", error.message);
}

console.log("myGlobalVariable outside block:", myGlobalVariable);
