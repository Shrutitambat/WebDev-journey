//Object

const person = {
    x:10,
    firstname:'shruti',
    hobbies:['coding','dancing'],
    isMarried:false,
    gwtfullname :function () {
        return 'shruti tambat'
    },

    address:{           //create another obj in obj
          hno:1,
          contry:'india',
    }

}
console.log(person.gwtfullname());
console.log(person.address);






let p1={                       //in let it change if we use const then value not change
    fname:'shruti'
}

let p2=p1
p2.fname='shreya'

console.log(p1);
