
var lists = ["addition","multiplication"];
export function hello() {
  console.log("hi");
  console.log(lists);
}


 var leftSide = document.querySelector('.left-side');

export function printList(){
    var textPrint= "hi";
    console.log(textPrint);
    var html= "<p>" + textPrint + "</p>";
    console.log(html);
    leftSide.innerHTML = textPrint;
     var html = "<ul>"
    lists.forEach(list => {
      html += "<li>" + list + "</li>" ;
      
    });
    html += "</ul>";
    leftSide.innerHTML = html;
}