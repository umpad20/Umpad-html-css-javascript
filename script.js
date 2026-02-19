function sayHi(){
    alert("Hello thanks for clicking");
}

function sendMessage(){
    var name = document.getElementById("name").value;

    if(name == ""){
        alert("Please enter your name");
    }
    else{
        alert("Thank you " + name);
    }
}
