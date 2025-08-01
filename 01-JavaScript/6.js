// Function.prototype.describe = function(){
//     console.log(`Function name is ${this.name}`);
    
// }
// function greet(name){
//        return 'Hello ${name}';
// }

// greet.describe();



// function add(a,b) {          // function declaration
//     return a+b
// }
// const sub = function(a,b){
//     return a-b                        // fun expression
// }

// const multiply = (a,b) => a*b

// function applyOperation(a,b,operation){            // first class fun
//     return operation(a,b)
// }

// const result = applyOperation(5,4, (x,y) => x/y)      



// function createCounter(){
//     let count =0;
//     return function(){
//         count++;
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter());




//DOM

// document.write('Hello ')


//change backgound color link with html

function changeBackground(color){
    document.body.style.backgroundColor=color;
}

const darkButton = document.getElementById('dark-mode-button');
darkButton.innerText='haha';
darkButton.addEventListener('click',function(){
    console.log('i got clicked');
    changeBackground('red');
})
console.log(darkButton);


const themeButton=document.getElementById('theme-button');
themeButton.addEventListener('click',() =>{
     console.log(document.body.style.backgroundColor);
     
})









