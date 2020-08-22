//callback is basically ek function k andar function hota haii ye synchronous b hsaktka haii aur asynchronous bhi

//pretend that this response is coming from the server
const students=[
    {name:"amit", subject:"javaScript"},
    {name:"rajan", subject:"django"},
]

function enrollStudents(student){
    setTimeout(() => {
        students.push(student)
        console.log("student has been enrolled")
    }, 1000);// based on timeouts jiska jaldi hoga woo pehle print hoga
}
function getStudents(){
    setTimeout(() => {
        console.log("students fetched")
     }, 3000);
}

let newStudent = {name:"sunny", subject:"python"}
enrollStudents(newStudent)
getStudents()