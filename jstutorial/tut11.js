// function is a blok of code which is designed to perform a particular task
// repeadetely without using the multiple lines of code .
// after declare a function we must define it in below like()

let name = "amit" ;


let myGreet = function(name, thanks= "Default value"){
    console.log(`Happy birthday ${name}, ${thanks}`);
    return 5;
};

let val =myGreet(name, "thanks a lot");
console.log(val);

// using functions in object 

let myObj = {
    name: "Ameet Shroff",
    hobby: function(){
        return "Coding"
    }
}

console.log(myObj.name, myObj.hobby());

let arr = ["apple", "pine", "cherry"];

arr.forEach(function(array, element, index){
    console.log(array, element, index);
})