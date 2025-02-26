// Raphael Andrei M. Meneses
// Exer4

// importing from packages
import { v4 as uuidv4 } from 'uuid';


// Function Declarations

// generateUniqueID(String fName, String lName)
// returns:
//      String: fName[0].toLowerCase + lName.toLowerCase + (random alphanumeric String of length 8)
function generateUniqueID(fName, lName) {
    var temp = fName[0].toLowerCase() + lName.toLowerCase() + uuidv4().split('-')[0];
    return temp;
    // console.log(temp);
}