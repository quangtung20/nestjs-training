export class UserDto {
    private name:string;
    public age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    public getName():object{
        return {
            name:this.name,
            age:this.age
        };
    }
}