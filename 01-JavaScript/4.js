// Object.prototype.chai=function(){
//     console.log('chai');
    
// }
// const arr =[1,2,3]
// if(!Array.prototype.fill){
//     //fallback-polyfill-backupfun
//     Array.prototype.fill=function(){

//     }
// }
// arr.fill




if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(userFn){
        const originalArr =this // current obj ki taraf point karta hai
        for (let i = 0; i < originalArr.length; i++) {
           userFn(originalArr[i],i);
            
        }
    }
}
const arr = [1,2,3,4,5,6];

  //Error: .forEach fun does not exist on arr variable
  //Real signature ko samjo -
  const ret = arr.myForEach(function(value,index){
    console.log(`value at index ${index} is ${value}`);
    
  });

  console.log(`Ret is`, ret);
  
