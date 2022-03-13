alert("welcome to my page") //it will display in pop-up box


/*  primitative data types  */

var a = 10; //number//
//here the data type = number   value = 10  variable name = a
var b = "vani"; //string//
// data type = string    value = vani    variable name = b
var c; //undefined
//data type = undefined  value = undefined    variable name = c
var d = null; //null//
//data type = object   value = null    variable name = d
var e = true; //boolean//
//data type =boolean   value = true/false   variable name = e

/*
console.log() is a inbulit function that will console the log values
*/
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


//  type of is used for to know which data type it is
// data type is number
console.log(typeof a, a);
console.log(typeof a, b);
console.log(typeof a, c);
console.log(typeof a, d);
console.log(typeof a, e);
// data type is string
console.log(typeof b, a);
console.log(typeof b, b);
console.log(typeof b, c);
console.log(typeof b, d);
console.log(typeof b, e);
// data type is undefined
console.log(typeof c, a);
console.log(typeof c, b);
console.log(typeof c, c);
console.log(typeof c, d);
console.log(typeof c, e);
// data type is null
console.log(typeof d, a);
console.log(typeof d, b);
console.log(typeof d, c);
console.log(typeof d, d);
console.log(typeof d, e);
// data type is boolean
console.log(typeof e, a);
console.log(typeof e, b);
console.log(typeof e, c);
console.log(typeof e, d);
console.log(typeof e, e);

// = is assignment operator  assign a value to a variable
// == is equality opearator

// conditional statements  are used for different actions based on different conditions (if  else  elseif)  
//if( condition){}
//  IF statement used  to specify a block of code to be executed if a condition is true. here condition may be whatever
var car = 18;
var selfeligibletodrive = true;
if (car=18) {
    console.log('Eligible for self-driving');
}
//ELSE is used for to specify a block of code to be executed if a condition is false then else part will be executed
if(car=0){
    console.log('Eligible for self-driving');
}else{
    console.log(' Not Eligible for self-driving');
}
//ELSE IF is used to specify a new condition if the first condition is false.
if(car=0){
    console.log('Not Eligible for self-driving');
 } else if(car=18){
        console.log('Eligible for self-driving make a safe drive');
 }else {
    console.log(' not Eligible for self-driving');
 }

 // operators
 //1.Arithmetic Operator - { + , - , * , % , ++ , -- , / , ** } 
  var v = 20;
  var a = 10;
  var n = v+a;
  var i = ++n;
  var x = --i;
 console.log(v+a+n+i);
 console.log(x, typeof i);
 console.log(v%a);
 console.log(v++);
 console.log(v--);
 console.log(x/a);
 console.log(v*a);
var p ='hi' ;
var z ='hello' ;
var s ='namaskar';
console.log(p+z);
console.log(p+s);
console.log(z+s  );
console.log (typeof z)
  //2.comparision operator - { < , > , <= , >= , }
 var c = 15;
var d = 20;
var sum = c+d;
var f = 'apple';
var g = 'pineapple';
console.log(g, typeof g);
console.log( sum,typeof sum );
console.log( 'c' == 'd');
console.log( 'c' > 'd' );  
console.log('f'>'g');
console.log( 'c' >= 'd' );  
console.log( 'd' > 'c' ); 
console.log(f, typeof f); 
console.log('c'==='d');

//3.conditional operator or ternary operator
//conditional ?
var year=2022;
( year)?console.log(' this year only'):console.log('not this year ');
(0000)?console.log(' this year only'):console.log('not this yeary');

//4.logical operator
//  OR||  AND&&  NOT??
// true && true = true        true||true=true
// true && false = false      true||false=true
// false && true = false      false||true=true
// false && false = false     false||false=false

          
