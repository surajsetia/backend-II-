
  let box=document.querySelector("#colorBox");
  let genbtn=document.querySelector("#generateButton");
  let colors=["red","green","blue","yellow","orange","purple","grey","pink","white","black"];
  let intervalID=null;

    function randomcolor() {
        let index = Math.floor(Math.random() *10);
        let color = colors[index];
        return color;
    } 
    /* genbtn.addEventListener("click",function(){
        let color = randomcolor();
        box.style.backgroundColor = color;
    });*/ 

    function changeColor() {
        let color = randomcolor();
        box.style.backgroundColor = color;
    }
    
    genbtn.addEventListener("click", function() {
        intervalID = setInterval(changeColor, 500);
        box.style.backgroundColor = randomcolor();
    });

    stopbtn.addEventListener("click", function() {
       if (intervalID) {
           clearInterval(intervalID);
       }
    });
