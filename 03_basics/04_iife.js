// Immediately Invoked Function Expression (IIFE)


// we use it like when there's a file and it contain a data connection
// like whenever our application starts directly our databse connection should start


// if you're using iife you must end with simicolon to let it know where 
// we want to end the context
(function chai () {

    // named iife
    console.log('DB CONNECTED');
}) ();

// +++++ Syntax of iife
// the first parenthesis is definition
// the second parenthesis is for execution
// we use iife bex soemtimes we can have pollution of global scope 
// so to avoid any of pollution of global scope we use iife
( (name) => {
    console.log(`DB CONNECTED ${name}`);
} ) ('Hashir')



// ++++++ iife impt points
// if you want to use two iife use a simicolon at the end of first one
// if you want name iife just see the first example
// second is unname iife and also how to pass argument and accept parameter 
