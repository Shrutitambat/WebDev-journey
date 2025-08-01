// let number = 42; //num
// console.log(number);



// let text ="hello" // string
// let isTrue = true; //boolen
// let nothing = null; //null/objrct
// let undefinevar= undefined; //undefine
// let symbolvar= Symbol();
// console.log(typeof Symbol);

// let person={
//     number:2,

// }

// let num ="42"
// let convertedNum =Number(num);
// console.log(convertedNum);
// console.log(typeof convertedNum);

// let str = 12;
// let convertedstring= String(str);





// let a=10
// let b=3

// let sum = a+b
// let difference= a-b
// let MUL = a*b


// let x=5
// let y=6

// console.log(x==y);
// console.log(x!=y);


// console.log(Math.max(5,10));
// console.log(Math.random()); // betwween 0 to 1




// let chaiTypes =["Masala chai","Green tea"]
// console.log(chaiTypes[1]);
// console.log(`Total chai Types: ${chaiTypes.length}`);

// chaiTypes.push("heral tea");
// console.log(chaiTypes);

// let index =chaiTypes.indexOf("Green tea")
// console.log(index);


// if(index !== -1){
//     chaiTypes.splice(index, 1)
// }
// console.log(chaiTypes);





// chaiTypes.forEach((chai, index)=>{
//     console.log(`${index+1}: ${chai}`);
    
// });

// let moreChaiTypes = ["Oolong tea", "White Tea"];
// let allChaiTypes = chaiTypes.concat(moreChaiTypes);

// let newChaiTypes = [...chaiTypes,"Chamoli"];
// console.log(newChaiTypes);

// let chaiRecipe ={
//     name: "Masala Chai",
//     ingredients:{
//         teaLeaves:"Assam Tea",
//         milk:"Full Cream Milk",
//         sugar:"Brown sugar",
//         spices:["Daalchini","Ginger"]
//     },
//     instruction:"Boil water, add tea leaves",
// };
// console.log(chaiRecipe.ingredients.spices[1]);

// let updatedChaiRecepie ={
//     ...chaiRecipe,
//     instruction:"Boil water,add tea leaves",
// };
// console.log(updatedChaiRecepie);














function prepareChai(type){
    if(type === "Masala Chai"){
        console.log("add spice");
        
    }
    else{
        console.log("preparing regular chai");
        
    }
}

prepareChai("Masala Chai")


function calculateTotal(amount){
    //convert to no.
    if(amount>100){
        return amount* 0.9
    } 
    return amount
   
    
}
let finalBill = calculateTotal(1200)
console.log(finalBill);
console.log(calculateTotal(1300));



function trafficlight(color) {
    switch (color) {
        case"red":
            console.log("stop");
            
            break;
            case"green":
            console.log("go");
            
            break;
        default:
            console.log("chalan");
            
            break;
    }
}
trafficlight("red");





let salesData =[
    {product: "Laptop",price:200},
    {product: "headphones",price:800},
    {product: "phone",price:100},
];

let totalSales = salesData.reduce((acc, sale) =>0+sale.price,0);
console.log(totalSales);



let userActivity =[
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
];

let mostActiveuser = userActivity.reduce((maxUser, user)=>
user.activityCount> maxUser.activityCount? user : maxUser);

console.log(mostActiveuser);



