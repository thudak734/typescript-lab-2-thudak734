import {LoudGreeter} from '../src/loudgreeter';

describe("test loud greeter" , function (){
    test("hello tom", function(){
        let anything:LoudGreeter = new LoudGreeter("hello");//this is "arranging"
        anything.addVolume();
        let result = anything.greet("tom");//this is "acting"
        expect(result).toBe('hello, tom!!');//this is "asserting"
    })
});