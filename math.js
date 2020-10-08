
var lists = ["addition","multiplication"];


 var leftSide = document.querySelector('.left-side');

export function printList(){
    
     var html = "<ul>"
    lists.forEach(list => {
      html += "<li class='menu-left'>" + list + "</li>" ;
      
    });
    html += "</ul>";
    leftSide.innerHTML = html;
}

// creating dynamic page for addition menu on the section part
// adding click event for additon menu
const menuLeft = document.getElementsByClassName("menu-left");
const sections = document.getElementById("sections");
export function showAdd(){
  menuLeft[0].addEventListener("click",function(){
    const addDiv = document.createElement("div");
    sections.appendChild(addDiv);
    addDiv.classList.add('add-div');
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-div";
     
    const inputOne = document.createElement("input");
     inputOne.type = "text";
     inputOne.className = "input-one";
     inputOne.label = "A: "
     addDiv.appendChild(inputOne);

  })
}


// for testing variables
export function hello() {
  //console.log(inputOne);
  //console.log(sections);  
}
