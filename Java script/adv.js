

/*

let heading= document.getElementById("A");
console.log(heading);
heading.innerText="browser object model"----------------> it will add the cotainer inside text
heading.style.backgroundColor="blue";---------> it will add the  backgroud color of tag 
heading.style.color="white";

let i = document.getElementById("s");
i.innerHTML="<h1> inner text</h1>";//--------->its will add the html tag inside the js
i.innerText="<h1> inner text</h1>";//--------->its will add the text into webbrower
i.innerHTML="<ol><li>html</li> <li>css</li> <li>js</li></ol>";





let div = document.getElementsByClassName("A"); //--> Take the elements from html class its produce html collection
console.log(div);


let check = Array.isArray(div);//---> this function check the elements is arrray or not produce boolean result
console.log(check);

let pure = Array.from(div);// -->Array.from is impure array converted to pure array

let checkpure = Array.isArray(pure);
console.log(checkpure); //--> this funnction checking

pure.forEach((Element) =>{
    Element.style.background="red"; // foreach is used to iterator the html collectio
});

let a = document.getElementsByClassName("A"); return type is html collection

Array.from(a).forEach((Element) =>{
    Element.style.background="red"; // it will not support any array methods 
})

let s = document.querySelectorAll(".A"); /// this will support only foreach method of arrys return type is node list

s.forEach((Element) =>{
    Element.style.background="red";
})

----------------------------------onclick----------------------------------------

function grid()
{
    let a= document.querySelector("h1");
    a.style.backgroundColor='red';
}

*/


let bts = document.querySelectorAll("button");
let para = document.querySelector("p");
let b= document.querySelector("section");


bts.forEach((bu) => {
    
    bu.addEventListener("click",()=>{
            b.style.backgroundColor= bu.innerText
    })
    bu.addEventListener("mouseover",()=>{
        para.innerText=`click the button to get $ {bu.innerText} colour`
        b.style.border= `2px solid ${bu.innerText}`
        para.style.color= `${bu.innerText}`       
    })
    bu.addEventListener("mouseout",()=>{
        para.innerText=`Change the background colur`
        b.style.border= `2px solid ${bu.innerText}`
        para.style.color= `white`       
    })
});