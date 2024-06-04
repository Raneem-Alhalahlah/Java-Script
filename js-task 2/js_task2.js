{//السؤال الاول في الملف الاول
    console.log("Quastion 1 ")
    let x=5;
    let y=6;
    if (y>x){
    console.log(y);
    }
}

// السؤال الثاني بالملف الاول
//boxحتظهر النتيجة فقط بال 
{
     let x=5;
     let y=-2;
     let z=3;
    product=x*y*z;

    if(product>0){
    window.alert("The sign is +");
     }
     else{
     window.alert("The sign is -");
   }
}

{//السؤال الثالث بالملف الاول- ترتيب الارقام حسب النوع 
     let x=8;
     let y=-4;
     let z=3;
     let sortNumber;
 if(x>=y&& x>=z)
 if(y>=z) {
      sortNumber = x + ", " + y + ", " + z;}
       else{ sortNumber = x+ ", " + z+ ", " + y;}

    else if (y>=x&& y>=z)
         if(x>=z) {
            sortNumber = y + ", " + x + ", " + z;}
        else{ sortNumber = y + ", " + z+ ", " + x;}


     else if (z>=x&& z>=y)
      if(x>=y) {
           sortNumber = z + ", " + x + ", " + y;}
      else{ sortNumber = z + ", " + y+ ", " + x;}
     window.alert(sortNumber)
}


{//السؤال الرابع في الملف الاول- طباعة اكبر عدد من مجموعة اعداد
     let x=8;
     let y=-4;
    let z=3;
     let r=-5;
     let m=9;
     let largest = x;

     if (y > largest) {
      largest = y; }
    
     if (z > largest) {
        largest = z;}
    
    if (r > largest) {
        largest = r;}
    
    if (m > largest) {
       largest = m; }

    window.alert( largest);
}



{//السؤال الخامس في الملف الاول- مقارنة متغييرين والطباعة حسب النتيجة
     let x=8;
     let y=-4; 
     if(x>y){window.alert("Hello World")}
     else{window.alert("Good bay")}
}



{// السؤال الاول بالملف الثاني
    console.log("File#2 Quastion#1")
    let x=90;
    if(x<50){console.log("Fail")}
    else if(x>=50 && x<=59){console.log("E")}
    else if(x>=60 && x<=69){console.log("D")}
    else if(x>=70 && x<=79){console.log("C")}
    else if(x>=80 && x<=89){console.log("B")}
    else if (x>=90 && x<=100){console.log("A \n ")}
}



{//السؤال الاول من الملف  الثالث بده نطبع من رقم واحد ل عشرة 
    console.log("File#3 Quastion#1");
    for( let x=1; x<=10 ; x++)
    {console.log(x);}
}




{//السؤال الثاني في الملف الثالث
    console.log("File#3 Quastion#2");
    var arr = [13,23,12,45,22,48,66,100]
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    console.log(arr[i]);}
    }
}



{ //السؤال الثالث في الملف الثالث 
    console.log("File#3 Quastion#3");
    let text="";
    for( let x=1; x<=8 ; x++){
    text += x;
    console.log(text);}
}


{//السؤال الرابع في الملف الثالث
    console.log("File#3 Quastion#4");
    let x = "don’t know why";
    if (x.includes('y')) {
        console.log("yes \n");
    } else {
        console.log("no");}
}



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

