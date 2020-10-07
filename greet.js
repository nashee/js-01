var greet = function (){
    
    console.log('hello');
};



var mathList = ['addition', 'multiplication'];
export function showList(){
    var html = "<ul>";
    mathList.forEach(function(list){
     html += "<li>" + list + "</li>";
    });
    html += "</ul>";

var rightSide = document.querySelector(".right-side");

rightSide.innerHTML = html;
}


var  test =  "test";

 function getTest(){
     console.log("hi");
 }

// getTest();
 
 


