// let fname='shruti';
// function sayName(s) {
//    let fname = 'Garg';
//    console.log('In SayName',fname);
   
// }
// sayName();



let fname='shruti';
function sayName(s) {
   let lname = 'Garg';

   function inner() {
    console.log('In SayName',fname);
   }
   
inner();
}
sayName();