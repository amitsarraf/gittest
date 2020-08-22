var student = function(){
    this.name = "ameet";
    this.age = 20;
    this.email = "sam12345";
}

student.prototype= {
    address:"new delhi",
    getName: function(){
        return this.name
    }
}


var saktiman = new student;
console.log(saktiman.getName());