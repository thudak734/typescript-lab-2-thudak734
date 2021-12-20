import {Greeter} from '../src/greeter';

describe("test greeter class" , function (){
    test("hello tom", function(){
        let anything:Greeter = new Greeter("hello");
        let result = anything.greet("tom");
        expect(result).toBe("hello, tom!");
    })

    test("whats up momo", function(){
        let anything:Greeter = new Greeter("whats up");
        let result = anything.greet("momo");
        expect(result).toBe("whats up, momo!");
    })

})

