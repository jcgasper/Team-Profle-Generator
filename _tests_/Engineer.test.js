// import Engineer constructor
const Engineer = require('../lib/Engineer');

// 

describe("Engineer",() => {

    //constructor should create new object
    it("Should create a new object when parimeters are passed through constructor", () => {
    
    const test = new Engineer('Jacob',26,'test@gmail.com','github/test.com');

    expect(typeof(test)).toBe("object");
    
    
    });
    it("getRole() should return Engineer, getGithub should return github URL", () => {
        
        const test = new Engineer('Jacob',26,'test@gmail.com','github/test.com');
        const role = "Engineer";
        const githubtest = "github/test.com"

        expect(test.getRole()).toBe(role);

        expect(test.getGithub()).toBe(githubtest)

    });






});