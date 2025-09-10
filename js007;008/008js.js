//
// FOR basic loop with initialisation, condition and iteration
// 
// console.info('for loop');
for(let i = 0; i < 10; i++){
    // initialisation = define a variable and set it to 0
    // Initialisierung = Variable definieren und auf 0 setzen
    // initialisation = définir une variable et la mettre à 0
    
    // condition = do what is in {} as long as i is inferior to 10.    
    // Bedingung = tun, was in {} steht, solange i kleiner als 10 ist.
    // condition = faire ce qui est dans {} tant que i est inférieur à 10.
    
    // iteration (or afterthought) = run this i++ (i + 1).
    // Wiederholung (oder nachträglicher Einfall) = führe dies i++ (i + 1) aus.
    // itération (ou après coup) = exécuter ce i++ (i + 1).
    console.log(i);
}

// 
// DO WHILE
// Do what is in the statement while a condition is true;
// 
console.info('do loop');
let j = 1;
do {
    console.log(j); // <--- Added to print numbers
    j = j + 1;
}while( j < 10 );

// 
// WHILE
// While a condition is true, run the statement
// 
console.info('while loop');
j = 10;
while( j < 10 )  {
    console.log(j);
    j++;
};

// 
// difference between DO and WHILE 
// DO will exectute the statement once and then the check the condition. With WHILE the statement will only execute if the condition is true.
// DO exécute l'instruction une fois, puis vérifie la condition. Avec WHILE, l'instruction ne sera exécutée que si la condition est vraie.
// DO führt die Anweisung einmal aus und überprüft dann die Bedingung. Mit WHILE wird die Anweisung nur ausgeführt, wenn die Bedingung wahr ist.

console.info('do vs while');
j = 1;
do {
    console.log(j);
    j++;
}while( j < 1 );
console.info('while loop not executed');
j = 1;
while( j < 1)  {
    console.log(j);
    j++;
};

// 
// FOR IN
// iterates through all value of an object
//

const arr = [99,98,88,3,4];
for( let i= 0; i < arr.length; i++){
    console.log(i);
}


console.info('Breaking loops');
for(let i = 0; i < 10; i++){
    if(i === 5) break;
    console.log(i);
}

// 
// Skiping steps in Loops
// 
console.info('Skiping steps in loops');
for(let i = 0; i < 10; i++){
    if(i%2 == 0) continue;
    console.log(i);
}