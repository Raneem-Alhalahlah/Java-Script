//السؤال الاول الملف الرابع
console.log("File#4 Quastion#1");

function tellFortune(jobTitle, geoLocation, partner, numKids) {
var future = `You will be a  ${jobTitle}  in  ${geoLocation}  and married to 
${partner}  with  ${numKids} kids`;
   console.log(future);  
}
tellFortune("engineer","Amman","mohammed",2)



//السؤال الثاني الملف الرابع
console.log("File#4 Quastion#2");
function calculateDogAge(puppy_age){
    dog_age = puppy_age * 7
    console.log(`Your doggie is ${dog_age} years old in dog years!`);  
}
calculateDogAge(2);


//السؤال الثالث الملف الرابع
console.log("File#4 Quastion#3");
function calculateSupply(age, amount_Per_Day) {
        let maxAge = 100;  
        let remainingYears = maxAge - age;
        let totalAmount = remainingYears * 365 * amount_Per_Day;
        console.log(`You will need ${totalAmount} cups of tea to last you until the ripe old age of ${maxAge}.`);
    }
    calculateSupply(30, 1);


//السؤال الرابع الملف الرابع
console.log("File#4 Quastion#4");
function greet(name) {
        return "Hello " + name;
    }
    console.log(greet("Raneem"));




//السؤال الخامس الملف الرابع
console.log("File#4 Quastion#5");
function double(cat) {
        return 2 * cat;//لازم وضع نفس المتغير داخل الفنكشن   
      }
      console.log( double(2));


    function double(number) {
        return 2 * number;
      }
      console.log(double(3));


//السؤال السادس الملف الرابع
console.log("File#4 Quastion#6");
function double1(x) {//I wrote the word function correctly and closed the x bracket.
        return 2 * x;
      }
      console.log(double1(5));


      function double2(x) {//Put a space between the word function and the name of the function and close the parenthesis at x.
        return 2 * x;
      }
      console.log(double2(4));


      function double3(x) {//Place the variable after the function name
        return 2 * x;
      }
      console.log(double3(3));


//السؤال السابع الملف الرابع
console.log("File#4 Quastion#7");
function cube(number) {
        return number * number * number;
      }
      console.log(cube(3));


//السؤال الثامن الملف الرابع
console.log("File#4 Quastion#8");
function multiply(X,Y) {
        return X * Y;
      }
      console.log(multiply(9, 9));

//السؤال التاسع الملف الرابع
console.log("File#4 Quastion#9");
function canIGetADrivingLicense(age) {
        if (age >= 20) {
          return "yes you can";
        } else {
          let TheWaityears = 20 - age;
          return `please come back after ${TheWaityears} years to get one`;
        }
      }
      console.log(canIGetADrivingLicense(21)); 
      console.log(canIGetADrivingLicense(18));


//السؤال العاشر الملف الرابع
console.log("File#4 Quastion#10");
function sameLength(string1, string2) {
        if (string1.length === string2.length) {
          return true;
        } else {
          return false;
        }
    }
      console.log(sameLength("Bus", "car"));
      console.log(sameLength("Raneem", "Jana"));

//السؤال 11 الملف الرابع
console.log("File#4 Quastion#11"); 
function largerNumber(number1, number2) {
        if (number1 > number2) {
          return number1;
        } else {
          return number2;
        }
      }
      console.log(largerNumber(2, 8));


//السؤال 12 الملف الرابع
console.log("File#4 Quastion#12");
function smallerNumber(number1, number2, number3) {
    if (number1 <= number2 && number1 <= number3) {
      return number1;
    } else if (number2 <= number1 && number2 <= number3) {
      return number2;
    } else {
      return number3;
    }
}
  console.log(smallerNumber(9,18, 27));


//السؤال 13 الملف الرابع
console.log("File#4 Quastion#13");
function shorterString(str1, str2, str3, str4, str5) {
    let short = str1;
    
    if (str2.length < short.length) {
      short= str2;
    }
    if (str3.length < short.length) {
      short = str3;
    }
    if (str4.length < short.length) {
      short = str4;
    }
    if (str5.length < short.length) {
      short = str5;
    }
    return short;
  }
  console.log(shorterString("raneem", "school", "car", "Hi", "study"));


//السؤال 14 الملف الرابع
console.log("File#4 Quastion#14");
function longerString(str1, str2, str3, str4) {
    let long = str1;
    
    if (str2.length > long.length) {
      long = str2;
    }
    if (str3.length > long.length) {
      long = str3;
    }
    if (str4.length > long.length) {
      long = str4;
    }
    return long;
  }
  console.log(longerString("air", "Raneem", "car", "orang"));


//السؤال15 الملف الرابع
console.log("File#4 Quastion#15");
function isEven(number) {
    return number % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(9));


//السؤال 16 الملف الرابع
console.log("File#4 Quastion#16");
function isOdd(number) {
    return number % 2 !== 0;
  }
  console.log(isOdd(9)); 
  console.log(isOdd(16));


//السؤال 17 الملف الرابع
console.log("File#4 Quastion#17");
function positive(number) {
    if (number < 0) {
      return -number;
    } else {
      return number;
    }
  }
  console.log(positive(-9));
  console.log(positive(8));


//السؤال 18 الملف الرابع
console.log("File#4 Quastion#18"); 
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  console.log(fullName("Raneem", "halahlah"));


//السؤال 19 الملف الرابع
console.log("File#4 Quastion#19"); 
function average(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
  }
  console.log(average(9, 2, 6, 4,12))


//السؤال 20 الملف الرابع
console.log("File#4 Quastion#20");
function randomNumber() {
    return Math.random();
  }
  console.log(randomNumber());


//السؤال 21 الملف الرابع
console.log("File#4 Quastion#21");
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(randomBetweenNumbers(3, 9));


//السؤال 22 الملف الرابع
console.log("File#4 Quastion#22");
function scoreInUniversity(score) {
    if (score >= 95 && score <= 100) {
      return "A";
    } else if (score >= 85 && score <= 94) {
      return "B";
    } else if (score >= 70 && score <= 84) {
      return "C";
    } else if (score >= 50 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 49) {
      return "F";
    } 
  }
  console.log(scoreInUniversity(74));


//السؤال 23 الملف الرابع
console.log("File#4 Quastion#23");
const counte = (() => {
    let count = 0;
    
    return () => {
      count++;
      return count;
    };
  })();
  console.log(counte()); 
  console.log(counte()); 
  


//السؤال 24 الملف الرابع
console.log("File#4 Quastion#24");
let count = 0;
function counter() {
  return ++count;
}

function resetCounter() {
  const previousCount = count;
  count = 0;
  return `${previousCount} and the counter reset now`;
}
console.log(counter()); 
console.log(counter());
console.log(counter()); 
console.log(resetCounter()); 
console.log(counter()); 
console.log(counter()); 