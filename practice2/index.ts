// type hhType = string | number;

import { StatusCode } from "./status.enum";
import { UserDto } from "./user.dto";

// type object1 = {
//     name:string,
//     age:number,
// }

// type object2 = {
//     _id:string,
// }

// type object3 = object1 & object2 ;

// const user:object3 = {
//     name:'tung',
//     age:23,
//     _id:'1',
// }
// console.log(user);


const user = new UserDto('tung',23);

// console.log(StatusCode.BAD_REQUEST);

// const printArray = <Type>(arr:Type[]):Type[]=>{
//     return arr;
// }

// console.log(printArray<boolean>([true, false, true, false]));

// class GenericClass <A,B> {
//     private name:A;
//     private age: B;
//     constructor(name:A, age:B){
//         this.name = name;
//         this.age = age;
//     }

//     public getName():A {
//         return this.name;
//     }

//     public getAge():B {
//         return this.age;
//     }
// }

// const testGenericClass = new GenericClass<string,number>('tung',23);

// console.log(testGenericClass.getName());

interface Animal {
    eat():string;
    drink():string;
    sleep():string;
}

class CoVeu {
    constructor(
        leg:number,
    ){}

    public run(){
        console.log('run')
    }
}

class Tiger extends CoVeu implements Animal {
    constructor(
        leg:number,
        tail:string,
    ){
        super(leg);
    }
    public eat():string{
        return 'tiger eat';
    }
    public drink():string{
        return 'tiger eat';
    }
    public sleep():string{
        return 'tiger eat';
    }

    public run(){
        console.log('tiger run');
    }
}



const tiger = new Tiger(4,'long');

tiger.run();

