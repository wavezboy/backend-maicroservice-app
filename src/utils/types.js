var myObj = { name: ["oladayo"] };
if (!myObj.foo) {
    myObj.foo = [];
}
myObj.foo.push("bar");
// immediately indexed mapped type
// GENERICS
function Identity(arg) {
    return arg;
}
console.log(Identity(7));
