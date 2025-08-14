/*1. create a new element using createElement function
 2.insert required data in that Element using .innerHTML or .innerText
 3. insert a new element in parent conatiner using appendchild or append
 */
let todo={
    id:23435,
    title:"Study at 9 pm",
}
let todocontainer=document.querySelector(".todocontainer");
 function addTodo(todo){
    let li=document.createElement("li");
    li.innerHTML=`
        <div>
            <input type="checkbox" name="">
            <h1>${todo.title}</h1>
            <div>
                <button>❌</button>
                <button>🖋</button>
            </div>
        </div>
    `;
   todoconatiner.appendChild(li);
 }