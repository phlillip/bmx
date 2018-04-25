//create object NOT array:
  // ES6 defines ComputedPropertyName as part of the grammar for object literals, which allows you to write the code like this:
  // https://stackoverflow.com/questions/2274242/using-a-variable-for-a-key-in-a-javascript-object-literal
  var bmx = {
    "frame": "black",
    "wheels": "black",
    "tyres": "black",
    "drivetrain": "black",
    "seat": "black",
    "pedals": "black",
    "grips": "black",
    "gumwalls": true,
    "pads": false
    };

  function info(part){
    infoText = part.dataset.info;
    console.log(infoText);
    //document.getElementById("info-box").style = "display:block, top:calc(0 - (event.clientY)), left: calc(0 - (event.clientX));";
    //document.getElementById("info-box").innerHTML = infoText;
  }

  var currentPart;	//TODO: change out global variable and use object properties instead

  // Select bike part
  function partTextSelect(chosenPart){
    currentPart = chosenPart;	//SVGAnimatedString has two values, baseVal and animVal
    console.log(currentPart);			//checker

    chosenList = document.getElementsByClassName(currentPart);
      for (index = 0; index < chosenList.length; ++index) {
        chosenList[index].setAttribute("style", "display:block, background: pink");
      }

    document.getElementById('partText').innerHTML = "Currently selected part is " + currentPart;
  }

  // retro code for directly clicking on the bike
/*  getElementsByClassNamefunction partSelect(chosenPart){
    currentPart = chosenPart.baseVal;	//SVGAnimatedString has two values, baseVal and animVal
    console.log(currentPart);			//checker

    chosenList = document.getElementsByClassName(currentPart);
      for (index = 0; index < chosenList.length; ++index) {
        chosenList[index].setAttribute("style", "display:block, background: pink");
      }

    document.getElementById('partText').innerHTML = "Currently selected part is " + currentPart;
  }
  */

  // Change colour of selected bike parts

  function changecol(chosen){
      partsList = document.getElementsByClassName(currentPart);

      //update relevant object value
      bmx[currentPart] = chosen;

      console.log(bmx);

      //paint all relevant components
      for (index = 0; index < partsList.length; ++index) {
        partsList[index].setAttribute("fill", chosen);
      }
    }

    // Toggle button and change boolean value of optional bike parts

    function optionSelect(chosenid){

      var status = document.getElementById(chosenid).classList.toggle("unselected");
      console.log(status);

      var chosenclass = chosenid.slice(0, -6);

      partsList = document.getElementsByClassName(chosenclass);
      bmx[chosenclass] = !status;
      console.log(bmx);

      if (status == true) {
        for (index = 0; index < partsList.length; ++index) {
        partsList[index].style.visibility = "hidden";
        }
      }
        else{
          for (index = 0; index < partsList.length; ++index) {
          partsList[index].style.visibility = "visible";
          }
        }


    }

  // save BMX to local storage
  function saveBike(){
    localStorage.setItem("bmx", JSON.stringify(bmx));
    console.log(bmx);
  }

 // retrieve colour scheme from local storage
 //loop through object
 //create variables from key names
 //assign values to relevant variables
 function pageLoad()
     {
         //All your code here
     }

function showColours(){
    var retrievedData = localStorage.getItem("bmx");
    var colourscheme = JSON.parse(retrievedData);
    for (let [key, value] of Object.entries(colourscheme)) {
        console.log(key + ':' + value);
        var nextItem = key + ": " + value;
        var identity = key + "-id";
          document.getElementById(identity).innerHTML = nextItem;

    }
    console.log(colourscheme['frame']);
    var frame = colourscheme['frame'];
    alert("Frame colour is " + frame);
    document.getElementById(frame).innerHTML = frame;
}

function closeModal(){
  document.getElementById("onboarding").style.display = "none";
}
