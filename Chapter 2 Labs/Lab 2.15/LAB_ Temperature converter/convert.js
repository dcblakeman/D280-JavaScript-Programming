window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   let cInputField = document.getElementById("cInput");
   let fInputField = document.getElementById("fInput");
   
   //Celsious Input
   cInputField.addEventListener("input", ()=> {
      fInputField.value = "";
   });

   //Ferenheight Input
   fInputField.addEventListener("input", ()=> {
      cInputField.value = "";
   });

   //Convert from ferenheit to celsious
   convertButton.addEventListener("click", ()=> {

      //Clear error message
      document.getElementById("errorMessage").innerHTML = "";

      if(fInputField.value !== "") {
         cInputField.value = convertFtoC(fInputField.value);
         
         //if input is not a number
         if(cInputField.value === "NaN") {
            document.getElementById("errorMessage").innerHTML = `${cInputField.value} is not a number`;
         }
      }
      else {
         fInputField.value = convertCtoF(cInputField.value);

         //if input is not a number
         if(fInputField.value === "NaN") {
            document.getElementById("errorMessage").innerHTML = `${fInputField.value} is not a number`;
         }
      }

      //Change Image
      if(fInputField.value < 32) {
         document.getElementById("weatherImage").src = "cold.png";
      }
      else if(fInputField.value >= 32 && fInputField.value <= 50) {
         document.getElementById("weatherImage").src = "cool.png";
      }
      else {
         document.getElementById("weatherImage").src = "warm.png";
      }
   });
}

function convertCtoF(degreesCelsius) {
   console.log(degreesCelsius);
   return parseFloat(degreesCelsius) * (9/5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (parseFloat(degreesFahrenheit) - 32) * (5/9);
}
