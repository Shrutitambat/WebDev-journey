const obj1 ={
    fname : 'shruti',
    lname: 'Tambat',
};

const obj2 ={
    fname : 'shruti',
    lname: 'Tambat',
    getFullname: function(){
        return `${this.fname} ${this.lname}`;
    },
    
};
console.log(obj1.getFullname()); 
console.log(obj2.getFullname()); 


//new method



// class Person{
//     constructor(fname,lname){
//         this.fnam=fname;
//         this.lnam=lname;
//     }
//     getFullname(){
//         return `${this.fnam} ${this.lnam}`;
//     }
// }

// const p1= new Person('shruti','tambat');
// const p2=new Person('shreya','tambat');
// console.log(p1.getFullname());
// console.log(p2.getFullname());
