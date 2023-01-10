// let string = "";
var input = document.getElementById("screen");
document.getElementById("myGrid").addEventListener("keypress", function(event){

    if(event.key === "Enter") {
        console.log("enter the key in grid");
        document.getElementById("Enter").click();
    }
})
input.addEventListener("keypress", function(event) {
    console.log("input1",event.target.value);
    if (event.key === "Enter") {
        console.log("enter the key");
        event.preventDefault();
        document.getElementById("Enter").click();
    }
});

function AC()
{
    console.log("ssss");
    string = "";
    document.querySelector('input').value = string ;
}

function result()
{   
    string = input.value;
    console.log(string,"string in result");
    input.value = eval(string);
}

function back()
{
    string = input.value;
    string  = string.substring(0, string.length-1) ;
    input.value = string;
}

function clickEvent(n)
{
    string = input.value;
    string = string + n;
    console.log("string",string)
    input.value = string;

}

function sin(){
    console.log("I am running");
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.sin(Number(string));
    input.value = string;
}
function cos(){
    console.log("I am running");
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.cos(Number(string));
    input.value = string;
}
function tan(){
    console.log("I am running");
    string = "";
    string += input.value;
    if(string != ""){
        string = eval(string);
    }
    console.log(string);
    string = Math.tan(Number(string));
    input.value = string;
}

function square(){
    string = "";
    string = input.value;
    string = string * string;
    console.log(string);
    input.value = string;
}

function sqrt(){
    string = "";
    string = input.value;
    string = Math.sqrt(Number(string));
    console.log(string);
    input.value = string;
}
function pi(){
    string = "";
    string  +=  input.value;
    var temp = string.substring(string.length-1, string.length) ;
    console.log(temp);
    if((temp >= 0 && temp <= 9) || temp == '.' ){
        alert("Invalid format, either put operator or blank");
    }
    else {
        string += Math.PI;
        input.value = string;
    }
}

function log(){
    string = "";
    string = input.value;
    string = Math.log10(Number(string));
    console.log(string);
    input.value = string;
}