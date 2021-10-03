//import intern constructor 

const Intern = require("../lib/Intern");

describe("Intern",() => {

    it("Should create a new object when parimeters are passed through constructor", () => {
    
        const test = new Intern('Jacob',26,'test@gmail.com','Ohio State');
    
        expect(typeof(test)).toBe("object");
        
        
        });

        it("getRole() should return Intern", () => {
        
            const test = new Intern('Jacob',26,'test@gmail.com','Ohio State');
            const role = "Intern";
    
            expect(test.getRole()).toBe(role); 
    
        });


        it("getSchool() should return school input", () => {
        
            const test = new Intern('Jacob',26,'test@gmail.com','Ohio State');
            const school = "Ohio State";
    
            expect(test.getSchool()).toBe(school); 
    
        });




});
