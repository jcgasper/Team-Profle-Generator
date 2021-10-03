// import Engineer constructor
const Engineer = require('../lib/Engineer');

// 

describe("Engineer",() => {

    //constructor should create new object
    it("Should create a new object when parimeters are passed through constructor", () => {
    
    const test = new Engineer('Jacob',26,'test@gmail.com','github/test.com');

    expect(typeof(test)).toBe("object");
    
    
    });
    it("getRole() should return Engineer", () => {
        
        const test = new Engineer('Jacob',26,'test@gmail.com','github/test.com');
        const role = "Engineer";

        expect(test.getRole()).toBe(role); 

    });


    it("getGithub should return github URL", () => {
        
        const test = new Engineer('Jacob',26,'test@gmail.com','github/test.com');
        
        const githubtest = "github/test.com"


        expect(test.getGithub()).toBe(githubtest)

    });






});