function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   let arrayCounter = [0, 0, 0, 0, 0];
   scoresArray.forEach((el) => {
      if(el >= 90) {
         arrayCounter[0]++;
      }
      else if(el <= 89 && el >= 80) {
         arrayCounter[1]++;
      }
      else if(el <= 79 && el >= 70) {
         arrayCounter[2]++;
      }
      else if(el <= 69 && el >= 60) {
         arrayCounter[3]++;
      }
      else {
         arrayCounter[4]++;
      }
   });

   return arrayCounter;
}

//buildDistributionArray(arrayScores);


//Pass in string of grades
function setTableContent(userInput) {


   //Convert string to array
   let grades = parseScores(userInput);

   //Convert numbers into letter grades and count them
   let gradeCounts = buildDistributionArray(grades);

   //Bar graph heights
   document.getElementsByClassName("bar0")[0].style.height = gradeCounts[0] * 10 + "px";
   document.getElementsByClassName("bar1")[0].style.height = gradeCounts[1] * 10 + "px";
   document.getElementsByClassName("bar2")[0].style.height = gradeCounts[2] * 10 + "px";
   document.getElementsByClassName("bar3")[0].style.height = gradeCounts[3] * 10 + "px";
   document.getElementsByClassName("bar4")[0].style.height = gradeCounts[4] * 10 + "px";

   //Grade Count
   document.getElementsByClassName("gradeA")[0].innerHTML = gradeCounts[0];
   document.getElementsByClassName("gradeB")[0].innerHTML = gradeCounts[1];
   document.getElementsByClassName("gradeC")[0].innerHTML = gradeCounts[2];
   document.getElementsByClassName("gradeD")[0].innerHTML = gradeCounts[3];
   document.getElementsByClassName("gradeF")[0].innerHTML = gradeCounts[4];
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");



