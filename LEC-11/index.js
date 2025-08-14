// accessing dom element
// 1 using id
// 2 using class
// 3 using tag name
// 4 using query selector / query selector all

/* let el1= document.getElementById("heading");
console.log(el1);

let el2= document.getElementsByClassName("item");
console.log(el2[0]);

let el3= document.getElementsByTagName("li");
console.log(el3[0]); */


// let el4= document.querySelector("p");

let el5= document.querySelector(".item");

// let el6= document.querySelectorAll("li");

// console.log(el4);
// console.log(el5);
// console.log(el6);


// properties

/*
inner text 
inner html 
text content
*/

/*let ul= document.querySelector("#container");

let data=el4.innerText;
console.log(data);

el4.innerText="Changed using js"

let data2=ul.innerHTML;
console.log(data2);

let data3=ul.textContent;
console.log(data3);

let data4=ul.textContent;
console.log(data4);


ul.innerHTML= `<li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>`
*/

/*
getAttribute
setAttribute
classList
*/

/*console.dir(el5);

console.dir(el5.getAttribute("id"));

console.log(el5.getAttribute("class"));
el5.setAttribute("id", "js");
console.log(el5.getAttribute("id"));
*/
// el5.classList.add("delete");
// console.log(el5.classList.contains("delete"));
// el5.classList.remove("delete");
// console.log(el5.classList.contains("delete"));

// Element.addEventListener("event name", function() {
//     console.log("Element clicked");
// });


let signupbtn = document.querySelector(".SignUp")
let form = document.querySelector("#signup")
signupbtn.addEventListener("click", function() {
    form.classList.toggle("hide")
})