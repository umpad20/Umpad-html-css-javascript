function sayHi(){
    alert("Hi! Thanks for visiting my personal portfolio website. I hope you find it interesting and informative. Explore to know me more!");
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
