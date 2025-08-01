// function great(name) {
//     console.log(`hello ${name}`);
    
// }
// great("Hitesh")

// let globalVar ="I am global"

// function modifyGlobal() {
//     globalVar = "I am modified"
//     let blockScopedVar ="I am blocked-scoped"
//     console.log(blockScopedVar);
    
// }
// modifyGlobal()



// let config= function(){
//     let settings ={
//         theme: "dark"
//     }
//     return settings 
// }()



// let person={
//     name:"ravi",
//     greet: function(){
//         console.log(`hello ${this.name}`);
        
//     }
// }

// let person2 ={
//     name:"hitesh"
// }
// person.greet.call(person2);








// console.log('hello');
// setTimeout(()=>console.log('i am delay'),5*1000)
// setTimeout(()=>console.log('i am instant'),0)
// console.log('bye');


// console.log('hi');
// setTimeout(()=> console.log('hello after 0s'),0);
// Promise.resolve().then(()=>{
//     console.log('1.Promise Resolve Hogaya');
//     Promise.resolve().then(()=>{
//         console.log('2.Promise Resolve Hogaya');
//         Promise.resolve().then(()=>{
//             console.log('3.Promise Resolve Hogaya');
            
//         });
//     });
    
// });
// console.log('bye');




const age =25;
console.log('Age is',age);



test();
function test() {
    console.log('i am inside test fun');
    
}