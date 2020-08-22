console.log("Its Working");
// class is basically a blurprint or tenplate;
// constructor is used jab b koii class me object bann raha haii aur jab obj banaye haii tab run hota hai

class Employee{
    constructor(name, experience, division ){
        this.givenName = name,
        this.givenExperience= experience,
        this.givenDivision = division
    }
    slogan(){
        return `i am ${this.givenName} and it helps me a alot` 
    }

    // hm isme bina object banaya hi class ko use karsakte hai by using static like

    static add(a, b){
        return a+b
    }
    
}
// harry = new Employee("amit", 1, "je")
// console.log(harry.slogan())

console.log(Employee.add(4,5))

// inherit means ek template se dusri template banana aur use karenge extends keyword like as below 

class programmer extends Employee{
    constructor(name, experience, division, language, github ){
        super(name, experience, division); // super means pexle class ka constructor
        this.language = language,
        this.github = github
    }
    favourateLanguage(){
        if (this.language== "python") {
            return "python"
            
        } else {
            return "javaScript"
        }
    }
}

rohan = new programmer("rohan", 3, "hr","go","rohan4230")
console.log(rohan)
console.log(rohan.favourateLanguage())
