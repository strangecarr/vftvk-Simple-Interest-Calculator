function compute() {
  p = parseInt(document.getElementById("principal").value);
  r = parseFloat(document.getElementById("intrate").value);
  t = parseInt(document.getElementById("years").value);
  si = (p * t * r / 100);
  var n = 2020 + t;

  document.getElementById('rprincipal').innerHTML = "deposit <mark>" + p + ".</mark>";
  document.getElementById('rintrate').innerHTML = "at an interest of <mark> " + r + "%" + ".</mark>";
  document.getElementById('rinterest').innerHTML = "You will receive <mark> " + si + ".</mark>";
  document.getElementById( 'rdate').innerHTML = "in the year <mark>" + n + ".</mark>";
	
}

 function update_rate(rate) {
            document.getElementById("percent").innerHTML = rate.value + " %";
        }



function validatePrincipal(that){
if (that.value < 1 ){
	alert("Enter a Positive number");
	that.value = " ";
	that.focus();
	}
}