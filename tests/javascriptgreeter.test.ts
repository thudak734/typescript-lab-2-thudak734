import JavaScriptGreeter from '../src/javascriptgreeter';

describe("test javascript greeter" , function (){
    test("hello tom", function(){
        let anything:JavaScriptGreeter = new JavaScriptGreeter("hello");//this is "arranging"
        let result = anything.greet("tom");//this is "acting"
        expect(result).toBe("console.log('hello, tom!')");//this is "asserting"
    })

    test("how are you today momo", function(){
        let anything:JavaScriptGreeter = new JavaScriptGreeter("how are you today");//this is "arranging"
        let result = anything.greet("momo");//this is "acting"
        expect(result).toBe("console.log('how are you today, momo!')");//this is "asserting"
    })

});