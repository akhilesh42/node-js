//objects are also a data struture
const person={
    fName:'bala',
    lName:'venkat',
    age:30,
    gender:'Male',
    city:'BLR',
    fullName:function(){
        return `full name is ${this.fName} ${this.lName}`
    }

}
// console.log(person);
console.log(person.fName);
console.log(person.fullName());
person.age=23;
console.log(person.age);
console.log(person['city']);
delete person.gender;
person.pincoe=67545;
console.log(person);



//traversing through object
for(let i in person){
    console.log(`key is: ${i}`);
    console.log(`value is ${person[i]}`);
}