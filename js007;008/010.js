myFunc3('smooth', 'Ronald');
myFunc3('fire', 'Alice');
myFunc3('bold', 'Bernard');

function myFunc3(type, name) {
    console.log(name + " is of type " + type);
    console.log(`INTERPOLATED: ${name} is of type ${type}`);
}
