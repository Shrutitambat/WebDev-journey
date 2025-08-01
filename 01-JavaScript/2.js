// let name ="shruti"
// let num=20
// let ispaid=true
// let favclass=null
// let town;
// let skills=["html"]
// console.log(name);
// console.log(town);
// console.log(skills);



// let studentprofile={
//     name:"shruti",
//     age:20,
//     ispaid:true,
//     skills:["html","css"],
//     favclass:null
// }
// console.log(studentprofile);
// console.log(typeof skills);



// let weather = "cloudy";
// if (weather=="cloudy") {
//     console.log("it is cloudy");
    
// }
// else{
//     console.log("not define");
//     }
// console.log(weather=="rainy");  //true or false



// let numberofguest=2;
// let pizzasize ;
// if(numberofguest<=2){
//   pizzasize="small"
//     }
//     else if (numberofguest<=5) {
//         console.log("medium");
//         }
//         else{
//             console.log("large");
//             }
//             console.log(pizzasize);
            


// function calculateGrade(score) {
//     if (score>=90) {
//         return "A"
//     }else if (score>=80){
//         return "B"
//     }
//     else if (score>=70){
//         return "C"
//     }
//     else{
//         return "F"
//     }
// }
// let grade = calculateGrade(80)
// console.log(grade);
// console.log(calculateGrade(76));



// ARRAY


// let fruits = ["apple","mango"];
// let intfruit = new Array("banana","kiwi");   //two syntax
// console.log(fruits);
// console.log(intfruit);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits.length);

// fruits[1]="orange"
// console.log(fruits[1]);

// fruits.push("grape");  //use unshift for add first
// console.log(fruits);



//loop


// let teas =["masala","ginger","oolong","orange","rose","lemon"]
// for (let h = 0; h < teas.length; h++) {
// console.log(`tea at index ${h}:${teas[h]}`);
// }



let myArray =[1,4,2,3,5,6]
let anotherArray = []

function sumfac(numbers) {
    let sum =0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
        }
        return sum;
}

let result=sumfac(myArray);
console.log(result);

let anotherResult = sumfac([3,3,2,6,4]);
console.log(`My result is ${anotherResult}`);




