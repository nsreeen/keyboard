

var box = document.getElementById("main");
var textSpace = document.getElementById("textSpace");
var header = document.getElementById("header");
var mapButton = document.getElementById("mapButton");
var numberButton = document.getElementById("numberButton");
var letterButton = document.getElementById("letterButton");
var mapDiv = document.getElementById("mapdiv");

var map = false;
var numbers = false;
var keys = [];

var string = " ";


function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;


//alt letters
    // Shift + s
   if (keys[16] && keys[83]) {
          string += "ص";
          event.preventDefault();
    }

    // Shift + t
    else if (keys[16] && keys[84]) {
          string += "ط";
          event.preventDefault();
    }
    // Shift + z
    else if (keys[16] && keys[90]) {
          string += "ذ";
          event.preventDefault();
    }
    // Shift + d
    else if (keys[16] && keys[68]) {
          string += "ض";
          event.preventDefault();
    }
    // Shift + a
    else if (keys[16] && keys[65]) {
          string += "أ";
          event.preventDefault();
    }
    // Shift + h
    else if (keys[16] && keys[72]) {
          string += "ة";
          event.preventDefault();
    }
    // CAPS + s
    else if (keys[20] && keys[83]) {
          string += "ش";
          event.preventDefault();
    }
    // CAPS + t
    else if (keys[20] && keys[84]) {
          string += "ث";
          event.preventDefault();
    }



//first line letters

  else if (event.keyCode == 81) {
      string += "ق";
  }
  else if (event.keyCode == 87) {
      string += "و";
  }
  else if (event.keyCode == 82) {
      string += "ر";
  }
  else if (keys[84] && !keys[20]) {
      string += "ت";
  }
  else if (event.keyCode == 89) {
      string += "ي";
  }
  else if (event.keyCode == 69) {
      string += "ي";
  }
  else if (event.keyCode == 73) {
      string += "إ";
  }

//second line letters
  else if (keys[65]) {
      string += "ا";
  }
  else if (keys[83] && !keys[16] && !keys[20]) {
      string += "س";
  }
  else if (keys[68]) {
      string += "د";
  }
  else if (keys[70]) {
      string += "ف";
  }
  else if (keys[71]) {
      string += "غ";
  }
  else if (keys[72]) {
      string += "ه";
  }
  else if (keys[74]) {
      string += "ج";
  }
  else if (keys[75]) {
      string += "ك";
  }
  else if (keys[76]) {
      string += "ل";
  }

//third line letters
  else if (keys[90]) {
      string += "ز";
  }
  else if (keys[88]) {
      string += "ئ";
  }
  else if (keys[67]) {
      string += ".";
  }
  else if (keys[86]) {
      string += ",";
  }
  else if (keys[66]) {
      string += "ب";
  }
  else if (keys[78]) {
      string += "ن";
  }
  else if (keys[77]) {
      string += "م";
  }

// non characters
  else if (keys[32]) {
    string += "   ";
  }
  else if (keys[13]) {
    string += "<br>";
  }



  //numbers
  if (numbers)
  {
          if (keys[49]) {
              string += "١";
          }
          else if (keys[50]) {
              string += "٢";
          }
          else if (keys[51]) {
              string += "٣‎";
          }
          else if (keys[52]) {
              string += "٤‎";
          }
          else if (keys[53]) {
              string += "٥";
          }
          else if (keys[54]) {
              string += "٦";
          }
          else if (keys[55]) {
              string += "‎٧‎";
          }
          else if (keys[56]) {
              string += "٨‎";
          }
          else if (keys[57]) {
              string += "٩";
          }
          else if (keys[48]) {
              string += "٠‎";
          }
}
else
{
  //letters that take numbers
    if (keys[51])  {
        string += "ع";
    }
    else if (event.keyCode == 53) {
        string += "خ";
    }
    else if (event.keyCode == 54) {
        string += "ط";
    }
    else if (event.keyCode == 55) {
        string += "ح";
    }
    else if (keys[57]) {
        string += "ظ";
    }

}

if (keys[8])
{
  event.preventDefault();
  string = string.substr(0, (string.length-1));
}

textSpace.innerHTML = string;

// if (string.length % 90 ===0) {
//   string += "<br>";
// }

}




function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}

function onClickNumberButton() {
  numbers = true;
  numberButton.classList.add("on");
  numberButton.classList.remove("off");
  letterButton.classList.add("off");
  letterButton.classList.remove("on");

  document.getElementById("key1").innerHTML = "١";
  document.getElementById("key2").innerHTML = "٢";
  document.getElementById("key3").innerHTML = "٣‎";
  document.getElementById("key4").innerHTML = "٤";
  document.getElementById("key5").innerHTML = "٥";
  document.getElementById("key6").innerHTML = "٦";
  document.getElementById("key7").innerHTML = "٧";
  document.getElementById("key8").innerHTML = "٨";
  document.getElementById("key9").innerHTML = "٩";
  document.getElementById("key0").innerHTML = "٠";

}

function onClickLetterButton() {
  numbers = false;
  numberButton.classList.add("off");
  numberButton.classList.remove("on");
  letterButton.classList.add("on");
  letterButton.classList.remove("off");

  document.getElementById("key1").innerHTML = " ";
  document.getElementById("key2").innerHTML = " ";
  document.getElementById("key3").innerHTML = "ع‎";
  document.getElementById("key4").innerHTML = " ";
  document.getElementById("key5").innerHTML = "خ";
  document.getElementById("key6").innerHTML = "ط";
  document.getElementById("key7").innerHTML = "ح";
  document.getElementById("key8").innerHTML = " ";
  document.getElementById("key9").innerHTML = "ظ";
  document.getElementById("key0").innerHTML = " ";

}

function removeHeader() {
  document.getElementById("header").style.display = "none";
  document.getElementById("center").style.opacity = "1";
}

function showHeader() {
  document.getElementById("header").style.display = "block";
  document.getElementById("center").style.opacity = "0.4";
}

function onClickMapButton() {
  if (map == false)
  {
    map = true;
    mapDiv.style.display = "block";
    mapButton.classList.add("on");
    mapButton.classList.remove("off");
    document.getElementById("center2").style.top = "0px"
  }
  else if (map == true)
   {
    map = false;
    mapDiv.style.display = "none";
    mapButton.classList.add("off");
    mapButton.classList.remove("on");
    document.getElementById("center2").style.top = "-100px"
  }
}

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

numberButton.addEventListener("click", onClickNumberButton);
letterButton.addEventListener("click", onClickLetterButton);
mapButton.addEventListener("click", onClickMapButton);

window.addEventListener("click", removeHeader);
window.addEventListener("load", showHeader);
