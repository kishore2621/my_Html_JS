// let theme = document.querySelector("button")
// let section =document.querySelector("section")
// let form = document.querySelector("form")
// let input = document.querySelector("input")
// let label = document.querySelectorAll("label")


// theme.addEventListener("click",()=>{

//     if(theme.innerText=="Light")
//         {
//             theme.innerText="Dark"
//             section.style.background="white"
//             section.style.color="black"
//             form.style.color = "black"
//             form.style.border ="2px solid black"
//             form.style.boxShadow = "0px 0px 20px black" 
        
//         }
//         else{
//             theme.innerText="Light"
//             section.style.background="black"
//             section.style.color="white"
//             form.style.color = "white"
//             form.style.border ="2px solid white"
//             form.style.boxShadow = "0px 0px 10px white" 
      
//         }

//         function fun() {
//             Event.prevent
            
//         }
// })

//---------------------------------------------------------------------------------------------------------
// let section = document.createElement("section")
// let form = document.createElement("form");
// let label1 = document.createElement("label")
// let input1 = document.createElement("input")
// let label2 = document.createElement("label")
// let input2 = document.createElement("input")
// let button = document.createElement("button")
// let placeholder=document.createAttribute("placeholder")

// label1.innerText="Username";
// label2.innerText="password";
// button.innerText="Submit";
// form.appendChild(label1);
// form.appendChild(input1);
// form.appendChild(label2);
// form.appendChild(input2);
// form.appendChild(button);
// section.appendChild(form);
// document.body.append(section);
// section.style.height="100vh";
// section.style.width="100vw";
// section.style.display="flex";
// section.style.justifyContent="center";
// section.style.alignItems="center";
// section.style.flexDirection="column";
// form.style.height="350px";
// form.style.width="350px";
// form.style.display="flex";
// form.style.alignItems="center";
// form.style.justifyContent="center";
// form.style.flexDirection="column";
// input1.style.width="50%"
// input1.placeholder="username";
// input2.placeholder="password";
// input2.style.width="50%"
// button.style.width="30%"
// button.style.marginTop="30px"
// button.style.alignItems="cennter";
// form.style.border=" 1px solid black"

//-----------------------------------------------------------------------------------------------------------//

let table =document.createElement("table");
let tr1 = document.createElement("tr")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
let th4 = document.createElement("th")
let th5 = document.createElement("th")
let th6 = document.createElement("th")
let th7 = document.createElement("th")
let th8 = document.createElement("th")
let th9 = document.createElement("th")
let th1 = document.createElement("th")
let b= document.createElement("br");


//--------------adding text-----------//
th1.innerText = "DAY  PERIOD";


th2.innerText=" I \n 9:30 - 10:20"
th3.innerText=" II \n 10:20 - 11:10"
th4.innerText=" III \n 11:10 - 12:00"
th5.innerText=" IV \n 12:00 - 12:40"
th6.innerText=" V \n 12:40 - 1:30"
th7.innerText="VI \n 1:30 - 3:10"
th8.innerText=" VII \n 9:30 - 10:20"
th9.innerText=" VIII \n 9:30 - 10:20"

//-------------// apped child-----------//---------//

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);
tr1.appendChild(th6);
tr1.appendChild(th7);
tr1.appendChild(th8);
tr1.appendChild(th9);




let tr2= document.createElement("tr");
let tr3 = document.createElement("tr")
let tr4= document.createElement("tr")
let tr5= document.createElement("tr")
let tr6= document.createElement("tr")
let tr7= document.createElement("tr")



table.style.border="1px solid black";
table.appendChild(tr1);

document.body.append(table);































