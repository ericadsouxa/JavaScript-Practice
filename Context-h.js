//global Context 

function sayhello(){
    console.log("Here your total earning");
}


sayhello();


//Execution Context ---Variable Object || Scope Chain || Hoisting ||this keyword

//Function declaration are scanned and made available in global context
//Variable declaration are scanned and made available in global context.


function tipper(a){
    var bill =parseInt(a); //converting string to number --ParseInt
    console.log(bill + 10);

}

tipper("100");

