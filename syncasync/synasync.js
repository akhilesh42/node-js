//Most of the programming languages are synchronous - Execution/statements goes one after other.
// const a = 2;
// const b =3;
// const add =  a+b;
// console.log(add);
// Javascript is asynchronous - Execution goes one after another, but it will not wait.
const a1 = 2;
const b1 =3;
let add1= 0;
setTimeout(() => {
    // code is here
    console.log('Inside');
    add1 =  a1+b1;
}, 0);
console.log('outside');
console.log('1111');

setTimeout(() => { // Callback will kept at places where delay is involved, All callbacks are anonymous functions
    // code is here
    console.log('Inside 2');
    add1 =  a1+b1;
}, 0);
console.log('outside2222');