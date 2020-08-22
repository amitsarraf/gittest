let x= 4;
let y=5;
//z= x+y

// exploring the Math object
z=Math
z= Math.PI
z= Math.round(5.6) //round means here like a rounding in decimal numbers
z= Math.ceil(5.4) // always gives the top value if there is 5.1 then also it gives 6
z= Math.floor(5.3) //here floor gives the smallest value after decimal in case of -5 let see
z= Math.floor(-5.3) //here it gives -6 because -6 is lesser than -5
z= Math.abs(-5.3) // abs means absolute value if there is - then it converts in + like 5.3 if there is plus then       it  will remain same as plus

z= Math.sqrt(9) // gives the square root
z = Math.pow(2, 3) // pow means power here it is 2 to the power 3
z= Math.min(2, 4, 6, 8)// gives the minimum value
z= Math.max(2, 4, 6, 8)// gives the maximum value
z= Math.random() // gives random value in decimal
z= 100*Math.random() // here 100 means the value comes umder 100
z = 50 + (100-50)*Math.random() // gives the value betweeen 50 to 100
z = Math.ceil(50 + (100-50)*Math.random()) // gives the value betweeen 50 to 100 without decimal

console.log(z);