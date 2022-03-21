//The for in statement loops through the properties of an Object:
const person = {fname:"john", lname:"cena", age:56};
let text = "";
for (let x in person) {
  text += person[x];
  console.log(person);
}
//console.log(text.length);