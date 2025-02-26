// Raphael Andrei M. Meneses
// Exer4

// importing from packages
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';

// Function Declarations

// generateUniqueID(String fName, String lName)
// returns:
//      String: fName[0].toLowerCase + lName.toLowerCase + (random alphanumeric String of length 8)
function generateUniqueID(fName, lName) {
    var temp = fName[0].toLowerCase() + lName.toLowerCase() + uuidv4().split('-')[0];
    return temp;
    // console.log(temp);
}

// addAccount( [ String fName, String lName, String email, int age ] )
// returns:
//      true
//          If the following conditions are true
//          - all fields are present
//          - the first name, last name, and email are non-empty strings
//          - the email is in a valid format
//          - age is at least 18
//  otherwise
//      false
// 
// Saves the input data if TRUE into this format in the file users.txt
//      fName,lName,email,generateUniqueID(fName, lName)
// NOTE: 
//      Parameters of index 4 and above are ignored.
function addAccount(inputs, debug = false) {
    // Validation flags for Debugging
    let isValid = true
    
    let isValidLength = true
    let isValidStrings = true
    let isValidEmail = true
    let isValidAge = true
    
    // Validation of inputs
    // Pre-emptive return false if we see invalid inputs
    if (inputs.length < 4) { // condition 1
        console.log('Error: Insufficient parameters')
        isValidLength = false;
    }
    // destructure the inputs array for easier input accessing
    let [fName, lName, email, age] = inputs;
    // Validation of inputs
    // condition 2, NOTE: this checks for a falsey value
    if (!fName || !lName || !email) { 
        console.log('Error: Caught empty/null strings')
        isValidStrings = false;
    }
    // condition 3
    if (!isEmail(email)) { 
        console.log('Error: Invalid email')
        isValidEmail = false;
    }
    // condition 4
    if (age < 18) { 
        console.log('Error: Underage')
        isValidAge = false;
    } 
    // Update isValid based on the conditions
    if (!isValidLength || !isValidStrings || !isValidEmail || !isValidAge) {
        isValid = false;
    }

    if (!isValid) {
        if (debug){
            let toPrint = {
                isValidLength: isValidLength,
                isValidStrings: isValidStrings,
                isValidEmail: isValidEmail,
                isValidAge: isValidAge
            }
            console.log(toPrint);
        }
        return false;
    }
    // 
    let uniqueID = generateUniqueID(fName, lName)
    console.log(fName)
    console.log(lName)
    console.log(email)
    console.log(age)
    console.log(uniqueID)
    // 

}

// addAccount(["no"])
addAccount(["no", "nah", "nn", 1,2], true)
addAccount(["no", "", "test@g.com", 1], true)
addAccount(["", "nah", "nn", 1], true)
addAccount(["no", "nah", "", 1], true)
addAccount(["no", "nah", "test@g.co", 122], true)