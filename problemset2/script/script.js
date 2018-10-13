var an = new Array(8);
var solution = ["d","b","c","d","c","a","d","d"];

function mc1() {
  var x = document.getElementById("demo");
  an[0] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display1").innerHTML = "Your answer is:";
  document.getElementById("display2").innerHTML = an[0];
}

function mc2() {
  var x = document.getElementById("demo");
  an[1] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display3").innerHTML = "Your answer is:";
  document.getElementById("display4").innerHTML = an[1];
}

function mc3() {
  var x = document.getElementById("demo");
  an[2] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display5").innerHTML = "Your answer is:";
  document.getElementById("display6").innerHTML = an[2];
}

function mc4() {
  var x = document.getElementById("demo");
  an[3] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display7").innerHTML = "Your answer is:";
  document.getElementById("display8").innerHTML = an[3];
}

function mc5() {
  var x = document.getElementById("demo");
  an[4] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display9").innerHTML = "Your answer is:";
  document.getElementById("display10").innerHTML = an[4];
}

function mc6() {
  var x = document.getElementById("demo");
  an[5] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display11").innerHTML = "Your answer is:";
  document.getElementById("display12").innerHTML = an[5];
}

function mc7() {
  var x = document.getElementById("demo");
  an[6] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display13").innerHTML = "Your answer is:";
  document.getElementById("display14").innerHTML = an[6];
}

function mc8() {
  var x = document.getElementById("demo");
  an[7] = prompt("Enter letter of your multiple-choice answer:");
  document.getElementById("display15").innerHTML = "Your answer is:";
  document.getElementById("display16").innerHTML = an[7];
}

function checkAns() {
  var i;
  var accuracy = 0;
  for(i=0; i<an.length; i++) {
    if (an[i] == solution[i]) {
      accuracy += 1;
    }
  }
  var line1 = "Your answers are:";
  for (i=0;i<an.length-1; i++) {
    line1 += (" " + an[i] + ",");
  }
  line1 += (" " + an[i] + "\n");
  var line2 = "Correct answers are: d, b, c, d, c, a, d, d\n";
  var line3 = "Your score is: " + accuracy + "/" + an.length + "\n";
  window.alert(line1+line2+line3);
}
