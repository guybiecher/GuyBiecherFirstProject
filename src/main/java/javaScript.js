
//now display is global varibule that used the save the display that the user see
//this function use to show and hide profile,Calculator,ReadMe
var nowDisplay = null ;
function showAndHidById(id){
    if (nowDisplay == null){
        nowDisplay = document.getElementById(id);
        nowDisplay.style.display = "block";
    }else {
        div = document.getElementById(id);
        if (div.style.display != "block"){
            div.style.display = "block";
            nowDisplay.style.display = "none";
            nowDisplay = div;
        }
    }
}

var sum1=0;
var RememberThisNumber = 0;
var value1=0;
var value2=0;
function Add(Calc){
	RememberThisNumber = 1;
	value1 = Calc.Input.value;
	 Calc.Input.value = "";
	 return true;
}
function Subtract(Calc){
    RememberThisNumber = 2;
    value1 = Calc.Input.value;
	Calc.Input.value = "";
	return true
}

function Multiple() {
   RememberThisNumber = 3;
   value1 = Calc.Input.value;
   Calc.Input.value = "";
   return true
 }
function Division() {
  RememberThisNumber = 4;
  value1 = Calc.Input.value;
  Calc.Input.value = "";
  return true
}

function Equal(Calc){
    if ( RememberThisNumber == 1 ){
        sum1 = eval(value1) + eval(Calc.Input.value);
    }  if ( RememberThisNumber == 2 ){
        sum1 = eval(value1) - eval(Calc.Input.value);
    }  if ( RememberThisNumber == 3 ) {
        sum1 = eval(value1) * eval(Calc.Input.value);
    }  if ( RememberThisNumber == 4 )  {
        sum1 = Math.round(eval(value1) / eval(Calc.Input.value),2);
    }     Calc.Input.value = sum1;
    return true;
}

function roundoff(){
  var sum2 = Math.round(Calc.Input.value,2);
   Calc.Input.value = sum2;
}
function clearthis(Calc){
 	Calc.Input.value="";
}
function CloseWindow(Calc){
   window.closed
   return true;
}