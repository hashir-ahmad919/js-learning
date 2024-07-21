// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// use shit, alt, down arrow to copy and paste down


const month = "mar";
// if we dont use break and any of the case works automatically the cases below it  will 
// also be printed except default case, so always use break after every case

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("nothing worked");
        break;
}