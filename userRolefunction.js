// Define a function that can answer the role of the user.

// A user can be on following roles:

// admin - with all access
// subadmin - with access to create/delete courses
// testprep - with access to create/delete tests
// user - consume content
// other - trial user

// Input:getUserRole(name, role)



//we can add variables inside the function - unique thing in js -> scope
function getUserRole(name, role) {  
    switch(role){
        case "admin":
            return `${name} has all access`;
        case "subadmin":
            return `${name} has access to create/delete courses`;
        case "testprep":
            return `${name} has access to create/delete tests`;
        case "user":
            return `${name} has access to consume content`;
        default:
            return `${name} has trial access`
    }   
}

console.log(getUserRole());


