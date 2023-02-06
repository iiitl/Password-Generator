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
        navigator.clipboard.writeText(pass1);
        // document.getElementById("tooltip1").style.visibility="hidden"
        document.getElementById("copied1").style.width="0.95em"
        document.getElementById("copyp1").textContent=""   
        document.getElementById("hello1").style.fontSize="1em" 
    }
}
function copy2(){
    if(flaggen===1){
        navigator.clipboard.writeText(pass2)
        document.getElementById("copied2").style.width="0.95em"
        document.getElementById("copyp2").textContent=""   
        document.getElementById("hello2").style.fontSize="1em"   
        // document.getElementById("tooltip2").style.visibility="hidden"     
    }
}
function copy3(){
    if(flaggen===1){
        navigator.clipboard.writeText(pass3)
        document.getElementById("copied3").style.width="0.95em"
        document.getElementById("copyp3").textContent=""   
        document.getElementById("hello3").style.fontSize="1em"
        // document.getElementById("tooltip3").style.visibility="hidden"
    }
}
function copy4(){
    if(flaggen===1){
        navigator.clipboard.writeText(pass4)
        document.getElementById("copied4").style.width="0.95em"
        document.getElementById("copyp4").textContent=""   
        document.getElementById("hello4").style.fontSize="1em"   
        // document.getElementById("tooltip4").style.visibility="hidden"     
    }
}

// console.log(pass)




// ----------------------------

//! adding the theme button functionality

let darkBtn = document.querySelector('.button-box-1>*');
let lightBtn = document.querySelector('.button-box-2>*');

let rootElement = document.querySelector('html');

darkBtn.addEventListener('click', (e) => {
  rootElement.className = 'dark';
});


lightBtn.addEventListener('click', (e) => {
  rootElement.className = 'light';
});

