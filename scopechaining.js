
//scopechaning in js

//function scope
//global scope
//local scope
//block scope
//nested scope
//lexical scope

var name = "Erica";

console.log("Hello " + name);

function sayhello() {
    var name = "errol";
    console.log("Hello " + name);
}

sayhello();