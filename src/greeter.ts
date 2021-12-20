export class Greeter {
    greeting: string;
   
    constructor(
        greeting: string){
        this.greeting = greeting;//refers to greeting on line 2
    }
    greet(name:string): string{//when in a class you dont need the word function. it knows.
        return (`${this.greeting}, ${name}!`)
}
}





