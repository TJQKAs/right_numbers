var getourData;
$(document).ready(function(){
document.getElementById('disclaimer').onclick=function(event){
var disclmes = "<table class='disclaimer_table'><tr><th>The information contained in this website is for general information purposes only. The information is provided by us and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.<br/> In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.<br/> Through this website you are able to link to other websites which are not under the control of us. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.<br/>Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</th></tr></table>";
document.getElementById("discmes").innerHTML=(disclmes);
document.getElementById('discmes').className="show";
}
document.getElementById('discmes').onclick=function(event){
document.getElementById('discmes').className="hidden";
}

      console.log(math.sqrt(4));
      // find info which we've typed in the forms
      //elems
      var lol = document.getElementById('lolz');
      //row
      var dol = document.getElementById('dolz');
      //combinations
      var mol = document.getElementById('molz');


    getourData =  function getOurData() {
        //numbers in case


        // assign to variables data which was gotten by input form
        if (lol.value < 8 && lol.value > 0){
          var elems = lol.value;
          console.log(elems);
        } else {
          var respond1 = "<table class='error_mes' id='respond01'><tr><th>Number of elements must be between 1-7 !</th></tr></table>";
         document.getElementById("error1").innerHTML=(respond1);
         document.getElementById('error1').className="show";
         function alertMessage1(){
         document.getElementById('respond01').className="hidden";
        }
        setTimeout(function() { alertMessage1() }, 5000);
        }


        if  (dol.value < 50){
        var sizeNum = dol.value;
        console.log(sizeNum);
        } else {
        var respond2 = "<table class='error_mes' id='respond02'><tr><th>Row of lottery must be between 1-49 and more than number of elements !</th></tr></table>";
        document.getElementById("error2").innerHTML=(respond2);
        document.getElementById('error2').className="show";
        function alertMessage2(){
        document.getElementById('respond02').className="hidden";
        }
        setTimeout(function() { alertMessage2() }, 5000);
 }


        if (mol.value < 101){
         var choice = mol.value;
         console.log(choice);
        } else {
        var respond3 = "<table class='error_mes' id='respond03'><tr><th>Number of combinations must be between 1- 100!</th></tr></table>";
        document.getElementById("error3").innerHTML=(respond3);
        document.getElementById('error3').className="show";
        function alertMessage3(){
        document.getElementById('respond03').className="hidden";
        }
        setTimeout(function() { alertMessage3() }, 5000);
        }


///////clear the input fields ////////
   var inputElements = document.getElementsByTagName('input');
   for(var i = 0; i < inputElements.length; i++){
     if(inputElements[i].type == "number"){
       inputElements[i].value = "";
     }
   }

   if(elems > sizeNum){
    elems = 6;
    sizeNum = 49;
   }
/////////////for debugging////
      // var elems = 6;
       // number of cases
      // var choice = 20;
      //size of row of numb
      // var sizeNum = 49;
//////////////////////////////

    function numb649(){
      // array to fill
      var chodarray = [];
      // cycle till i will be 6
      for(i=0; i <= elems; i++){
        // generate numbers
        var numB = Math.floor((Math.random()*sizeNum)+1);
        chodarray.push(numB);
        // by this statement we delete elem in array which aren't unique
        chodarray = chodarray.filter(function (e, j, chodarray) {
        return chodarray.lastIndexOf(e) === j;
        });
        // we assing to var i - number of array length
        i = chodarray.length;
        }
        // sort our elem in array
         /// math part this my variation filter, throws away the combinations with index lower than 0.33
         var averrow = math.std(chodarray)/((sizeNum-1)/2);
         var averrow = Math.round(averrow*100)/100;
         while(averrow < 0.5){
           numb649();
           break;
         }
         chodarray.sort();
         console.log(averrow);
         return chodarray;
       }
        function numb649array(){
        // create array to which we input our chodarray elems
        var str1 = [];
        // quantity of elems
        for (j=0; j<choice;j++){
        //each elem with new string
        var mull = numb649().join("-") + "\n";
        str1.push(mull);
        }
        // delete from array elems which repeat
        str1 = str1.filter(function (e, j, str1) {
        return str1.lastIndexOf(e) === j;
        });
        j = str1.length;
        // var numbid = 1;
        return str1;
      }
    // assing data from the function to the var
      var str1 = numb649array();
  // copy array because we need different format of outputs
      var array2 = str1.slice();
   // modify our str1 array because i need a view, not only numbers
      for(l=0; l<str1.length; l++){
        str1[l] = "<div class='divdata2'>" + (l+1) +"</div><br/><div class='divdata'>" + str1[l] + "</div>";
      }
      // use console for check
     console.log(array2.join(""));
     console.log(str1);
     // display length of array
      var mu = str1.length;
    // we'll show it in your screen
      var du = str1.join("<br/>");
      // we'll send it to your txt file
      var pu = array2.join(";    \n");
      // how many unique elems do we have
      console.log(mu);
      // display result on html in form
     document.getElementById("place1").innerHTML=(du);
//////////////////// that's how we've created filr and put there all our data
     (function () {
 var textFile = null,
   makeTextFile = function (text) {
     var data = new Blob([text], {type: 'text/plain'});
     // If we are replacing a previously generated file we need to
     // manually revoke the object URL to avoid memory leaks.
     if (textFile !== null) {
       window.URL.revokeObjectURL(textFile);
     }
     textFile = window.URL.createObjectURL(data);
     return textFile;
   };
   create.addEventListener('click', function () {
     var link = document.getElementById('downloadlink');
    link.href = makeTextFile(pu);
    link.style.display = 'block';
   }, false);
 })();
}
});
