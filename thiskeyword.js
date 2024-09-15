//part1 " THIS" KEYWORD

console.log(this); //window object

function sayhello() {   //global object
    console.log(this);//window object
}

sayhello();
