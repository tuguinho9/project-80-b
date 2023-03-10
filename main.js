menuListArray = ["Pizza Vegetariana", "Pizza de Calabresa", "Pizza Marguerita"];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata + menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata + imgtags + menuListArray[i] + '<br>'
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addtop(){
var item= document.getElementById("addItem").value;
menuListArray.push();
addItem();
}