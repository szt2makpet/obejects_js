void function functionName()
{
 const person = {firstName:"John", lastName:"Smith", color:"white"};
 person.firstName = "Paul"

document.getElementById("demo").innerHTML =
person.firstName + " " + person.lastName;
console.log(person);

delete person.firstName;

console.log(person);
}