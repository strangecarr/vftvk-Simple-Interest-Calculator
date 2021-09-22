function compute() {
  p = parseInt(document.getElementById("principal").value);
  r = parseFloat(document.getElementById("intrate").value);
  t = parseInt(document.getElementById("years").value);
  si = (p * t * r / 100);
  var n = 2020 + t;
 //Results from campute & highlighting result
  document.getElementById('rprincipal').innerHTML = "If you deposit <mark>" + p + ".</mark>";
  document.getElementById('rintrate').innerHTML = "at an interest rate of <mark> " + r + "%" + ".</mark>";
  document.getElementById('rinterest').innerHTML = "You will receive an amount of <mark> " + si + ".</mark>";
  document.getElementById( 'rdate').innerHTML = "in the year <mark>" + n + ".</mark>";
	
}
// Update the current slider value (each time you drag the slider handle)								
 function update_rate(rate) {
            document.getElementById("percent").innerHTML = rate.value + " %";
        }


//validate principal
function validatePrincipal(that){
if (that.value < 1 ){
	alert("Enter a Positive number");  //must be greater than or equal to one
	that.value = " ";
	that.focus();  //bring focus back to principal if number is incorrect
	}
}