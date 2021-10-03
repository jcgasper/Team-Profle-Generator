//import Manager constructor
const Manager = require("../lib/Manager");

describe("Manager",() => {

    it("Should create a new object when parimeters are passed through constructor", () => {

        const test = new Manager('Jacob',26,'test@gmail.com',100);

        expect(typeof(test)).toBe("object");
        
    });

    it("getRole() should return Manager", () => {

        const test = new Manager('Jacob',26,'test@gmail.com',100);
        const role = "Manager";

        expect(test.getRole()).toBe(role);

    });





});