var user ="admin"

switch (user) {
    case "admin":
     return  console.log ("You have fill access");

     case "subadmin":
     return  console.log ("You have fill access");


     case "testprep":
     return  console.log ("You have access to create/delete tests");


     case "user":
     return  console.log ("get access to consume content");

     break;


     default:
        console.log("Trail user")

     break;

}