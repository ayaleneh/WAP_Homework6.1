/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function sumOfArray(array) {
  
    let result = array.reduce((accum, num) => accum + num, 0);
    //console.log("sum of array: " + result);
    return result;
}

describe("Array Sum: ", ()=> {

    it("it will sum  element in the given array", ()=> {
      assert.equal(sumOfArray([1, 2, 3, 4]), 10);
      assert.equal(sumOfArray([2, 3, 5, 6]), 16);
    });
  
  });

console.log("Expected output of sumOfArray(1,2,3,4) is 10 " +
    myFunctionTest(10, sumOfArray([1, 2, 3, 4])))
console.assert(sumOfArray([1, 2, 3, 4])==10,"Test failed!")

function multiplicationOfArray(array) {
 
    let result = array.reduce((accum, num) => accum * num, 1);
   // console.log("result of array mulitplication will be: " + result);
    //console.log("value at index two will be: "+array.at(2));
    return result;
}

describe("Array Multiply: ", ()=> {

    it("it will multiply element in the given array", ()=> {
      assert.equal(multiplicationOfArray([5, 2, 3, 4]), 120);
      assert.equal(multiplicationOfArray([10, 2, 3, 4]), 240);
    });
  
  });

console.log("Expected output of multiplicationOfArray(5,2,3,4) is 120 " +
    myFunctionTest(120, multiplicationOfArray([5, 2, 3, 4])))
console.assert(multiplicationOfArray([5, 2, 3, 4]) == 120, "Test failed!")

function reverseString(string) {
   let result = string.split("").reduce((accum, char) => char + accum);
   //console.log("reversed string will be: " + result);
    return result;
}

describe("String Reverse: ", () => {

    it("it will reverse a given a string", () => {
        assert.equal((reverseString("jag testar")), "ratset gaj");
       // assert.equal(multiplicationOfArray([10, 2, 3, 4]), 240);
    });

});

console.log("Expected output of reverseString(jag testar) is ratset gaj " +
    myFunctionTest("ratset gaj", reverseString("jag testar")));
console.assert(reverseString("jag testar") == "ratset gaj", "Test failed!")

function filterLongWord(arrayword, num) {
    let newarray = [];
    newarray = arrayword.filter(word => word.length > num);
    console.log("words will be: " + newarray);
    return newarray;

}

describe("Filter Long Word: ", () => {
    it("the program will filter longest word from a given String: ", () => {
        assert.equal(filterLongWord(["john", "alex", "martha", "Gize", "Ab"], 3), ['john', 'alex', 'martha', 'Gize']);
        // assert.equal(multiplicationOfArray([10, 2, 3, 4]), 240);
    });

});
console.log(filterLongWord(["john", "alex", "martha", "Gize", "Ab"], 3));
