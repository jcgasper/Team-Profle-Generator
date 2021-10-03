const Employee = require("../lib/Employee");


describe("Employee", () => {

    describe("Employee Constructor", () => {
        //Constructor should create new object 
        it("Should create an object when parimeters are passed through", () => {
        
        const test = new Employee('Jacob',26,'test@gmail.com');
        //expect test to be a new object
        expect(typeof(test)).toBe("object");

        
        });
        // Each element of object should return the appropriate type
        it("Should return apporpiate type for each constructor input ( expect: string, num, string)", () => {
            
            const test = new Employee('Jacob',26,"test@gmail.com");
            
            
            //expect name to be a string
            expect(typeof(test.name)).toEqual(expect.any(String));
            //expect name to be a number
            expect(test.id).toEqual(expect.any(Number));
            // expect email to be a string
            expect(test.email).toEqual(expect.any(String));
    
            
            });


            it("Should return inputted values", () => {
            
                const test = new Employee('Jacob',26,"test@gmail.com");
                
                const name = 'Jacob'
                const num = 26;
                const testMail = "test@gmail.com";

                //expect name to equal input
                expect(test.name).toBe(name);
                //expect id to equal input
                expect(test.id).toBe(num);
                //expect email to equal input
                expect(test.email).toBe(testMail);
                
                });

                it(" various get() functions should return expected values", () => {
            
                    const test = new Employee('Jacob',26,"test@gmail.com");
                    
                    const name = 'Jacob'
                    const num = 26;
                    const testMail = "test@gmail.com";
                    const role = "Employee"
                    //expect getName() to return name input
                    expect(test.getName()).toBe(name);
                    //expect get id to return id
                    expect(test.getId()).toBe(num);
                    //expect get email to return email
                    expect(test.getEmail()).toBe(testMail);

                    //expect get role to return role
                    expect(test.getRole()).toBe(role)

                    
                    });
    
    });
});