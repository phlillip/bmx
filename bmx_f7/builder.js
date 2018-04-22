  function info(part){
    infoText = part.dataset.info;
    console.log(infoText);
    //document.getElementById("info-box").style = "display:block, top:calc(0 - (event.clientY)), left: calc(0 - (event.clientX));";
    //document.getElementById("info-box").innerHTML = infoText;
  }

  var currentPart;	//TODO: change out global variable and use object properties instead

  // Select bike part

  function partSelect(chosenPart){
    currentPart = chosenPart.baseVal;	//SVGAnimatedString has two values, baseVal and animVal
    console.log(currentPart);			//checker

    chosenList = document.getElementsByClassName(currentPart);
      for (index = 0; index < chosenList.length; ++index) {
        chosenList[index].setAttribute("style", "display:block, background: pink");
      }

    document.getElementById('partText').innerHTML = "Currently selected part is " + currentPart;
  }

  function partTextSelect(chosenPart){
    currentPart = chosenPart;	//SVGAnimatedString has two values, baseVal and animVal
    console.log(currentPart);			//checker

    chosenList = document.getElementsByClassName(currentPart);
      for (index = 0; index < chosenList.length; ++index) {
        chosenList[index].setAttribute("style", "display:block, background: pink");
      }

    document.getElementById('partText').innerHTML = "Currently selected part is " + currentPart;
  }

  // Change colour of selected bike parts

  function changecol(chosen){
      partsList = document.getElementsByClassName(currentPart);
      for (index = 0; index < partsList.length; ++index) {
        partsList[index].setAttribute("fill", chosen);
      }
    }
