// i should have a fn increment() on call of the fn it should increment the Node. and return the current count

function increment() {
    let count=0;
    return function (){
        count++;
        return count;
    };
}

const x= increment();
const y= increment();

console.log(x());
console.log(y());

