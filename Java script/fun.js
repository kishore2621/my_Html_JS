
// console.log("hello ")
// let num1 = prompt("Enter number1");
// let num2 = prompt("Enter number2");

// Convert input strings to numbers using the custom function
// num1 = numberOf(num1);
// num2 = numberOf(num2);
// console.log(`The add number ${num1} and ${num2} is ${   num1 + num2}
// The sub number ${num1} and ${num2} is ${num1 - num2}
// The mul number ${num1} and ${num2} is ${num1 * num2}
// The div number ${num1} and ${num2} is ${num1 / num2}`);

/* 

                create  the array  and add elements and remove elements


 let arr =[10,20,30]
 arr.push(40)                   ---->Add last element to an array
 arr.unshift(10)                ---->Add first element to an array
 arr.shift()                    ---->Remove first element to an array
 arr.pop()                      ---->Remove last element to an array
 console.log(arr)
*/

/* 

                            ---->Array inbuild methods

let x =[10,20,30,40,50]
x.splice(1,1,'hi')
console.log(x)
let y = x.slice(1,5)
console.log(y)
let a = x.indexOf(30)
console.log(a)
let s = x.includes(10)
console.log(s)
*/

/* merging the array 

let x = ['a','c','d']
let y = [10,20,30]
let s= ['hi','hello']

let z = [x,y]                                       ---> Nested array
console.log(z)
console.log(z[1][2]);                           ---->Acessing the nested array

*/


/* reverse the string using split reverse and joins


let c= x.concat(y,s)                ---> concat
console.log(c);


//reverse
let a = "adc"


let sp = a.split([])                            ---->splict
console.log(sp);


let res = sp.reverse()                      ---->Reverse
console.log(res);


let joi = res.join("")                  --->Join the values 
console.log(joi);

*/

/* creating the objec
let car = {
    name: "nano",
     brand: "tata"
}
console.log(car);
console.log(car.name);


car.brand="tata motars"                     ---->update the value and add the key and values paris
car.price="2lak"
console.log(car);


delete car.price                            ---->delete the key and value pairs
console.log(car);
*/



/* let person={
            name:"siva",
            age:23,
            isavalable:true,
            skills:["html","css","js"],
            frieds:[{name:"sumit"},{name:"rahul"},{name:"kishore"}]
}
console.log(person.skills);
console.log(person.frieds);
console.log(person.frieds[1]);
console.log(person.frieds[1].name);

person.skills.splice(1,2,"java","sql")
console.log(person.skills);                           ---->print that object states

let employee =[
{ name:"siva",id:101,avaliable:true,skill:["html","css"],address:{city:"baglore",area:"jp-nagar"}},
{ name:"kishore",id:102,avaliable:true,skill:["java","css"],address:{city:"baglore",area:"btm"}},
{ name:"rahul",id:103,avaliable:true,skill:["js","sql"],address:{city:"tamilnadu",area:"trichy"}},
{ name:"sumit",id:104,avaliable:true,skill:["mago-dp","css"],address:{city:"kerala",area:"jnagar"}},
{ name:"krish",id:105,avaliable:true,skill:["java","sql"],address:{city:"up",area:"banaras"}},
{ name:"babu",id:105,avaliable:true,skill:["spring","jdbc"],address:{city:"labak",area:""}},
{ name:"harish",id:106,avaliable:true,skill:["hibernate","html"],address:{city:"thanjavur",area:"jp-nagar"}},
{ name:"praga",id:107,avaliable:true,skill:["python","css"],address:{city:"baglore",area:"jp-nagar"}},
{ name:"kiruba",id:108,avaliable:true,skill:["flutter",".net"],address:{city:"baglore",area:"jp-nagar"}},
{ name:"mani",id:109,avaliable:true,skill:["swift","c++"],address:{city:"baglore",area:"jp-nagar"}}

]
 console.log(employee);                             --> call that object
 
 
 */

/*
//Normal funcation
function x()
{
    console.log("hello");
}
x();                                             ---> call that funcation


Annomous function
function()
{
    console.log("annomous");
}


---------------------function with expression---------------------------
let a = function ()
{
    console.log("fwe");
}
console.log(a);
a();                                             -----> calling annomous funcation


function a(a,b)                                         ---->Parameters of function
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}

        a(2,3);                                              ----> Arguments of function

 
function b(a,b)
{
    console.log(a+b);
}
        b();                                            ---->this function output is Nan

function c(a,b)
{
 console.log(a);
 console.log(b);
}
    c();                                        ----> this function output is undefined

    


    ----------------------------Function hosting-------------------


   a();                          ----> this one call the method in excuation phase act as function hosting
   function a()                  ----> method declaration it wil store the memory in variable phase 
   {
    console.log("hello");
   }
   a();

   
            ------------------global variable---------------------------


   let a = "hi";                                ------>global variable
   function x() {
    let s = 10;
    a = 30;
    console.log(a);
   }
   console.log(a);
   function y() {
    a=100
    console.log(a);
    
   }
   console.log(y);
   y()
   x()
   console.log(a);

  

                    ------------------Local variable---------------------------


  let a= 10
  function x() {
    let a= 20                       -----> Local variable
    console.log(a);
     a= 30
  }
  function y() {
     a= "hi"
     console.log(a);
  }
  x()
  y()
  console.log(a);
  
------------------------------test----------------------------
// mobile accessories
 let  mobileaccessories =["chargers","earbuds", "headphones",'backcase']
 // add new  accessories
 mobileaccessories.push("smartwatches");
 //sold backcase
 mobileaccessories.pop();
 console.log(mobileaccessories);

 //online platform
 let moileshop =["iphone","samsung","realme","oppo"]
 // remove the cart
 moileshop.shift();
    //add accessories to cart
    let cart = moileshop.unshift("mi");
    
    console.log(cart);
    console.log(moileshop);
    

// moible shop offers
let  accessories =["chargers","earbuds", "headphones",'backcase']

function ass (a,s) 
{
    return accessories.slice(a,s)
}
let s = ass(1,3);
console.log(s);

// manager
accessories.splice(0,1,"c-typecharager");
console.log(accessories);

function check(a) 
{
    if (accessories.includes(a)) {
        return  "its avalable";
    }
    else
    {
        return "not avalable";
    }
  
}
let c = check("iphone");
console.log(c);


----------------------------return type function--------------
let a = 10
function x() {
    a = 20
    console.log(a);
    return a+30;                    ---------> return statement
    console.log("hi");                              -------------> not an error after return all of them terminate
}
let s= x()
console.log(s);
console.log(a);
console.log("stop");




----------------------------function hosting-----------------------
a()
 let a =function () -------------> not possiale in fucation with expression
{
    console.log("hi");

}
a()



                -----------------------nested function-------------------
console.log("start");
function x() {
    let a =10
    function y() {
        console.log(a);
        
    }
    return y;
}
    let z=x();
    console.log(z);
    z();
    let m=z();
    console.log(m);

    
                ---------IIFE-(immediate invoke function expression----------
    


(
    function () {
        console.log("hello");
    }
)();
(
    function () {
        console.log("hi");
    }
)();




function x() {
    console.log("hello");
    
}
    x()
    console.log(x());



                -------------------------spread operator--------------------(...)
let a =[10,20,30]
let s=[40,50,60]

let mer=[...a,...s]
console.log(mer);

let person ={
    name:"rohit",
    age :21,
    place:"bangalore"
}
let employee={
    empid:101,
    ...person
}
console.log(employee);



                ---------------------Arrow function---------------------------

let x =  _=>"hello";
console.log(x());

let y= ()=> "bye";
console.log(y());

let z= (a,b)=> a+b;
console.log(z(4,5));



                ----------Higher order function and call back function-------------------


function x (a,b, task)
{
    let y =task(a,b);
    console.log(y);
}
x(4,4, (a,b)=>a+b) ;




function x()
{
    function y()
    {
        function z () 
        {
            console.log("hello");
        }
    }
    return y
}
console.log(x()()());

                        ---------------this keyword----------------

let person ={

    x  :function () {
        console.log(this);
        
    }
}
person.x();



            -------------------------constuctor function----------------------
function Car (name,color,brannd)
{
    this.carname=name;
    this.carcolour=color;
    this.carbrand=brannd;
}

let car1=new Car("car","black","tata");
console.log(car1);


            -----------------inbuild Object methods-----------------------
let person ={
    name:"Gowtham",
    age:46,
    skills:["fuck","fucker every day"]
}
let a=Object.keys(person)
console.log(a);
let b=Object.values(person)
console.log(b);
let c=Object.entries(person)
console.log(c);

  
 
                    -------------------------Loops-----------------------
let arr =["hi","hello","bye"]


                ---------for in----------------->
for(let a in arr)
{
console.log(a);
}

---------------------for of------------------->

for(let a of arr)
{
    console.log(a);
}

----------------------for each---------------->

arr.forEach(( element ,index)=> {
    console.log(element , index);
});



-----------------Difference between forEach and Map------------------------




let arr =[10,20,30,40]

let a=arr.forEach( (Element )=>{
    return Element;
});
console.log(a);------------> undefined


let arr =[10,20,30,40]
let b= arr.map((Element,y,z)=>{

    console.log(z);
    // return Element;--------> new array
});

console.log(b);




let arr = [10,20,-25,20,5];

let a =arr.filter((Element)=>{
    return Element<20;
});
console.log(a);


let arr1=[1,2,3,4,5]
let b= arr1.reduce((x,Element)=>{
    return x+Element;
},0);

console.log(b);



let book =[{
    name:"Html",price:800},
    {name:"css",price:600},
    {name:"js",price:900},
    {name:"java",price:500}
]



let a= book.filter((Element)=>{
    return Element.price<=800;
 })
 console.log(a);

let m =a.map((book)=>{
    let gst= book.price*30/100;
    book.price = book.price+gst
    return book;
})
console.log(m);
let final =m.reduce((acc,cv)=>{
    return acc+cv.price;
},0)
console.log(final);

        --------------------------call and apply function-----------------

let person ={
    name:"abi",
    age:20,
    compay:"google"

}

function x(a,b) {
    console.log(this);
    console.log(a,b);
    
}
x.call(person,10,20);

x.apply(person,[10,20]);


let person ={
    name:"abi",
    age:20,
    compay:"google"

}
function x(a,b) {
    console.log(this);
    console.log(a,b);
    
}

let y = x.bind(person);
y();
x();
y(10,20);


*/
