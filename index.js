// Raphael Andrei M. Meneses
// Exer4

// importing from packages
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
import { openSync, closeSync, appendFileSync } from 'node:fs';

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
    if (inputs.length < 4) { // condition 1
        console.log('Error: Insufficient parameters')
        isValidLength = false;
    }
    // destructure the inputs array for easier input accessing
    let [fName, lName, email, age] = inputs;

    // Validation of inputs continuation
    // condition 2, NOTE: this checks for a falsey value
    if (!fName || !lName) { 
        console.log('Error: Caught empty/null strings')
        isValidStrings = false;
    }
    // condition 3
    if (!email) { 
        console.log('Error: Invalid email')
        isValidEmail = false;
    } else if (!isEmail(email)) {
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
    
    // Pre-emptive return false if we see invalid inputs
    if (!isValid) {
        // Optional printing of what made the inputs invalid as an object
        if (debug){
            let toPrint = {
                isValidLength: isValidLength,
                isValidStrings: isValidStrings,
                isValidEmail: isValidEmail,
                isValidAge: isValidAge
            }
            console.log(toPrint);
            console.log("") // newline for readability
        }
        // returning false
        return false;
    }
    // Saving to users.txt
    // generating the uniqueID to append
    let uniqueID = generateUniqueID(fName, lName)

    // data to save
    let toSave = [fName, lName, email, age, uniqueID];
    // changing to string
    toSave = toSave.toString();


    // Snippet modified from 
    // https://nodejs.org/api/fs.html#fsappendfilesyncpath-data-options
    let fd;

    try {
        fd = openSync('users.txt', 'a');
        appendFileSync(fd, toSave);
        appendFileSync(fd, "\n");
    } catch (err) {
        console.log("Error in file")
    } finally {
    if (fd !== undefined)
        closeSync(fd);
    } // End of snippet

    // Optional debuggin object
    if (debug) {
        let toPrint = {
            fName: fName,
            lName: lName,
            email: email,
            age: age,
            uniqueID: uniqueID,
            savedText: toSave
        }
        console.log(toPrint);
    }
    // returning true after saving
    return true;
}

export default addAccount;