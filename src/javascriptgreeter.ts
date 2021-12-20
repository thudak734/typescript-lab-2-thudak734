import {Greeter} from './greeter';

class JavaScriptGreeter extends Greeter {//extends makes this a subclass
    //we want to override the greet method
    greet(name: string): string {
        return (`console.log('${this.greeting}, ${name}!')`)
    }
}

export default JavaScriptGreeter; //lets you not use curly braces in test file import