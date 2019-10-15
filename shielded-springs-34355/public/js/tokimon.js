

//var addButton = document.getElementById("addbutton");
var delButton = document.getElementById("delbutton");
var dispButton = document.getElementById("dispbutton");

// if(addButton){
//   addButton.addEventListener("click", addNew);
// }

// if(delButton){
//   delButton.addEventListener("click", delEntry);
// }
//
// if(dispButton){
//   dispButton.addEventListener("click", dispEntry);
// }

//textboxes for addNew
// var tokinameBox = document.getElementById("tmName");
// var weightBox = document.getElementsByName("tmWeight");
// var heightBox = document.getElementsByName("tmHeight");
// var flyValue = document.getElementById("flyVal");
// var fightValue = document.getElementById("fightVal");
// var fireValue = document.getElementById("fireVal");
// var waterValue = document.getElementById("waterVal");
// var elecValue = document.getElementById("elecVal");
// var iceValue = document.getElementById("iceVal");
// var trainerBox = document.getElementsByName("tmTrainer");

function errAlert() {
    alert("Fill in the boxes before you smash that submit button");
}

// add entry button
function addNew(){

  // couldn't add this cuz it messes with the tabs
  // if(name.value = "" || weight.value = "" || height.value = "" || trainer.value = ""){
  //   errAlert();
  // }

    //grab those values
    var creatureType = document.getElementById("cType");
    var alignType1 = document.getElementById("align1");
    var alignType2 = document.getElementById("align2");
    //grab more values
    var name = document.getElementById("tmName").value;
    var weight = document.getElementById("tmWeight").value;
    var height = document.getElementById("tmHeight").value;
    var fly = document.getElementById("flyVal").value;
    var fight = document.getElementById("fightVal").value;
    var fire = document.getElementById("fireVal").value;
    var water = document.getElementById("waterVal").value;
    var elec = document.getElementById("elecVal").value;
    var ice = document.getElementById("iceVal").value;
    var trainer = document.getElementById("tmTrainer").value;
    var type = creatureType.options[creatureType.selectedIndex].value;
    var a1 = alignType1.options[alignType1.selectedIndex].value;
    var a2 = alignType2.options[alignType2.selectedIndex].value;
    var a3 = a1.concat(a2);


}

// changes view on pressing the tab buttons on main page
function openTab(evt, tabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabs");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
