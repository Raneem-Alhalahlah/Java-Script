
//Quastion #A
document.write("Quastion #A" +'<br>') ; 

let x=250;
let y=x * (2.5/100);
document.write(y + '<br>' + '<br>' + '<br>');


document.write("Quastion #1" +'<br>');
//Quastion #1
// [ 1,7  9  45, ] 
// soluation
const A=[1,7,9,4,5]//Place a comma between the elements
let arrayString = JSON.stringify(A);
document.write(arrayString +'<br>' );

// ["Str" "alex","moh"
// soluation
const B=["Str", "alex","moh"];//Place a comma after the second element and close the end of the parenthesis
let arrayStringG = JSON.stringify(B);
document.write(arrayStringG +'<br>');

// 'the','fox' 'over' lazy, 'dog',  ]
// soluation
const C=['the','fox','over', 'lazy', 'dog'  ]//Place a comma between all the elements, and place the word “Lazy” between the quota and close the parenthesis at the beginning
let arrayStringGG = JSON.stringify(C);
document.write(arrayStringGG +'<br>' + '<br>' + '<br>');

document.write("Quastion #2"+'<br>');
//Quastion #2
var fruits=["Tomato","Banana","Watermelon"]
let element = 'Banana';
let index =fruits.indexOf(element);
if (index !== -1) {
    document.write('The index of ' + element + ' is: ' + index +'<br>');}

let elemen = 'Tomato';
let indexx =fruits.indexOf(elemen);
if (indexx !== -1) {
   document.write('The index of ' + elemen + ' is: ' + indexx +'<br>' + '<br>' + '<br>');}


document.write("Quastion #3"+'<br>');
//Quastion #3
 const Food=["shawerma","mansaf"];
 let food = JSON.stringify(Food);
 document.write(food+'<br>');

 const Sport=["soccer","tennis ball","Bowling"];
 let  sport = JSON.stringify(Sport);
 document.write(sport+'<br>');

 const Movie=["horror","Mystery"];
 let movie = JSON.stringify(Movie);
 document.write(movie+'<br>' + '<br>' + '<br>');



document.write("Quastion #4"+'<br>');
 //Quastion #4
 const A1=[1,4,5];
 document.write('First element in A1: ' + A1[0] + '<br>');

 const A2=["t","u","g","x"];
 document.write('First element in A2: ' + A2[0] + '<br>' + '<br>' + '<br>');



 document.write("Quastion #5" + '<br>');
 //Quastion #5
 const B1= [1,4,5];
 document.write('Last element in B1: ' +B1[B1.length - 1]  + '<br>');

 const B2= ["t","u","g","x"];
 document.write('Last element in B2: ' +B2[B2.length - 1]  + '<br>'+ '<br>'+ '<br>');



 //Quastion #6
 var array = [0,5,7,9];
 array.push(10);
 array.shift();
 array.shift();
 array.shift();
 array.unshift(1 , 3 , 4 , 6 ,8);
console.log(array);

//Quastion #7
var array2 = [];
array2.unshift(5,9,-7,3.5);
console.log(array2);

//Quastion #7
const array3 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
array3.sort();
document.write(array3);