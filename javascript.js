// let string = "";
var input = document.getElementById("screen");

// event for Enter key
input.addEventListener("keypress", function(event) {
    console.log("input1",event.target.value);
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Enter").click();
    }
});


// function to clear screen
function AC()
{
    string = "";
    document.querySelector('input').value = string ;
}

// function for result
function result()
{   
    string = "";
    string = input.value;
    input.value = eval(string);
}

// function for backspace
function back()
{
    string = input.value;
    string  = string.substring(0, string.length-1) ;
    input.value = string;
}

// function for click on button
function clickEvent(n)
{
    string = input.value;
    string = string + n;
    input.value = string;

}

// sine value of number
function sin(){
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.sin(Number(string));
    input.value = string;
}

// cosine value of number
function cos(){
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.cos(Number(string));
    input.value = string;
}

// tan value of number
function tan(){
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.tan(Number(string));
    input.value = string;
}

// function to square the number
function square(){
    string = "";
    string = input.value;
    string = string * string;
    input.value = string;
}

// squareroot of number
function sqrt(){
    string = "";
    string = input.value;
    string = Math.sqrt(Number(string));
    input.value = string;
}

// function to give the value of pi
function pi(){
    string = "";
    string  +=  input.value;
    if(string){
        var temp = string.substring(string.length-1, string.length) ;
        if(((temp >= 0 && temp <= 9) || temp == '.' ) ){
            alert("Invalid format, either put operator or blank");
        }
        else {
            string += Math.E;
            input.value = string;
        }
    }
    else {
        string += Math.PI;
        input.value = string;
    }
}

//function to calculate the log of number with abse 10
function log()
{
    string = "";
    string = input.value;
    string = Math.log10(Number(string));
    input.value = string;
}

// function to give the constant number E
function e()
{
    string = "";
    string  +=  input.value;
    if(string){
        var temp = string.substring(string.length-1, string.length) ;
        if(((temp >= 0 && temp <= 9) || temp == '.' ) ){
            alert("Invalid format, either put operator or blank");
        }
        else {
            string += Math.E;
            input.value = string;
        }
    }
    else {
        string += Math.E;
        input.value = string;
    }
    
}