void function functionName()
{
 const person = {firstName:"John", lastName:"Smith", color:"white"};
 person.firstName = "Paul"

console.log(person);

delete person.firstName;

console.log(person);
}