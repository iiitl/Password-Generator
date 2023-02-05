// javascript
let arr=[1,2,3,4,5,6,7,8,9,0,'!',"@","#",'$',"%",'&','*','-','_','.',"\'",'\;','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
// console.log(arr);

let pass="";
let length=arr.length;
var flaggen=0;
// console.log(length)
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent += slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = "Length of password: "+ this.value;
}
let size=slider.value;
function getRandom(){
    return Math.floor(Math.random()*arr.length)
}
function makePass(){
    if(flaggen==1){
        pass="";
        size=slider.value;
        while(size>0){
            pass+=arr[getRandom()]
            size--;
        }
        return pass; 
    }
    
}



// --------------------------------------------------------------------------------

//! trying to make the hashing algorithm more intensive and complex

//* this function returns a random number less than the parameter

function getRandomNum(lessThanNum) {
  let rNum = Math.floor((Math.random()*1000) % lessThanNum);
  // console.log(rNum);
  return rNum;
}


//* get any random index from array
//* generating random number from a random value length-getRandomNum(10) to increase complexity
let randomIndex = getRandomNum((length-getRandomNum(10)));



function makeComplexPass(requiredPassLength) {


  //* a random jump to make while looping through the `arr` array
  
  
  let complexPass = [];
  
  /*
  - ALGORITHM FUNCTIONING :-
  > start with a random index, generate a random jump over the array, if the iterator goes beyond the array, again cycle it to the beginning
  > perform the algorithm `size` number of times, i.e. the required pass length
  */

  let randomJump = getRandomNum(size);
for(let i = randomIndex; ;i+=randomJump)
{
    //! keep updating the randomJump value for complexity
    randomJump = getRandomNum(length);
    if(i>=length) {
      //* cycle back to the starting if iterator goes beyond the array
      i = i-length-1;
    }

    //* select one character
    complexPass.push(arr[i]);
    if(requiredPassLength == complexPass.length) {
      break;
    }
  }
  return complexPass;
}

// console.log(makeComplexPass(5));


// --------------------------------------------------------------------------------


//! complex passwords
let complexPass1 = makeComplexPass(size);
let complexPass2 = makeComplexPass(size);
let complexPass3 = makeComplexPass(size);
let complexPass4 = makeComplexPass(size);

// console.log(complexPass1);
// console.log(complexPass2);
// console.log(complexPass3);
// console.log(complexPass4);



var pass1
var pass2
var pass3
var pass4
function gen(){
    flaggen=1
    pass1=makePass()
    pass2=makePass()
    pass3=makePass()
    pass4=makePass()
    // document.getElementById("pass1").textContent=pass1
    document.getElementById("copyp1").textContent=pass1
    document.getElementById("copyp2").textContent=pass2
    document.getElementById("copyp3").textContent=pass3
    document.getElementById("copyp4").textContent=pass4
    document.getElementById("Pass").style.color = "#10b982"
    document.getElementById("copied1").style.width="0em"
    document.getElementById("copied2").style.width="0em"
    document.getElementById("copied3").style.width="0em"
    document.getElementById("copied4").style.width="0em"
    document.getElementById("hello1").style.fontSize="0px"
    document.getElementById("hello2").style.fontSize="0px"
    document.getElementById("hello3").style.fontSize="0px"
    document.getElementById("hello4").style.fontSize="0px"
}
function copy1(){
    if(flaggen===1){
        navigator.clipboard.writeText(complexPass1);
        // document.getElementById("tooltip1").style.visibility="hidden"
        document.getElementById("copied1").style.width="0.95em"
        document.getElementById("copyp1").textContent=""   
        document.getElementById("hello1").style.fontSize="1em" 
    }
}
function copy2(){
    if(flaggen===1){
        navigator.clipboard.writeText(complexPass2)
        document.getElementById("copied2").style.width="0.95em"
        document.getElementById("copyp2").textContent=""   
        document.getElementById("hello2").style.fontSize="1em"   
        // document.getElementById("tooltip2").style.visibility="hidden"     
    }
}
function copy3(){
    if(flaggen===1){
        navigator.clipboard.writeText(complexPass3)
        document.getElementById("copied3").style.width="0.95em"
        document.getElementById("copyp3").textContent=""   
        document.getElementById("hello3").style.fontSize="1em"
        // document.getElementById("tooltip3").style.visibility="hidden"
    }
}
function copy4(){
    if(flaggen===1){
        navigator.clipboard.writeText(complexPass4)
        document.getElementById("copied4").style.width="0.95em"
        document.getElementById("copyp4").textContent=""   
        document.getElementById("hello4").style.fontSize="1em"   
        // document.getElementById("tooltip4").style.visibility="hidden"     
    }
}

// console.log(pass)








